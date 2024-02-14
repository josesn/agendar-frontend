import ButtonSubmit from "../../../../components/ButtonSubmit";
import Loading from "../../../../components/Loading";

import { FormContainer, CustomInput, CustomSpan } from "./styles";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { setLocalStorage } from "../../../../storage/storage"; 
import { createUser } from "../../../../services/users-api";

export default function FormSignup({user}) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const {control, register, handleSubmit, getValues, watch, formState: {errors}} = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            staff: "",
        }
    });
    const password = watch("password", "");

    const sendUserData = async (data) => {
        if (data.password_repeat) {
            delete data.password_repeat
        }
        await createUser(data).then((resp) => {
            navigate('/signin')
            setIsLoading(false)
        }).catch((err) => {
            setIsLoading(false)
        })
    }

    return(
        <>
            {isLoading ? <Loading /> : <></>}
            <FormContainer control={control} onSubmit={handleSubmit((data) => {
                setIsLoading(true)
                sendUserData(data)
            })}>
                <CustomInput {...register('name')} placeholder="Nome Completo" required/>
                <CustomInput {...register('email')} placeholder="E-mail" type='email' required/>
                <CustomInput {...register('password')} id="password" type="password" placeholder="Senha" required/>
                <CustomInput {...register("password_repeat")} id="password_repeat" type="password" placeholder="Confirmar senha" required/>
                {watch("password_repeat") !== watch("password") &&
                        getValues("password_repeat") ? (
                            <CustomSpan>As senhas não são iguais. Tente novamente.</CustomSpan>
                        ) : null}
            <ButtonSubmit text={'Enviar'} type="submit"/>
            </FormContainer>
        </>
       
    );
}