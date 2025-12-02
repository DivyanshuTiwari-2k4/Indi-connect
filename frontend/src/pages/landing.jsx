import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


  const router = useNavigate();

  return (
    <div className='landingPageContainer'>
      <nav>
        <div className='navHeader'>
          <h2>Indi meet</h2>
        </div>
        <div className='navlist'>
          <p onClick={() => {
            router("/meeting")
          }}>Join as Guest</p>
          <p onClick={() => {
            router("/home")

          }}>Register</p>
          <div onClick={() => {
            router("/home")

          }} role='button'>
            <p>Login</p>
          </div>
        </div>
      </nav>


      <div className="landingMainContainer">
        <div>
          <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>

          <p>Cover a distance by Indi meet</p>
          <div role='button'>
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>

          <img src="/mobile.png" alt="" />

        </div>
      </div>



    </div>
  )
}