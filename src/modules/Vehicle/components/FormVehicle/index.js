import ButtonSubmit from "../../../../components/ButtonSubmit";
import Loading from "../../../../components/Loading";
import Alert from "../../../../components/Alert";
import { FormContainer, CustomInput, Select, Option } from "./styles";
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { createVehicle, updateVehicle } from "../../../../services/vehicles-api"; 
import { setVehicle } from "../../../../redux/slices/vehicleSlice";
import { toast } from 'react-toastify';
import { toastAlertSucess, toastAlertError, toastAlertWarning } from "../../../../components/Alert/alerts-type";

const vehicleBrands = [
    {value: 'BUGATTI',label: 'BUGATTI'},
    {value: 'CITROEN',label: 'CITROEN'},
    {value: 'CHEVROLET',label: 'CHEVROLET'},
    {value: 'CHRYSLER',label: 'CHRYSLER'},
    {value: 'FIAT',label: 'FIAT'},
    {value: 'FORD',label: 'FORD'},
    {value: 'FERRARI',label: 'FERRARI'},
    {value: 'GURGEL',label: 'GURGEL'},
    {value: 'HONDA',label: 'HONDA'},
    {value: 'HYUNDAI',label: 'HYUNDAI'},
    {value: 'KIA',label: 'KIA'},
]

const defaultValues = {
    brand: "",
    model: "",
    color: "",
    plate: "",
    year: "",
    userId: ""
}

export default function FormVehicle({vehicle, user}) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const {control, register, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues,
    });

    useEffect(() => {
        if (vehicle) {
            let defaultFormValues = {}
            defaultFormValues.brand = vehicle ? vehicle.brand : ""
            defaultFormValues.model = vehicle ? vehicle.model : ""
            defaultFormValues.color = vehicle ? vehicle.color : ""
            defaultFormValues.plate = vehicle ? vehicle.plate : ""
            defaultFormValues.year = vehicle ? vehicle.year : ""
            defaultFormValues.userId = user ? parseInt(user.id) : ""
            reset({...defaultFormValues})
        }
    }, [vehicle])

    const onHandleCreate = async (data) => {
        let defaultFormValues = {}
        defaultFormValues.brand = data ? data.brand : ""
        defaultFormValues.model = data ? data.model : ""
        defaultFormValues.color = data ? data.color : ""
        defaultFormValues.plate = data ? data.plate : ""
        defaultFormValues.year = data ? data.year : ""
        defaultFormValues.userId = user ? parseInt(user.id) : ""
        reset({...defaultValues})

        await createVehicle(defaultFormValues).then((resp) => {
            dispatch(setVehicle(resp))
            toast.success('Veículo cadastrado com sucesso!', toastAlertSucess)
            setIsLoading(false)
        }).catch((err) => {
            toast.error('Ops! Algo deu errado', toastAlertError)
            setIsLoading(false)
        })
    }

    const onHandleUpdate = async (data) => {
        let defaultFormValues = {}
        defaultFormValues.brand = data ? data.brand : ""
        defaultFormValues.model = data ? data.model : ""
        defaultFormValues.color = data ? data.color : ""
        defaultFormValues.plate = data ? data.plate : ""
        defaultFormValues.year = data ? data.year : ""
        defaultFormValues.userId = user ? parseInt(user.id) : ""
        reset({...defaultValues})

        await updateVehicle(defaultFormValues, vehicle.id).then((resp) => {
            dispatch(setVehicle(resp))
            toast.success('Veículo atualizado com sucesso!', toastAlertSucess)
            setIsLoading(false)
        }).catch((err) => {
            toast.error('Ops! Algo deu errado', toastAlertError)
            setIsLoading(false)
        })
    }

    return(
        <>
            {isLoading ? <Loading /> : <></>}
            <FormContainer control={control} onSubmit={handleSubmit((form) => {
                if (vehicle) {
                    setIsLoading(true)
                    onHandleUpdate(form)
                } else{
                    setIsLoading(true)
                    onHandleCreate(form)
                }
                
            })}>
               
               <Select {...register('brand')} placeholder="Marca" name="brand" control={control} options={vehicleBrands} required>
                        <Option key='blankKey' value="" hidden disable>Selecione a marca</Option>
                        {vehicleBrands.map((option, key) =>  {
                            return (
                                <Option key={option.value} value={option.value}>
                                    {option.label}
                                </Option>
                            );
                            }
                        )}
                </Select>
                <CustomInput {...register('model')} pattern="[a-zA-Z]+" placeholder="Modelo" required/>
                <CustomInput {...register('color')} pattern="[a-zA-Z]+" placeholder="Cor" required/>
                <CustomInput {...register('plate')} placeholder="Placa" required/>
                <CustomInput {...register('year')} type="number" placeholder="Ano (AAAA)" required/>
            <ButtonSubmit text={'Enviar'} type="submit"/>
            </FormContainer>
            <Alert />
            
        </>
    );
}