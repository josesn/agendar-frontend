import { BannerButton, BannerContainer, BannerDescription } from "./styles";

import { useNavigate } from "react-router-dom";

export default function Banner() {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/signup')
    }

    return(
        <>
        <BannerContainer>
            <BannerDescription >
                Escolha agora um dos nossos serviços e faça o seu agendamento.
            </BannerDescription>
            <BannerButton onClick={handleSignUp} variant="outlined">Cadastrar</BannerButton>
        </BannerContainer>
        </>
    );
}