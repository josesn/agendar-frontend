import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export function findAllSchedules() {
    const resp = api.get("/schedulings")
      .then((response) => response.data)
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    
    console.log('teste: ', resp)
    return resp
  }
  
export function createSchedule(data) {
  let payload = data
  const resp = api.post("/schedulings/", payload)
      .then((response) => response.data)
      .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
      });

  return resp
}

export function updateSchedule(data) {
  const resp = api.patch(`/schedulings/${data}`)
      .then((response) => response.data)
      .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
      });
  
  return resp
  }

export function deleteSchedule(data) {
  const resp = api.delete(`/schedulings/${data}`)
      .then((response) => response.data)
      .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
      });

  return resp
}