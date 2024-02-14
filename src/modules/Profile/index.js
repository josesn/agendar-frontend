import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import FormProfile from "./components/FormProfile";

import { useState } from 'react';
import { findLocalStorage } from "../../storage/storage";


export default function Profile() {
    const [isAuthenticated, setAuthenticated] = useState(() => {
        const find_user = findLocalStorage("user")
        if (find_user) {
            return find_user
        } else {
            return null
        }
    });

    return(
        <>
            <Header user={isAuthenticated}/>
            <Container>
                <FormProfile user={isAuthenticated}/>
            </Container>
            <Footer />
        </>
    );
}