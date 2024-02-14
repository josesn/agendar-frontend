import { 
    HeaderContainer, 
    HeaderLink, 
    HeaderSpan, 
    TitleContainer, 
    HeaderNav 
} from './styles'

import { GrSchedules } from "react-icons/gr";

export default function Header({user}) {

    return(
        <>
            <HeaderContainer>
                <HeaderLink to="/">
                    <TitleContainer>
                        <GrSchedules style={{fontSize: '30px'}}/>
                        <HeaderSpan>AGENDAR.com</HeaderSpan>
                    </TitleContainer>
                </HeaderLink>
                <HeaderNav>
                    {
                        user ? 
                            <HeaderLink to="/schedule">
                                Agendar
                            </HeaderLink>
                        :
                            <></>
                    }
                    {
                        user ? 
                            <HeaderLink to="/vehicle">
                                Meu Veículo
                            </HeaderLink>
                        :
                            <></>
                    }
                    {
                        user ? 
                            <></>
                        :
                            <HeaderLink to="/signup">
                                Cadastrar
                            </HeaderLink>
                    }
                    {
                        user ? 
                            <HeaderLink to="/profile">
                                Perfil
                            </HeaderLink>
                        :
                            <HeaderLink to="/signin">
                                Login
                            </HeaderLink>
                    }
                </HeaderNav>
               
            </HeaderContainer>
        </>
    );
}

