import React from 'react';
import { Link } from 'react-router-dom';
import "./scss/_header.scss"

export default function Header() {
  return (
    <header className="container-fluid menu-head py-3">
      <nav>
        <ul>
          <li>home</li>
          <li>about</li>
          <li className='Logo'><Link>Logo</Link></li>
          <li>blog</li>
          <li>contact Us</li>
        </ul>
      </nav>
    </header>
  )
}
