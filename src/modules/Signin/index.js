import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import FormSignin from "./components/FormSignin";

import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { findLocalStorage } from "../../storage/storage";

export default function Signin() {
    const navigate = useNavigate();
    const [isAuthenticated, setAuthenticated] = useState(() => {
        const user = findLocalStorage("user")
        if (user) {
            navigate('/')
            return user
        } else {
            return null
        }
    });

    return(
        <>
            <Header user={isAuthenticated}/>
            <Container>
                <FormSignin user={isAuthenticated}/>
            </Container>
            <Footer />
        </>
    );
}