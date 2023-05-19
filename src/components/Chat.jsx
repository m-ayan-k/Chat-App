import React, { useContext } from "react";
import Messages from "./Messages";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import { ChatContext } from "../context/ChatContext";

// import Input from "./Input";
const Input=React.lazy(()=>import("../components/Input"));


const Chat = () => {
  const { data } = useContext(ChatContext);
  const changeToUpper=(str)=>{
    if(!str){
      return str;
    }
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2;
  }
  const handleDelete= async(e)=>{
    e.preventDefault();
    if(data.chatId!=='null'){
      // console.log(data);
    }
  }
  return (
    <div className="chat">
      <div className="chatInfo">
        {data.user && <span>{changeToUpper(data.user.displayName)}</span>}
        <div className="chatIcons">
          <img src={Cam} alt="delete" role="button" onClick={handleDelete} />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;