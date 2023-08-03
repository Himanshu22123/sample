import React, { useState } from 'react'
import "./s.css"
// eslint-disable-next-line
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
const Signup = () => {
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');
    const [field3, setField3] = useState('');
    const [field4, setField4] = useState('');
    const [field5, setField5] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Send data to the backend API endpoint
        await axios.post('http://localhost:5000/register', {
            field1,
            field2,
            field3,
            field4,
            field5       
        });  
        alert('Data saved successfully!');
      } catch (error) {
        console.error(error);
        alert('Failed to save data.');
      }
    };


  return (
  <div>

      <body>

        <div className="wrapper">
            <form  onSubmit={handleSubmit} className="form-box">
                <div className="register-container" id="register">
                    <div className="top">
                        <span>Have an account? <Link to="/signin">Login
                </Link></span>
                        <header>Sign up</header>
                    </div>
                    <div className="two-forms">
                        <div className="input-box">
                            <input type="text" className="input-field" placeholder="First Name" name="fname"  onChange={(e) => setField1(e.target.value)}/>
                            <i className="bx bx-user"></i>
                        </div>
                        <div className="input-box">
                            <input type="text" className="input-field" placeholder="Last Name" name="lname" onChange={(e) => setField2(e.target.value)}/>
                            <i className="bx bx-user"></i>
                        </div>
                    </div>
                    
                    <div className="input-box">
                        <input type="text" className="input-field" placeholder="Username" name="username" onChange={(e) => setField3(e.target.value)}/>
                        <i className="bx bx-user"></i>
                    </div>
                    
                    <div className="input-box">
                        <input type="email" className="input-field" placeholder="Email" name="email" onChange={(e) => setField4(e.target.value)}/>
                        <i className="bx bx-envelope"></i>
                    </div>

                    <div className="input-box">
                        <input type="password" className="input-field" placeholder="Password" name="password"onChange={(e) => setField5(e.target.value)}/>
                        <i className="bx bx-lock-alt"></i>
                    </div>
                   

                    <div className="input-box">
                        <input type="submit" name="signup" className="submit" value="Register" />
                    </div>
                  

                    <div className="two-col">
                        <div className="one">
                            <input type="checkbox" id="register-check"/>
                            <label for="register-check">Remember Me</label>
                        </div>
                        <div className="two">
                            <label>
                                
                            </label>
                        </div>
                    </div>
                </div>

              
            </form>
        </div>


      </body>

  </div >
  )
}

export default Signup
