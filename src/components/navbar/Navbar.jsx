import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./Navbar.scss"

const Navbar = () => {

    const [active, setActive] = useState(false)

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
    <div className={`navbar ${active ? 'active' : ''}`}>
        <div className="container">
            <div className="logo">
                {/* <Link to="/"> */}
                    <span className='text'>MeetUp</span>
                    <span className="dot">.</span>
                {/* </Link> */}
            </div>
            <div className="links">
                <span>MeetUp Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                {!currentUser?.isSeller &&<span>Become a Seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className='user'>
                        <img src='' alt="" />
                        <span>{currentUser?.username}</span>
                        <div className="options">
                            {
                                currentUser?.isSeller && (
                                    <>
                                        <span>Gigs</span>
                                        <span>Add New Gig</span>
                                    </>
                                )
                            }
                            <span>Orders</span>
                            <span>Messages</span>
                            <span>Logout</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
        { active && (
            <>
                <hr />
                <div className="menu">
                    <span>Test</span>
                    <span>Test2</span>
                </div>
            </>
            )
        }
        
    </div>
  )
}

export default Navbar