import ButtonSubmit from "../../../../components/ButtonSubmit";
import Loading from "../../../../components/Loading";
import Alert from "../../../../components/Alert";
import { CustomButton, Container, FormContainer, CustomInput, CustomSpan } from "./styles";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { setLocalStorage, clearLocalStorage } from "../../../../storage/storage";
import { updateUser } from "../../../../services/users-api";
import { toast } from 'react-toastify';
import { toastAlertSucess, toastAlertError } from "../../../../components/Alert/alerts-type";



export default function FormProfile({user}) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const {control, register, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues: {
            name: "",
            email: "",
        }
    });

    useEffect(() => {
        if (user) {
            let defaultValues = {}
            let body = user
            defaultValues.name = body ? body.name : ""
            defaultValues.email = body ? body.email : ""
            reset({...defaultValues})
        }
    }, [])

    const onChangeUser = async (data) => {
        await updateUser(data, user.id).then((resp) => {
            console.log('Usuário atualizado')
            setLocalStorage('user', resp)
            setIsLoading(false)
            toast.success('Dados do usuário foram atualizado com sucesso!', toastAlertSucess)
        }).catch((err) => {
            console.log('Usuário atualizado')
            setIsLoading(false)
            toast.error('Ops! Algo deu errado', toastAlertError)
        })
    }

    const onHandleLogout = async () => {
        clearLocalStorage()
        navigate('/signin')
    }

    return(
        <>
            {isLoading ? <Loading /> : <></>}
                <FormContainer control={control} onSubmit={handleSubmit((data) => {
                        console.log("DATA FORM: ", data)
                        setIsLoading(true)
                        onChangeUser(data)
                    })}>
                        <CustomInput {...register('name', 
                        {required: true, minLength: 1, maxLength: 255})}
                        placeholder="Nome Completo" 
                        required/>
                        <CustomInput {...register('email')} placeholder="E-mail" required/>
                    <ButtonSubmit text={'Enviar'} type="submit"/>
                </FormContainer>
                <Container>
                    <CustomButton onClick={() => onHandleLogout()} color={'#7d0f1a'}>Sair</CustomButton>
                </Container>
            <Alert />
        </>
       
    );
}