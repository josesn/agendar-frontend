import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import FormSchedule from "./components/FormSchedule";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { findLocalStorage } from "../../storage/storage";
import { setAllServices } from "../../redux/slices/servicesSlice";
import { findAllServices } from "../../services/services-api";
import { findAllVehicles } from "../../services/vehicles-api"; 
import { setVehicle } from "../../redux/slices/vehicleSlice";

export default function Schedule() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const services = useSelector(state => state.services.services)
    const vehicle = useSelector(state => state.vehicles.vehicle)

    const [isAuthenticated, setAuthenticated] = useState(() => {
        const user = findLocalStorage("user")
        if (user) {
            return user
        } else {
            navigate('/')
            return null
        }
    });

    const fetchServices = async () => {
        await findAllServices().then((data) => {
            dispatch(setAllServices(data))
        })
    }

    const findVehicles = async () => {
        await findAllVehicles().then((resp) => {
            if (resp) {
                console.log(resp)
                let filterVehicles = resp.filter((vehicle) => vehicle.userId === isAuthenticated.id)
                console.log(filterVehicles[filterVehicles.length - 1])
                dispatch(setVehicle(filterVehicles[filterVehicles.length - 1]))
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    
    useEffect(() => {
        fetchServices()
        if (!vehicle) {
            findVehicles()
        }
    }, [])

    return(
        <>
        <Header user={isAuthenticated}/>
        <Container>
            <FormSchedule services={services} user={isAuthenticated} vehicle={vehicle}/>
        </Container>
        <Footer />
        </>
    );
}