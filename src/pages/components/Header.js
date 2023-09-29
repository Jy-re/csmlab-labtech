import React from "react";
import HeaderLogo from '../../assets/imgs/small-logo.png'
import SettingIcon from '../../assets/imgs/setting-gear.png'

const Headers = () => {
    return ( 
        <div className="headerContainer">
            <div className="logoContainer">
                <img src={HeaderLogo}></img>
            </div>
            <div className="settingContainer">
                <button className="buttonStyle">
                    <img src={SettingIcon} className="imgStyle"></img>
                </button>
            </div>
        </div>
     );
}
 
export default Headers;