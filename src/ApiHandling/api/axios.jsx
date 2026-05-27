import axios from "axios";
import { data } from "react-router-dom";

 
export const axiosInstancs= axios.create({
    baseURL:"https://69832df99c3efeb892a4bc8e.mockapi.io"
})

 

// axiosInstancs.post('/users', {
//     name: 'John Doe',
//     age: 25,
//     avatar: 'https://example.com/avatar.jpg'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


//   axiosInstancs.get('/users')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });