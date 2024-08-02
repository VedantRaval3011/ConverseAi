import React from 'react'
import { Link } from 'react-router-dom'
import './chatList.css'
const ChatList = () => {
  return (
    <div className="chatList">
        <span className="title">Dashboard</span>
        <Link to='/dashboard'>Create a new chat</Link>
        <Link to='/'>Explore Converse AI</Link>
        <Link to='/'>Contact</Link>
        <hr />
        <div className="list">
            <Link to="/" >My chat Title</Link>
            <Link to="/" >My chat Title</Link>
            <Link to="/" >My chat Title</Link>
            <Link to="/" >My chat Title</Link>
            <Link to="/" >My chat Title</Link>
            <Link to="/" >My chat Title</Link>
            <Link to="/" >My chat Title</Link>
        </div>
        <hr />
        <div className="upgrade">
            <img src="/logo.png" alt="" />
            <div className="texts">
                <span>Upgrade to Converse Pro</span>
                <span>Get unlimited access to all features</span>
            </div>
        </div>
    </div>
  )
}

export default ChatList