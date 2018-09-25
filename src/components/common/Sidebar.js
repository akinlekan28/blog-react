import React from 'react'

const Sidebar = () => {
  return (
    <header>
    <div className="menu-btn">
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
    </div>

    <nav className="menu">
        <div className="menu-branding">
            <div className="portrait"></div>
        </div>
        <ul className="menu-nav">
            <li className="nav-item">
                <a href="https://akinlekan28.github.io/index.html" className="nav-link">
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a href="https://akinlekan28.github.io/about.html" className="nav-link">
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a href="https://akinlekan28.github.io/work.html" className="nav-link">
                    My Work
                </a>
            </li>
            <li className="nav-item current">
                <a href="/" className="nav-link">
                    Blog
                </a>
            </li>
            <li className="nav-item">
                <a href="https://akinlekan28.github.io/contact.html" className="nav-link">
                    How To Reach Me
                </a>
            </li>
        </ul>
    </nav>
</header>
  )
}

export default Sidebar;
