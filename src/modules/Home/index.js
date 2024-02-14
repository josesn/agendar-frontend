import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import ScheduleList from "./components/ScheduleList";
import Alert from "../../components/Alert";
import Banner from "../../components/Banner";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react"; 
import { findAllSchedules } from "../../services/schedulings-api";
import { setSchedulings } from "../../redux/slices/scheduleSlice";
import { findLocalStorage } from "../../storage/storage";
import { toastAlertError } from "../../components/Alert/alerts-type";
import { toast } from 'react-toastify';

export default function Home() {
    const dispatch = useDispatch()
    const schedules = useSelector(state => state.schedulings.schedulings)
    const [pending, setPending] = useState(true);

    const [isAuthenticated, setAuthenticated] = useState(() => {
        const user = findLocalStorage("user")
        if (user) {
            return user
        } else {
            return null
        }
    });

    const fetchSchedules = async () => {
        await findAllSchedules().then((data) => {
            dispatch(setSchedulings(data))
            setPending(false)
        }).catch((err) => {
            toast.error('Ops! Algo deu errado', toastAlertError)
        })
    }

    useEffect(() => {
        if (isAuthenticated) {
            fetchSchedules()
        } 
    }, [])

    return(
        <>
            <Header user={isAuthenticated}/>
            <Alert />
            <Container>
                {
                    isAuthenticated ?
                        <ScheduleList data={schedules} loading={pending} user={isAuthenticated}/>
                    :
                        <Banner />
                }
            </Container>
            <Footer />
        </>
    );
}