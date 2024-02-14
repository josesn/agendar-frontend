import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export function findAllServices() {
    const resp = api.get("/activities")
      .then((response) => response.data)
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    
    console.log('teste: ', resp)
    return resp
  }
  
export function createService(data) {
  let payload = data
  const resp = api.post("/activities/", payload)
      .then((response) => response.data)
      .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
      });

  return resp
}

export function deleteService(data) {
  const resp = api.delete(`/activities/${data}`)
    .then((response) => response.data)
    .catch((err) => {
    console.error("ops! ocorreu um erro" + err);
    });

  return resp
}