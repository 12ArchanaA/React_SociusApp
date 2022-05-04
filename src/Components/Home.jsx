import "./Home.css"
import HomeIcon from "./../Assets/images/user/user_home.svg"
import ChatIcon from "./../Assets/images/user/user_chat.svg"
import PostIcon from "./../Assets/images/user/user_post.svg"
import SearchIcon from "./../Assets/images/user/user_search.svg"
import NotificationIcon from "./../Assets/images/user/user_notification.svg"
import Dp from "./../Assets/images/dpStory.svg"
import Third from "./../Assets/images/user/third_post.svg"
import Like from "./../Assets/images/like.svg"
import Dislike from "./../Assets/images/dislike.svg"
import Comment from "./../Assets/images/comment.svg"
// import Plus from "./../Assets/images/plusSymbol.svg"
// <img className="plus-image" src={Plus} alt="" /> 

const Home = () => {
return(
    <div className="home-container">
        <div className="status-part">

            <div className="image-name-container">

                <div className="image-container">
                    <img className="dp-image" src={Dp} alt="" />
                </div>

                <div className="name-container">
                    <p >*name</p>
                </div>

            </div>

            <div className="image-name-container">

                <div className="image-container">
                    <img className="dp-image" src={Dp} alt="" />
                </div>

                <div className="name-container">
                    <p >*name</p>
                </div>

            </div>

            <div className="image-name-container">

                <div className="image-container">
                    <img className="dp-image" src={Dp} alt="" />
                </div>

                <div className="name-container">
                    <p>*name</p>
                </div>

            </div>

            <div className="image-name-container">

                <div className="image-container">
                    <img className="dp-image" src={Dp} alt="" />
                </div>

                <div className="name-container">
                    <p>*name</p>
                </div>

            </div>

            <div className="image-name-container">

                <div className="image-container">
                    <img className="dp-image" src={Dp} alt="" />
                </div>

                <div className="name-container">
                    <p>*name</p>
                </div>

            </div>

            <div className="image-name-container">

                <div className="image-container">
                    <img className="dp-image" src={Dp} alt="" />
                </div>

                <div className="name-container">
                    <p>*name</p>
                </div>

            </div>

        </div>
        
        <div className="middle-part">
            <div className="post-part">
                <div className="post-part-content">

                    <div className="post">
                        <img className="post-image" src={Third} alt="" />
                    </div>

                    <div className="lik-dis-comm">

                        <div className="post-below-part">
                            <div className="li-di-co-image">
                                <img className="like-dislike-comment-image" src={Like} alt="" />
                            </div>
                            <div className="like-dislike-comment">
                                <p className="like-dislike-comment-para">Like</p>    
                            </div> 
                        </div>
                        
                        <div className="post-below-part">
                            <div className="li-di-co-image">
                                <img className="like-dislike-comment-image" src={Dislike} alt="" />
                            </div>
                            <div className="like-dislike-comment">
                                <p className="like-dislike-comment-para">Dislike</p>    
                            </div> 
                        </div>

                        <div className="post-below-part">
                            <div className="li-di-co-image">
                                <img className="like-dislike-comment-image" src={Comment} alt="" />
                            </div>
                            <div className="like-dislike-comment">
                                <p className="like-dislike-comment-para">Comment</p>    
                            </div> 
                        </div>
                    </div>

                    </div>
                
            </div>

            <div className="line-in-between"></div>
            
            <div className="online-part">
                <div className="online-part-content">
                    <h3 className="online-heading">Online</h3>
                    <p className="online-para">qwerty</p>
                    <p className="online-para">abc</p>
                    <p className="online-para">xyz</p>
                </div>
                
            </div>

        </div>
    
        <div className="icon_division">

            <div className="icon">

                <div className="icon-image">
                    <img src={HomeIcon} alt="" />
                </div>

                <div>
                    <p className="icon-para">Home</p>
                </div>

            </div>
            
            <div className="icon">

                <div className="icon-image">
                    <img src={ChatIcon} alt="" />
                </div>

                <div>
                    <p className="icon-para">Chat</p>
                </div>

            </div>

            <div className="icon">

                <div className="icon-image">
                    <img src={PostIcon} alt="" />
                </div>

                <div>
                    <p className="icon-para">Post</p>
                </div>

            </div>

            <div className="icon">

                <div className="icon-image">
                    <img src={SearchIcon} alt="" />
                </div>
                
                <div>
                    <p className="icon-para">Search</p>  
                </div>   

            </div>

            <div className="icon">

                <div className="icon-image">
                    <img src={NotificationIcon} alt="" />
                </div>
                    
                <div>
                    <p className="icon-para">Notification</p>
                </div>    
                
            </div>
        </div>
    </div>
)
}
export default Home