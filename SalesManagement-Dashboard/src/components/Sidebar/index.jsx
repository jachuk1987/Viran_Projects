import React from "react";
import "./Sidebar.css"

const Sidebar = ({
    show,
    onClose,
}) => {
    return (
        <aside className={`sidebar`}>
            <div className="top"></div>
        </aside>
    )
}

export default Sidebar;