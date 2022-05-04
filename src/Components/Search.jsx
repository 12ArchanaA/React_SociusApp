import "./Search.css"
import BackButton from "./../Assets/images/back-arrow.svg"
import Dp from "./../Assets/images/dpChat.svg"
const Search = () => {
    return(
        <div className="search-container">
            <div className="search-section">

                <div className="back-button">
                    <img src={BackButton} alt="" />
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search here..."/>
                </div>

            </div>

            <div className="chat-section">
                <div className="chat-heading">
                    Recent
                </div>
                <div className="chat-content">
                    <div className="chatting">
                        <div className="image-sec">
                            <img src={Dp} alt="" />
                        </div>
                        <div className="name">
                            <p>*name</p>
                        </div>
                        <div className="close-button">
                            <button id="close">x</button>
                        </div>
                    </div>

                    <div className="chatting">
                        <div className="image-sec">
                            <img src={Dp} alt="" />
                        </div>
                        <div className="name">
                            <p>*name</p>
                        </div>
                        <div className="close-button">
                            <button id="close">x</button>
                        </div>
                    </div>

                    <div className="chatting">
                        <div className="image-sec">
                            <img src={Dp} alt="" />
                        </div>
                        <div className="name">
                            <p>*name</p>
                        </div>
                        <div className="close-button">
                            <button id="close">x</button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
export default Search