import React, { useEffect } from "react";
import Browse from "./Browse.js";
import Login from "./Login.js";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.js"
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice.js'



const Body = () => {
  const dispatch = useDispatch();
  
const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<Login />,
    },
    {
        path:"/browse",
        element:<Browse />,
    }
]);

  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //console.log(user.email);
      if (user) {        
        const { uid, email, displayName } = user;
        const userInfo = { uid, email, displayName }
        dispatch(addUser(userInfo));
        
        // const { accessToken, displayName, email, uid, photoURL } = user;
        // const userInfo = { accessToken, displayName, email, uid, photoURL };
        // dispatch(addUser(userInfo));
      } else {     
        dispatch(removeUser());    
      }
    });
  }, []);
  
  return (
    <div>
     <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
