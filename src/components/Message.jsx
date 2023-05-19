import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import ReactEmoji from 'react-emoji';
import {Timestamp} from "firebase/firestore";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const showTime=(x)=>{
    // console.log(new Date(x*1000));
    var difference = (Timestamp.now().seconds- x);
    // console.log(Timestamp.now().seconds,x);
    if(difference<3600){
      return `${Math.floor(difference/60)} min`;
    }
    else if(difference>=3600 && difference<86400){
      return `${Math.floor(difference/3600)} hr`;
    }
    return `${Math.floor(difference/86400)} days`;
  }
  // console.log(message);
  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{showTime(message.date.seconds)}</span>
      </div>
      <div className="messageContent">
        <p>{ReactEmoji.emojify(message.text)}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;