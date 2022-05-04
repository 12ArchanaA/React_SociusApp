import "./Like.css"
import LikeImage from "./../Assets/images/redLike.svg"
import DpPic from "./../Assets/images/dpChat.svg"

const Like = () => {
    return(
        <div className="like-container">
            <div className="like-part">
                <div className="like-para">
                    <p>Likes</p>
                </div>
                <div className="like-image">
                    <img src={LikeImage} alt="" />
                </div>
            </div>

            <div className="liked-people">
                <div className="people">
                    <div className="dp">
                        <img src={DpPic} alt="" />
                    </div>

                    <div className="name">
                        <p>user1</p>
                    </div>
                </div>

                <div className="people">
                    <div className="dp">
                        <img src={DpPic} alt="" />
                    </div>

                    <div className="name">
                        <p>user1</p>
                    </div>
                </div>

                <div className="people">
                    <div className="dp">
                        <img src={DpPic} alt="" />
                    </div>

                    <div className="name">
                        <p>user1</p>
                    </div>
                </div>

                <div className="people">
                    <div className="dp">
                        <img src={DpPic} alt="" />
                    </div>

                    <div className="name">
                        <p>user1</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Like