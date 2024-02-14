import { ContainerPage, ContainerBody } from "./styles";

export default function Container({children}) {
    return(
       <ContainerPage>
            <ContainerBody>{children}</ContainerBody>
       </ContainerPage>
    );
}