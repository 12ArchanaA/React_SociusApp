import './Profile.css';
import User from "./../Assets/images/user/user_solid.svg"
import Camera from "./../Assets/images/user/camera-solid.svg"
import Settings from "./../Assets/images/user/user_settings.svg"
import Home from "./../Assets/images/user/user_home.svg"
import Chat from "./../Assets/images/user/user_chat.svg"
import Post from "./../Assets/images/user/user_post.svg"
import Search from "./../Assets/images/user/user_search.svg"
import Notification from "./../Assets/images/user/user_notification.svg"




//  import First from "./../Assets/images/user/first_post.svg"
//  import Second from "./../Assets/images/user/second_post.svg"
//  import Third from "./../Assets/images/user/third_post.svg"


const Profile=() => {
    return(
        <div className="profile-container">
            <div className="settings">
                <img className="settings-image" src={Settings} alt="" />
                <p className="settings-para">Settings</p>
            </div>

            <div className="circle">
                <img className="user-image" src={User} alt="" />
                <img className="camera-image" src={Camera} alt="" />
            </div>

            <p className="username-heading">USERNAME</p>

            <div className="follow">

                <div className="followers">
                    <p>followers</p>
                </div>

                <div className="line"></div>
                
                <div className="following">
                    <p>following</p>
                </div>
            </div>
            {/* <div className="image-division" >
                
                    <img className="post-image" src={First} alt="" />
                    <img className="post-image" src={Second} alt="" />
                    <img className="post-image" src={Third} alt="" />
                
            </div>  */}
            <div className="footer-division">
                    <div className="footer-icon">
                        <img  src={Home} alt="" />
                        <p className="footer-para">Home</p>
                    </div>

                    <div className="footer-icon">
                        <img src={Chat} alt="" />
                        <p className="footer-para">Chat</p>
                    </div>

                    <div className="footer-icon">
                        <img src={Post} alt="" />
                        <p className="footer-para">Post</p>
                    </div>
                    <div className="footer-icon">
                        <img src={Search} alt="" />
                        <p className="footer-para">Search</p>
                    </div>

                    <div className="footer-icon">
                        <img src={Notification} alt="" />
                        <p className="footer-para">Notification</p>
                    </div>
            </div>
        </div>
        
    )
}
export default Profile
