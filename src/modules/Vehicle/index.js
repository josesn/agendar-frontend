import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import FormVehicle from "./components/FormVehicle";
import { useDispatch, useSelector } from "react-redux";
import { findAllVehicles } from "../../services/vehicles-api";
import { findLocalStorage } from "../../storage/storage";
import { useState } from "react";
import { setVehicle } from "../../redux/slices/vehicleSlice";
import { useEffect } from "react";

export default function Vehicle() {
    const dispatch = useDispatch()
    const vehicle = useSelector(state => state.vehicles.vehicle)
    const [isAuthenticated, setAuthenticated] = useState(() => {
        const user = findLocalStorage("user")
        if (user) {
            return user
        } else {
            return null
        }
    });

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
        findVehicles()
    }, [])


    return(
        <>
            <Header user={isAuthenticated}/>
            <Container>
                <FormVehicle vehicle={vehicle} user={isAuthenticated}/>
            </Container>
            <Footer />
        </>
      
    );
}