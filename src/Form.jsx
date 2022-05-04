

import './App.css';
import './index.css';

const Form = () => {
  
    return(
        <div>
            <main>
                <div className="left-section">
                  <div className="login-form">
                    <h2 id='white-heading'>Log In</h2>
                    <input type="text" placeholder="username" />
                    <input type="text" placeholder="password"/>
                    <button>Log In</button>

                    <p>"connect People around"</p>

                  </div>
                </div>

                <div className="right-section">
                  <div className="signUp-form">

                    <h2>Sign In</h2>
                    <div className="name-section">
                      <input type="text" placeholder="FirstName"/>
                      <input type="text" placeholder="SecondName"/>
                    </div>

                    <div className="page-division">
                      <label for="dob">Date Of Birth:</label>
                      <input type="date" placeholder=""/>
                    </div>

                    <div className="page-division">
                          <label for="email">Email:</label>
                          <input type="text" placeholder=""/>
                    </div>      

                    <div className="page-division">
                          <label for="state">State:</label>
                          <input type="text" placeholder=""/>
                    </div> 

                    <div className="page-division">
                          <label for="city">City:</label>
                          <input type="text" placeholder=""/>
                    </div>
                    
                    <button type="submit">Sign UP</button>
                  </div>
                </div>
        </main>
     </div>

    )
}
export default Form;
