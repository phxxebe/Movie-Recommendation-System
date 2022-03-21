import React from "react";
import "./header.css";
import {useHistory} from "react-router-dom";
import watchlist from "../../assets/watchlist.png";
import search from "../../assets/search.png";
import recommend from "../../assets/recommend.png";
import support from "../../assets/support.png";
import logout from "../../assets/logout.png";

const Header = ({setLoginUser}) => {

    const hist = useHistory();

    return(
        <div className="header">
            <div className="sections">
                <img src={watchlist} alt="Watch List" className="button" onClick={() => hist.push("/watchlist")}/>
                <img src={search} alt="Search" className="button" onClick={() => hist.push("/search")}/>
                <img src={recommend} alt="Recommended" className="button" onClick={() => hist.push("/recommended")}/>
                <img src={support} alt="Support" className="button" onClick={() => hist.push("/support")}/>
                <img src={logout} alt="Logout" className="button" onClick={() => setLoginUser({})}/>
            </div>
        </div>
    )
}

export default Header;