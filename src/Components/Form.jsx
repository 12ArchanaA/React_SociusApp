


import "./Form.css"
import Logo from "./../Assets/images/sociusLogo.svg"

const Form = () => {
  
    return(
        <div className="form-container">
                <div className="left-section">
                  <div className="login-form">

                    <div className="logo-design">
                      <img className="logo-image" src={Logo} alt="" />
                      <div className="line"></div>
                      <div className="logo-para">
                        <p>SOCIUS</p>
                      </div>
                    </div>

                    <input type="text" placeholder="username" />
                    <input type="text" placeholder="password"/>
                    <button>Log In</button>

                    <p className="log-in-para">"connect People around"</p>

                  </div>
                </div>

                <div className="right-section">
                  <div className="signUp-form">

                    <p className="sign-up-heading">Sign Up</p>
                    <div className="name-section">
                      <input type="text" placeholder="FirstName"/>
                      <input type="text" placeholder="SecondName"/>
                    </div>

                    <div className="page-division">
                      <label for="dob">Date Of Birth:</label>
                      <input type="date" placeholder="" id="dob"/>
                    </div>

                    <div className="page-division">
                          <label for="email">Email:</label>
                          <input type="text" placeholder="" id="email"/>
                    </div>      

                    <div className="page-division">
                          <label for="state">State:</label>
                          <input type="text" placeholder="" id="state"/>
                    </div> 

                    <div className="page-division">
                          <label for="city">City:</label>
                          <input type="text" placeholder="" id="city"/>
                    </div>
                    
                    <button type="submit">Sign UP</button>
                  </div>
                </div>
     </div>
    )
}
export default Form;
