import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
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
  return (
    <div className='navbar'>
      <span className="logo">ChatOasis</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{changeToUpper(currentUser.displayName)}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar