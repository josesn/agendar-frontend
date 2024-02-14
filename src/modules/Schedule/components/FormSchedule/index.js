import ButtonSubmit from "../../../../components/ButtonSubmit";
import Loading from "../../../../components/Loading";
import Alert from "../../../../components/Alert";

import { FormContainer, CustomInput, CustomSpan, Select, Option } from "./styles";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { createSchedule } from "../../../../services/schedulings-api"; 
import { toast } from 'react-toastify';
import { toastAlertSucess, toastAlertError } from "../../../../components/Alert/alerts-type";

const defaultValues = {
    activity: "",
    vehicle: "",
    user: "",
    toDate: "",
}

export default function FormSchedule({services, user, vehicle}) {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false);
    const {control, register, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues
    });

    const onHandleSubmit = async (resp) => {
        let payloadDefaultValues = {}
        let auth_user = user
        
        payloadDefaultValues.toDate = resp.toDate ? new Date(resp.toDate).toISOString() : ""
        payloadDefaultValues.userId = auth_user ? parseInt(auth_user.id) : ""
        payloadDefaultValues.activityId = resp.activity ? parseInt(resp.activity) : ""
        payloadDefaultValues.vehicleId = vehicle ? parseInt(vehicle.id) : ""
        
        await createSchedule(payloadDefaultValues).then((p) => { 
            setIsLoading(false)
            toast.success('Agendamento realizado com sucesso!', toastAlertSucess)
            navigate('/')
        }).catch((resp) => {
            toast.error('Ops! Algo deu errado', toastAlertError)
        })
        
    }

    return(
        <>
            {isLoading ? <Loading /> : <></>}
            <FormContainer control={control} onSubmit={handleSubmit((d) => {
                setIsLoading(true)
                onHandleSubmit(d)
            })}>
                <Select {...register('activity')} placeholder="Serviço" name="activity" control={control} options={services} required>
                        <Option key='blankKey' value="" hidden disable>Selecione o serviço</Option>
                        {services.map((option, key) =>  {
                            return (
                                <Option key={option.id} value={option.id}>
                                    {option.name}
                                </Option>
                            );
                            }
                        )}
                </Select>
                <CustomInput {...register('toDate')} id="toDate" type="datetime-local" placeholder="Data" aria-label="Date and time"  required/>
            <ButtonSubmit text={'Enviar'} type="submit"/>
            <Alert />
            </FormContainer>
            
        </>
       
    );
}