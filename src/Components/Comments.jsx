import "./Comments.css"
import Logo from "./../Assets/images/commentsLogo.svg"
import DpImage from "./../Assets/images/dpChat.svg"
import White from "./../Assets/images/whiteLike.svg" 
import Send from "./../Assets/images/commentSend.svg"

const Comments = () => {
    return(
        <div className="comments-container">
            <div className="comments-heading-part">
                <div className="comments-heading">
                    <h3>Comments</h3>
                </div>

                <div className="comments-logo">
                    <img src={Logo} alt="" />
                </div>
            </div>

            <div className="comments-content">
                
                    <div className="for-each-comment">

                        <div className="comment-dp-part">
                            <img src={DpImage} alt="" />
                        </div>

                        <div className="comment-part">
                            <p>*name</p>
                        </div>

                        <div className="comment-part">
                            <img className="white-heart-image" src={White} alt="" />
                        </div>

                    </div>

                    <div className="for-each-comment">
                        
                        <div className="comment-dp-part">
                            <img src={DpImage} alt="" />
                        </div>

                        <div className="comment-part">
                            <p>*name</p>
                        </div>

                        <div className="comment-part">
                            <img className="white-heart-image" src={White} alt="" />
                        </div>

                    </div>

                    <div className="for-each-comment">
                        
                        <div className="comment-dp-part">
                            <img src={DpImage} alt="" />
                        </div>

                        <div className="comment-part">
                            <p>*name</p>
                        </div>

                        <div className="comment-part">
                            <img className="white-heart-image" src={White} alt="" />
                        </div>

                    </div>

            </div>

            <div className="comment-now-container">
                <div className="comment-now">
                    <div className="comment-dp">
                        <img src={DpImage} alt="" />
                    </div>
                    <div className="comment-para">
                        <p>Add a comment...</p>
                    </div>
                    <div className="comment-send">
                        <img src={Send} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Comments