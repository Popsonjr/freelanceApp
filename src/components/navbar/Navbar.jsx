import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const {pathname} = useLocation()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", isActive)

        return () => {
            window.removeEventListener("scroll", isActive)
        }

    }, [])

    const currentUser = {
        id: 1,
        username: "Popson Jr",
        isSeller: true
    }

  return (
    <div className={`navbar ${active || pathname !== "/" ? 'active' : ''}`}>
        <div className="container">
            <div className="logo">
                <Link to="/" className='link'>
                    <span className='text'>MeetUp</span>
                    <span className="dot">.</span>
                </Link>
            </div>
            <div className="links">
                <span>MeetUp Business</span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser && <span>Sign in</span> }
                {!currentUser?.isSeller &&<span>Become a Seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className='user' onClick={() => setOpen(!open)}>
                        <img src='https://images.unsplash.com/photo-1516735492913-6343ed4e1f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=30&q=60' alt="" />
                        <span>{currentUser?.username}</span>
                        { open && <div className="options">
                            {
                                currentUser?.isSeller && (
                                    <>
                                        <Link  className='link' to="/mygigs">Gigs</Link>
                                        <Link className='link' to="/add">Add New Gig</Link>
                                    </>
                                )
                            }
                            <Link className='link' to="/orders">Orders</Link>
                            <Link className='link' to="/messages">Messages</Link>
                            <Link className='link' to="/">Logout</Link>
                        </div>}
                    </div>
                )}
            </div>
        </div>
        { active || pathname !== "/" && (
            <>
                <hr />
                <div className="menu">
                    <Link className='link menuLink' to="/">
                        Graphics & Design
                    </Link>
                    <Link className='link menuLink' to="/">
                        Video & Animation
                    </Link>
                    <Link className='link menuLink' to="/">
                        Writing & Translation
                    </Link>
                    <Link className='link menuLink' to="/">
                        AI Services
                    </Link>
                    <Link className='link menuLink' to="/">
                        Digital Marketing
                    </Link>
                    <Link className='link menuLink' to="/">
                        Music & Audio
                    </Link>
                    <Link className='link menuLink' to="/">
                        Programming & Tech
                    </Link>
                    <Link className='link menuLink' to="/">
                        Business
                    </Link>
                    <Link className='link menuLink' to="/">
                        Lifestyle
                    </Link>
                </div>
            </>
            )
        }
        
    </div>
  )
}

export default Navbar