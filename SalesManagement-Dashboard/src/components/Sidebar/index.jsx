import React from "react";
import "./Sidebar.css";
import { LiaShopware } from 'react-icons/lia';
import { FaTimes } from 'react-icons/fa';
import { FaSquarePen } from 'react-icons/fa6';
import {sidebar} from "../../source"

const Sidebar = ({
    show,
    onClose,
}) => {
    return (
        <>
            <aside className={`sidebar`}>
                <div className="top">
                    <div className="logo__container">
                        <LiaShopware className="icon" />
                        <span>Adinuba</span>
                    </div>
                    <div className="icon__container cancel__btn" onClick={onClose}>
                        <FaTimes />
                    </div>
                </div>
                <div className="middle">
                    <button className="btn btn__primary">
                        <FaSquarePen/>
                        <span>New Message</span>
                    </button>
                    <div className="tabs__container">
                        {
                            sidebar.map{(list,index)=>{
                                <h3 className={`tab ${list.route === "/" ? 'active':''}`} key={index}>
                                    
                                </h3>
                            }}
                        }
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;