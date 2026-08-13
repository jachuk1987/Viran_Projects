import React from 'react';
import { profile1 } from "../../assets/images";
import { IoIosNotifications } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { TiThMenu } from 'react-icons/ti'
import "./DashboardWrapper.css";
import Sidebar from '../Sidebar';

const DashboardWrapper = ({
    children,
    contentClassName,
}) => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <section className='dashboard__wrapper'>
            <Sidebar
                show={showSidebar}
                onClose={()=>setShowSidebar(!showSidebar)}
            />
            <main>
                <nav>
                    <div className="user__containe">
                        <div className='profile'>
                            <img src={profile1} alt="Profile" />
                        </div>
                        <div className="details">
                            <h3 className='name'>Emmy</h3>
                            <small className="text__muted">Business</small>
                        </div>
                    </div>

                    <div className="buttons__container">
                        <div className="search__container">
                            <IoSearch className='icon' />
                            <input type="text" placeholder='Search item...' />
                        </div>
                        <div className="icon__container hover__fill">
                            <IoIosNotifications />
                        </div>
                        <div className="icon__container menu__btn">
                            <TiThMenu />
                        </div>
                    </div>
                </nav>
                <section
                    className={`content ${contentClassName ? contentClassName : ""}`}>
                    {children}
                </section>
            </main>
        </section>
    )
}

export default DashboardWrapper;
