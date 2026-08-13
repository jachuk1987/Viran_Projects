import React from "react";
import "./Sidebar.css";
import { LiaShopware } from 'react-icons/lia';

const Sidebar = ({
    show,
    onClose,
}) => {
    return (
        <aside className={`sidebar`}>
            <div className="top">
                <div className="logo__container">
                    <LiaShopware/>
                </div>
            </div>
            <div className="middle"></div>
        </aside>
    )
}

export default Sidebar;