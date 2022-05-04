import Phone from "./../Assets/images/otp/otp_phone.svg"
import Next from "./../Assets/images/otp/otp_next.svg"
import './Otp.css'
const Otp = () => {
    return(
        <div className="container">
            <div className="otp-left-section">
                <div className="content">
                    <h2>Enter OTP :</h2>
                    <div className="division">
                        <input className="underline" type="text" maxLength={1}/>
                        <input className="underline" type="text" maxLength={1}/>
                        <input className="underline" type="text" maxLength={1}/>
                        <input className="underline" type="text" maxLength={1}/>
                    </div>
                    <br />
                    <div className="message-part">
                        <div className="left-para-left">
                            <p>
                                Didn't receive OTP?
                            </p>
                        </div>

                        <div className="left-para-right">
                            <p>
                                Resend OTP
                            </p> 
                        </div>
                    </div> 
                     <div className="next-button">
                         <img src={Next} alt="" />
                     </div>
                <div/>    
            </div>
        </div>

            <div className="otp-right-section">
                <div className="image-section">
                    <img className="phone-image" src={Phone} alt="" />
                </div>
                
                <p className="right-para">we have send an OTP to your registered mobile number</p>

            </div>

        </div>

    )

}
export default Otp