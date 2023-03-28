import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import "./scss/_header.scss"

export default function Header() {
  return (
    <header className="container-fluid menu-head py-3">
      <nav>
        <Link className='logo'> <img  src="images/logo2.png" alt="" srcSet="" /> </Link>
      </nav>
    </header>
  )
}
