import React from 'react'
import "../styling/landing.css"
import logo from "../images/landing_page/Logo.png"
import SETTINGSLOGO from "../images/icons/icons8-settings-30.png"
import PROFILELOGO from "../images/icons/icons8-test-account-50.png"
import DASHBOARDLOGO from "../images/icons/icons8-dashboard-24.png"
import HELPLOGO from "../images/icons/icons8-help-50.png"
import LOGOUTLOGO from "../images/icons/icons8-logout-30.png"

function header() {
  return (
    <div>
        <div className='sideheader'>
            <h1 className='top-logo-name'>
                <a href='/'><img src={logo} alt='logo'/></a>
            </h1> 
            <ul className='dashboard-sideheader-column'>
                <li>
                    <a href='/dashboard'><img src={DASHBOARDLOGO} alt='settings-logo' height={50} width={50}/>Dashboard</a>
                </li>
                <li>
                    <a href='/profile'><img src={PROFILELOGO} alt='settings-logo' height={50} width={50}/>Profile</a>
                </li>
                <li>
                    <a href='/settings'><img src={SETTINGSLOGO} alt='settings-logo' height={50} width={50}/>Settings</a>
                </li>
                <li>
                    <a href='/help'><img src={HELPLOGO} alt='settings-logo' height={50} width={50} />Help</a>
                </li>
                <li>
                    <a href='/logout'><img src={LOGOUTLOGO} alt='settings-logo' height={50} width={50}/>Logout</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default header