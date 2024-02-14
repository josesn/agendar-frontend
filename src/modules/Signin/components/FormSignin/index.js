import ButtonSubmit from "../../../../components/ButtonSubmit";
import Loading from "../../../../components/Loading";
import Alert from "../../../../components/Alert";
import { FormContainer, CustomInput } from "./styles";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { setLocalStorage} from "../../../../storage/storage";
import { userAuthentication } from "../../../../services/auth-api";
import { toast } from 'react-toastify';
import { toastAlertSucess, toastAlertError, toastAlertWarning } from "../../../../components/Alert/alerts-type";

export default function FormSignin({user}) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const {control, register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const setAuthentication = async (data) => {
        await userAuthentication(data).then((resp) => {
            setLocalStorage('user', resp)
            navigate('/')
            setIsLoading(false)
            toast.success('Login realizado com sucesso!', toastAlertSucess)
        }).catch((err) => {
            setIsLoading(false)
            toast.error('Ops! Algo deu errado', toastAlertError)
        })
    }

    return(
        <>
            {isLoading ? <Loading /> : <></>}
            <FormContainer control={control} onSubmit={handleSubmit((data) => {
                setIsLoading(true)
                setAuthentication(data)
            })}>
                <CustomInput {...register('email')} placeholder="E-mail" type='email' required/>
                <CustomInput {...register('password')} id="password" type="password" placeholder="Senha" required/>               
            <ButtonSubmit text={'Login'} type="submit"/>
            <Alert/>
            </FormContainer>
        </>
       
    );
}