import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHome, faUser, faWallet} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


const tabs = [{
  route: "/home",
  icon: faHome,
  label: "Home"
},{
  route: "/profile",
  icon: faUser,
  label: "Profile"
},{
    route:"/wallet",
    icon:faWallet,
    label:"Wallet"
},{
  route: "/settings",
  icon: faCog,
  label: "Settings"
}]

const Navigation = (props) => {

  return (
    <div>
      
    <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
      <Nav className="w-100">
        <div className=" d-flex flex-row justify-content-around w-100">
          {
            tabs.map((tab, index) =>(
              <NavItem key={`tab-${index}`}>
                <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon} style={{color:"grey"}}/>
                  </div>
                </NavLink>
              </NavItem>
            ))
          }
        </div>
      </Nav>
    </nav>
    </div>
  )
};

export default Navigation;