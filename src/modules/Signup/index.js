import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import FormSignup from "./components/FormSignup";

import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { findLocalStorage } from "../../storage/storage";

export default function Signup() {
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
                <FormSignup user={isAuthenticated}/>
            </Container>
            <Footer />
        </>
    );
}