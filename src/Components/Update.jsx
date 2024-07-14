import React, { useEffect, useState } from 'react';
import { API_URL } from '../Constant/URL';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address,setAddress]=useState('')

  const [website, setWebsite] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/read"); 
  };
  const updateuser = async () => {
    try {
      await axios.put(`${API_URL}/${id}`, {
        id,
        name,
        username,email,address,website,phone,company
       
      });
      navigate("/read"); 
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem('id');
    const name = localStorage.getItem('name');
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    const address = localStorage.getItem('address');
    const website = localStorage.getItem('website');
    const company = localStorage.getItem('company');

    setId(userId);
    setName(name);
    setUsername(username);
    setEmail(email);
    setPhone(phone);
    setAddress(address);
    setWebsite(website);
    setCompany(company);
  }, []);

  return (
    <div className='container  create-div mt-5  create-form'>
    <h2>Create User</h2>
    <form className="row g-3 p-4 ">
      <div className="col-md-6">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)}  required/>
      </div>
      <div className="col-md-6">
        <label htmlFor="username" className="form-label">Username:</label>
        <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="col-md-6">
        <label htmlFor="phone" className="form-label">Phone:</label>
        <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>

      <div className="col-12">
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="form-control" id="inputAddress" value={address} onChange={(e) => setAddress(e.target.value)}  required/>
      </div>

      

      <div className="col-md-6">
        <label htmlFor="website" className="form-label">Website</label>
        <input type="text" className="form-control" id="inputZip" value={website} onChange={(e) => setWebsite(e.target.value)}  required />
      </div>

      <div className="col-md-6">
        <label htmlFor="inputCompany" className="form-label">Company </label>
        <input type="text" className="form-control" id="inputCompany" value={company} onChange={(e) => setCompany(e.target.value)}  required />
      </div>

      <div className="col-12 d-flex justify-content-between">
        <button type="button" className="btn btn-success" onClick={updateuser}>Submit</button>
        <button  type="button" className="btn btn-danger" onClick={handleCancel} >Cancel</button>
      </div>
    </form>
  </div>
  );
};

export default Update;
