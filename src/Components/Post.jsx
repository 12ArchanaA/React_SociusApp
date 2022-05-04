import "./Post.css"
import BackArrow from "./../Assets/images/back-arrow.svg"
import PostImg from "./../Assets/images/user/first_post.svg"
import Share from "./../Assets/images/postShare.svg"

const Post = () => {
    return(
        <div className="post-container">
            <div className="upper-post-part">
                <div className="back-arrow-button">
                    <img src={BackArrow} alt="" />
                </div>
                <div className="new-post-para">
                    <h2> New Post</h2>
                </div>
            </div>

            <div className="lower-post-part">
                <div className="left-part">

                    <div className="post-image-part">
                        <img src={PostImg} alt="" />
                    </div>

                    <div className="post-writing-part">
                        <input type="text" placeholder="Write Something..."/>
                    </div>

                    <div className="link-part">
                        <p>Gallery </p>
                        <p>Story</p>
                        <p>Live</p>
                    </div>
                </div>
                <div className="right-part">
                    <img src={Share} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Post