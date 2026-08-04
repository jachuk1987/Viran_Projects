import React from 'react'

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
