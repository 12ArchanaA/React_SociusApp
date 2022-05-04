import { Route, Routes } from "react-router-dom"
import './App.css';
import "./index.css";
import Form from "./Components/Form";
import Otp from "./Components/Otp"
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Chat from "./Components/Chat";
import Settings from "./Components/Settings";
import Search from "./Components/Search";
import PersonalChat from "./Components/PersonalChat";
import StoryViews from "./Components/StoryViews"
import Like from "./Components/Like";
import Notifications from "./Components/Notifications";
import Post from "./Components/Post";
import Comments from "./Components/Comments";
import Saved from "./Components/Saved";

const App = () => {
    return(
      <Routes>
        <Route path="Form" element={<Form/>}/>
        <Route path="Otp" element={<Otp/>}/>
        <Route path="Profile" element={<Profile/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="Chat" element={<Chat/>}/>
        <Route path="Settings" element={<Settings/>}/>
        <Route path="Search" element={<Search/>}/>
        <Route path="PersonalChat" element={<PersonalChat/>}/>
        <Route path="StoryViews" element={<StoryViews/>}/>
        <Route path="Like" element={<Like/>}/>
        <Route path="Notifications" element={<Notifications/>}/>
        <Route path="Post" element={<Post/>}/>
        <Route path="Comments" element={<Comments/>}/>
        <Route path="Saved" element={<Saved/>}/>
      </Routes>
    )
}


export default App;
