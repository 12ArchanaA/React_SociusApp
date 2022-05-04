import "./StoryViews.css"
import Eye from "./../Assets/images/viewEye.svg"
// import Share from "./../Assets/images/viewShare.svg"
import Dustbin from "./../Assets/images/viewDustbin.svg"
import DpPicture from "./../Assets/images/dpChat.svg"

const StoryViews = () => {
    return(
        <div className="StoryViews-container">
            <div className="upper-part">
                <div className="upper-part-division">
                    <img src={Eye} alt="" />
                </div>
                
                 <div className="upper-part-division">
                    <h3>100</h3>
                </div>

                <div className="upper-part-division">
                    <img src={Dustbin} alt="" />
                </div>
            </div>

            <div className="view-part">
                <div className="view-part-viewers">
                    <div className="dp">
                        <img src={DpPicture} alt="" />
                    </div>
                    <div className="name">
                        user1
                    </div>
                </div>

                <div className="view-part-viewers">
                    <div className="dp">
                        <img src={DpPicture} alt="" />
                    </div>
                    <div className="name">
                        user2
                    </div>
                </div>

                <div className="view-part-viewers">
                    <div className="dp">
                        <img src={DpPicture} alt="" />
                    </div>
                    <div className="name">
                        user3
                    </div>
                </div>

                <div className="view-part-viewers">
                    <div className="dp">
                        <img src={DpPicture} alt="" />
                    </div>
                    <div className="name">
                        user4
                    </div>
                </div>

                
            </div>
        </div>
    )
}
export default StoryViews