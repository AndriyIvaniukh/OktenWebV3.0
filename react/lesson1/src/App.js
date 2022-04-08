import {Posts, PostsByUserId, User, UserDetails, Users} from "./components";
import "./App.css"
import {useState} from "react";

function App() {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUserDetails = (user) => {
        setUser(user)
    }

    const getPostsByUserId = (id) => {
        setUserId(id);
    }

    return (
        <div className="App dFlexColumn">
            <div className={"dFlexRow"}>
                <div className={"width50"}>
                    <Users getUserDetails={getUserDetails}/>
                </div>
                <div className={"width50"}>
                    {user && <UserDetails user={user} getPostsByUserId={getPostsByUserId}/>}
                </div>
            </div>
            <div>
                {userId && <PostsByUserId userId={userId}/>}
            </div>
        </div>
    );
}

export default App;
