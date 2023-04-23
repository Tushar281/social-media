import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Chat from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Authcontext'

function TopBar() {
    const { user, dispetch } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [dotClicked, setDotCliked] = useState(false);
    const dotClickHendler = () =>{
        dotClicked ? setDotCliked(false) : setDotCliked(true);
    }
    const HendelLogout = () =>{
        dispetch({type: "LOGOUT"});
    }

    return (
            <div className="topBarContainor">
                <div className="topBarLeft">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <span className="logo">iChat App</span>
                    </Link>
                </div>
                <div className="topBarCenter">
                    <div className="searchBar">
                        <SearchIcon className="searchIcon" />
                        <input type="text" placeholder="Search for friends, Posts or Videos" />
                    </div>
                </div>
                <div className="topBarRight">
                    <div className="topBarLinks">
                        <span className="topBarLink">Homepage</span>
                        <span className="topBarLink">Timeline</span>
                    </div>
                    <div className="topbarIconBox">
                        <div className="topBarIcons">
                            <PersonIcon />
                            <span className="topBarIconBadge">1</span>
                        </div>
                        <div className="topBarIcons">
                            <Chat />
                            <span className="topBarIconBadge">14</span>
                        </div>
                        <div className="topBarIcons">
                            <NotificationsIcon />
                            <span className="topBarIconBadge">1</span>
                        </div>
                    </div>
                    <div className="topbarProfileinfo">
                        <Link to={`/profile/${user.username}`}>
                            <img src={user.ProfilePicture ? PF + user.ProfilePicture : PF + "profiles/DefProfile.png"} alt="" className="topBarImage" />
                        </Link>
                        <div className='topbarArrow' onClick={dotClickHendler}><MoreVertIcon />
                            {dotClicked && <div className="settingBox">
                                <Link to={`/profile/${user.username}`} style={{color: "inherit", textDecoration: "none"}}>
                                    <div className="BoxprofileSection">
                                        <img src={user.ProfilePicture ? PF + user.ProfilePicture : PF + "profiles/DefProfile.png"} alt="" className="BoxProfile" />
                                        <div className="boxProfileName">
                                            <h3>{user.username}</h3>
                                            <h5>See Your Profile</h5>
                                        </div>
                                    </div>
                                </Link>
                                <div className="BoxprofileSection" onClick={HendelLogout}>
                                    <div className="logouticonsec">
                                        <LogoutIcon className='logoutIcon'/>
                                    </div>
                                    <div className="boxProfileName">
                                        <h3>Logout</h3>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default TopBar
