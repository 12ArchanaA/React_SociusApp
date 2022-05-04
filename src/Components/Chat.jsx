import "./Chat.css"
import SearchIcon from "./../Assets/images/user/user_search.svg"
import BackIcon from "./../Assets/images/back-arrow.svg"
import Camera from "./../Assets/images/user/camera-solid.svg"
import DpPicture from "./../Assets/images/dpChat.svg"
const Chat = () => {
    return(
        <div className="chat-container">
            <div className="upper-part">
                <div className="back-button">
                    <img className="back-button-image" src={BackIcon} alt="" />
                </div>

                <div className="typing-part"> 
                    <input className="input-part" type="text" />
                    <img className="search-image" src={SearchIcon} alt="" />
                </div>
            </div>

            <div className="bottom-part">

                <div className="chat-section-content">
                    <div className="dp-part">
                        <img className="image-dp" src={DpPicture} alt="" />
                    </div>
                    <div className="name-part">
                        <p className="name-para">hello</p>
                    </div>
                    <div className="camera-part">
                        <img className="image-cam" src={Camera} alt="" />
                    </div>
                </div>

                <div className="chat-section-content">
                    <div className="dp-part">
                        <img className="image-dp" src={DpPicture} alt="" />
                    </div>
                    <div className="name-part">
                        <p className="name-para">hello</p>
                    </div>
                    <div className="camera-part">
                        <img className="image-cam" src={Camera} alt="" />
                    </div>
                </div>

                <div className="chat-section-content">
                    <div className="dp-part">
                        <img className="image-dp" src={DpPicture} alt="" />
                    </div>
                    <div className="name-part">
                        <p className="name-para">hello</p>
                    </div>
                    <div className="camera-part">
                        <img className="image-cam" src={Camera} alt="" />
                    </div>
                </div>

                <div className="chat-section-content">
                    <div className="dp-part">
                        <img className="image-dp" src={DpPicture} alt="" />
                    </div>
                    <div className="name-part">
                        <p className="name-para">hello</p>
                    </div>
                    <div className="camera-part">
                        <img className="image-cam" src={Camera} alt="" />
                    </div>
                </div>

            </div> 
        </div>
    )
}
export default Chat