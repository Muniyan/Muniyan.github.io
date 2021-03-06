import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo  from '../images/muniyan.jpg';
import contactData from '../data/contact.json';
import { SocialIcon } from 'react-social-icons';
import RecentBlog from './recentBlog';

class Sidebar extends Component {
    
    render() {
        return (
            <div className="sidebar-parent">
                <a href="/" className="sidebar-user-url">
                    <div className="sidebar-user-photo">
                        <img alt="Hemant" src={logo} />
                    </div>
                    <div className="sidebar-user-content">
                        <h1 className="sidebar-user-name">Muniyan P</h1>
                        <h2 className="sidebar-user-title">Software Engineer</h2>
                    </div>
                </a>

                <nav className="sidebar-navigation">
                    <ul>
                        <li><NavLink to="/portfolio" exact activeClassName="selectedNavLink">About</NavLink></li>
                        <li><NavLink to="/portfolio/experience" activeClassName="selectedNavLink">Experience</NavLink></li>
                        <li><NavLink to="/portfolio/education" activeClassName="selectedNavLink">Education</NavLink></li>
                        <li><NavLink to="/portfolio/projects" activeClassName="selectedNavLink">Projets</NavLink></li>
                        <li><NavLink to="/portfolio/contact" activeClassName="selectedNavLink">Contact</NavLink></li>
                    </ul>
                </nav>

                <div className="sidebar-social">
                    <div className="sidebar-title">
                        Get in touch
                    </div>
                    <div className="sidebar-content">
                        {contactData.profile.map(function (p) {
                            return (
                                p.network === "email" ?
                                    <a href={p.url} className="sidebar-button">
                                        <SocialIcon className="sidebar-icon" network={p.network} fgColor="#ff5a01" style={{ height: 30, width: 30 }} />
                                    </a>
                                    :
                                    <a href={p.url} className="sidebar-button" rel="noopener noreferrer" target="_blank">
                                        <SocialIcon className="sidebar-icon" network={p.network} fgColor="#ff5a01" style={{ height: 30, width: 30 }} />
                                    </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;