
import { userLoginContext } from "./userLoginContext";
import { useState } from "react";


function UserLoginStore({ children }) {
  //login user state
  let [currentUser, setCurrentUser] = useState(null);
  let [userLoginStatus,setUserLoginStatus]=useState(false)
  let [err, setErr] = useState("");

  //user login
  async function loginUser(userCred) {
    try{
    let res = await fetch(
      'http://localhost:4000/user-api/login',
      {
        method: "POST",
        headers: { "Content-type": "application/json" ,},
        body: JSON.stringify(userCred),
      }
    );
    console.log(res);
    let result = await res.json();
    console.log(result.user);
    if(result.message === 'user login successfully'){
    
      setCurrentUser(result.user)
      setUserLoginStatus(true)
     setErr('')
      //to save token in session storage
    sessionStorage.setItem('token',result.token)
    }
    
    else {
      setErr(result.message);
      setCurrentUser({})
      setUserLoginStatus(false)
  }
} catch (error) {
  setErr(error.message);
}
  }

  //user logout
  function logoutUser(){
    //reset state
    setCurrentUser({});
    setUserLoginStatus(false);
    setErr('') 
    //to remove token in session storage
    sessionStorage.removeItem('token')

  }

  return (
    <userLoginContext.Provider value={{ loginUser,logoutUser,err,userLoginStatus ,currentUser,setCurrentUser}}>
      {children}
    </userLoginContext.Provider>
  );
}

export default UserLoginStore;