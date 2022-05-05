import "./PersonalChat.css"
import DpPic from "./../Assets/images/dpChat.svg"
const PersonalChat = () => {
    return(
        <div className="PersonalChat-container">
            <div className="user-container">
                <div className="user-dp">
                    {/* <div className="dp"></div> */}
                    <img src={DpPic} alt="" />
                </div>

                <div className="user-name">
                    <p>user</p>
                </div>
            </div>
            <div className="chatting-container">
                <div className="heading">
                    <p>Today</p>
                </div>
                
                <div className="chatting-part">
                    <div className="sender">
                        
                    </div>
                    <div className="receiver">
                        
                    </div>
                </div>

                <div className="message-part">
                    <p>Your message</p>
                </div>
            </div>
        </div>
    )
} 
export default PersonalChat