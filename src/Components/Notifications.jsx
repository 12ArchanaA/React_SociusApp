import "./Notifications.css"
import Image from "./../Assets/images/dpChat.svg" 
const Notifications = () => {
    return (
        <div className="notifications-container">
            <div className="notifications-heading">
                <h3>Notifications</h3>
            </div>
            <div className="notifications-content">

                <div className="users">
                    <div className="notification-dp-image">
                        <img src={Image} alt="" />
                    </div>
                    <div className="user-name-para">
                        <p>new user started following you</p>
                    </div>
                    <div className="time">
                        <p>1 hr ago</p>
                    </div>
                </div>

                <div className="users">
                    <div className="notification-dp-image">
                        <img src={Image} alt="" />
                    </div>
                    <div className="user-name-para">
                        <p>new user started following you</p>
                    </div>
                    <div className="time">
                        <p>1 hr ago</p>
                    </div>
                </div>

                <div className="users">
                    <div className="notification-dp-image">
                        <img src={Image} alt="" />
                    </div>
                    <div className="user-name-para">
                        <p>new user started following you</p>
                    </div>
                    <div className="time">
                        <p>1 hr ago</p>
                    </div>
                </div>

                <div className="users">
                    <div className="notification-dp-image">
                        <img src={Image} alt="" />
                    </div>
                    <div className="user-name-para">
                        <p>new user started following you</p>
                    </div>
                    <div className="time">
                        <p>1 hr ago</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Notifications