import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import './dashboardLayout.css'
import { useAuth } from "@clerk/clerk-react";
import ChatList from "../../components/chatList/ChatList";
const DashBoardLayout = () => {
  const {userId, isLoaded} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if(!userId && isLoaded){
      navigate('/sign-in')
    }
  },[userId,isLoaded, navigate] )

  if(!isLoaded) return "Loading..."
  
  return (
    <div className="dashboardLayout">
      <div className="menu">
        <ChatList></ChatList>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
