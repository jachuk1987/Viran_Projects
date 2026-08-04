import React from 'react';
import {profile1} from "../../assets/images"

const DashboardWrapper = ({
    children,
    contentClassName,
}) => {
    return (
        <section className='dashboard__wrapper'>
            <main>
                <nav>
                    <div className="user__container">
                        <div className='profile'>
                            <img src="{profile1}" alt="" />
                        </div>
                        <div className="details">
                            <h3 className='name'>Emmy</h3>
                            <small className="text__muted">Business</small>
                        </div>
                    </div>
                </nav>
                <section
                    className={`content ${contentClassName ? contentClassName:""}`}>
                    {children}
                </section>
            </main>
        </section>
    )
}

export default DashboardWrapper;
