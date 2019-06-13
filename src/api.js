import axios from 'axios';

export const getCookList = ({viewValue,typeSort})=>{
    return axios.get(`/api/v1.0/cookList?length=${viewValue}&typeSort=${typeSort}`)
    .then(result=>result.data)
    .catch(err=>[]);
 }

 export const getCookListByInputValue = ({inputValue,typeSort})=>{
   return axios.get(`/api/v1.0/cookList/item?inputValue=${inputValue}&typeSort=${typeSort}`)
   .then(result=>result.data)
   .catch(err=>[]);
}

 

 export const addNewCookItem =({id,name,date,description,img})=>{
    return axios.post(`/api/v1.0/cookList`,{
        id,
        name,
        date,
        description,
        img
    })
    .then(result=>result.data)
    .catch(err=>"Sorry there was error :(");
 }

 export const updateCookItemById =({id,name,date,description,img})=>{
   return axios.put(`/api/v1.0/cookList/${id}`,{
       id,
       name,
       date,
       description,
       img
   })
   .then(result=>result.data)
   .catch(err=>"Sorry there was error :(");
}

 export const saveImage=(img)=>{
    var formData = new FormData();
    formData.append('image',img,img.name);
    return fetch('/api/v1.0/cookList/image',{
       method:"POST",
       body:formData
    })
    .then(result=>result.json())
    .then((result)=>result.path)
    .catch(err=>"Sorry there was error :(");
 }