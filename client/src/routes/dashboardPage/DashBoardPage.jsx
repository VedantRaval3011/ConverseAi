import React from 'react'
import './dashboardPage.css'
const DashBoardPage = () => {
  return (
    <div className="dashboardPage">
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <h1>Converse AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="" />
            <span>Create new chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="" />
            <span>Analyse Image</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="" />
            <span>Generate Scripts</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" placeholder='Ask me Anything'/>
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default DashBoardPage