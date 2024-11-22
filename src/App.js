import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Loading from './components/Loading/Loading';
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
        username: name,
        email: email,
        phonenumber: phone,
    };
    await axios.post('https://wifi-backend.onrender.com/user', payload).then((res) => {
        setLoading(false);
        alert("User registered successfully");
    }).catch((err) => {
        console.log(err);
        setLoading(false);
    });
  };

  return (
    <>
      {loading && <Loading />}
      <div className="App">
        <div className="header">
          <h1>Welcome to SevenGateLLC</h1>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="name">YOUR NAME</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
