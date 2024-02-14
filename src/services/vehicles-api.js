import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export function findAllVehicles() {
    const resp = api.get("/vehicles")
      .then((response) => response.data)
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    
    console.log('teste: ', resp)
    return resp
  }
  
export function createVehicle(data) {
    let payload = data
    const resp = api.post("/vehicles/", payload)
        .then((response) => response.data)
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });

    return resp
}

export function updateVehicle(data, id) {
    let payload = data
    const resp = api.patch(`/vehicles/${id}`, payload)
        .then((response) => response.data)
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    
    return resp
    }
    

export function deleteVehicle(id) {
    const resp = api.delete(`/vehicles/${id}`)
    .then((response) => response.data)
    .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });

    return resp
}