
import { useState } from "react";
import { userLoginContext } from "../contexts/userLoginContext";


function UserLoginStore({ children }) {
  //login user state
  let [currentUser, setCurrentUser] = useState(null);


  //user login
  async function loginUser(userCred) {
    let res = await fetch(
      `http://localhost:3000/users?username=${userCred.username}&password=${userCred.password}`
    );
    let usersList = await res.json();
    console.log("users list",usersList)
    if (usersList.length === 0) {
      //invalid credentials
      console.log("invalid user")
     
    } else {
      setCurrentUser(usersList[0]);
    }
  }

  return (
    <userLoginContext.Provider value={{ currentUser,loginUser }}>
      {children}
    </userLoginContext.Provider>
  );
}

export default UserLoginStore;