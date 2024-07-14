import React, { useEffect, useState } from 'react';
import { API_URL } from '../Constant/URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Read = () => {
    const [apidata, setapidata] = useState([]);
    const navigate = useNavigate();

    const updateuser = ({ id, name, username, email, phone, address, website, companyName}) => {
        localStorage.setItem("id",id)
        localStorage.setItem("name", name);
        localStorage.setItem("username", username);
        localStorage.setItem("email",email);
        localStorage.setItem("phone", phone);
        localStorage.setItem("address", address);
        localStorage.setItem("website", website);
        localStorage.setItem("companyName", companyName); // Added this line
        
        navigate('/update');
    };

    // Deleting user details
    const deleteuser = async (id) => {
      alert(
        "do you want to delete "
      )
        try {
            await axios.delete(`${API_URL}/${id}`);
            getapi();
        } catch (error) {
            console.error("Error deleting user: ", error);
        }
    };

    // Getting data from API
    const getapi = async () => {
        try {
            const res = await axios.get(API_URL); // Using axios to get the API URL
            setapidata(res.data); // Updating the state value
        } catch (error) {
            console.error("Error fetching data: ", error); 
        }
    };

    useEffect(() => {
        getapi();
    }, []);

    return (
      <table className="table mt-5 ">
      <thead>
        <tr >
        <th scope="col" className='fs-5  p-3'>Id</th>
          <th scope="col" className='fs-5 p-3'>Name</th>
          <th scope="col" className='fs-5 p-3'>Username</th>
          <th scope="col" className='fs-5 p-3'>Email</th>
          <th scope="col" className='fs-5 p-3'>Phone</th>
          <th scope="col" className='fs-5 p-3'>Address</th>
          <th scope="col" className='fs-5 p-3'>Website</th>
          <th scope="col" className='fs-5 p-3'>Company </th>
          <th scope="col" className='fs-5 p-3'>Delete</th>
          <th scope="col" className='fs-5 p-3'>Update</th>
          
        </tr>
      </thead>
<tbody className=''>
        {apidata.map(data=>(
          <tr  key={data.id}>
          <th scope="row">{data.id}</th>
          <td><b>{data.name}</b></td>
          <td>{data.username}</td>
          <td>{data.email}</td>
          <td>{data.phone} </td>
          <td>{data.address}</td>
          <td>{data.website}</td>
          <td>{data.company}</td>
          <td ><button onClick={()=>{
            deleteuser(data.id)
          }} className='btn btn-danger'>Delete</button>
          </td>
          <td>
           <button onClick={()=>{
            updateuser(data)
           }} className='btn btn-success'>update</button></td>
         
         
        </tr>
        ))}      
        
     
      </tbody>
    </table>)
};

export default Read;
