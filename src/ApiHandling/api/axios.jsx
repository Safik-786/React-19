import axios from "axios";

  
export const axiosInstancs= axios.create({
    baseURL:"https://6901f2bfb208b24affe460ef.mockapi.io/"
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