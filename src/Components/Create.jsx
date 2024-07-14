import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../Constant/URL';
import './Create.css';
import { useNavigate } from 'react-router-dom';

export const Create = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address,setAddress]=useState('')

  const [website, setWebsite] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const navigate = useNavigate();

  const postData = async () => {
    
    try {
      await axios.post(API_URL, {
      name,
        username,
        email,
        address,
        phone,
        website,
        company
      });
      alert('User created successfully!');
      navigate("/read");

      setName('');
      setUsername('');
      setEmail('');
     setAddress('')
      setWebsite('');
      setPhone('');
      setCompany('');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user. Please try again.');
    }
  };

  return (
    <div className='container  create-div mt-5 create-form'>
      
      <form className="row g-3 p-3 container ">
      <h5 className='text-success'>Create User</h5>
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
          <label htmlFor="inputCompany" className="form-label">Company Name</label>
          <input type="text" className="form-control" id="inputCompany" value={company} onChange={(e) => setCompany(e.target.value)}  required />
        </div>

        <div className="col-12">
          <button type="button" className="btn btn-success" onClick={postData}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
