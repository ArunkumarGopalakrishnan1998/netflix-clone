import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener('scroll', {});
        }
    })
  return (
    <div class={`nav ${show && 'nav_black'}`}>
        <img 
            class="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix logo"
        />
        <img 
            class="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix logo"
        />
    </div>
  )
}

export default Nav