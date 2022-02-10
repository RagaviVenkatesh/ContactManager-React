import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
    const {id,name,email} = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"></img>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <div className="ui right aligned container">
            <i className="trash alternate large icon " style={{color:"red"}}
                onClick={()=>props.clickHandler(id)}
            ></i>
            </div>
            </div>
    )
};

export default ContactCard;