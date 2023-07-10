import React from 'react'
import { Link } from 'react-router-dom'
import "./Message.scss"
const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link className='link' to="/messages">MESSAGES</Link> > JOHN DOE > 
        </span>
        <div className="messages">
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/80f424d5865f454af0ce6f305284094a-1226157891656596656.307661/7D146749-5539-43B7-83B4-FFAC35A9C71A" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In suscipit omnis ducimus. Quaerat consequatur et expedita corrupti! Quisquam sunt rem id, error totam sapiente, optio in ipsa doloremque, eos voluptates?</p>
          </div>
          <div className="item owner">
            <img src="https://images.unsplash.com/photo-1516735492913-6343ed4e1f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=30&q=60" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In suscipit omnis ducimus. Quaerat consequatur et expedita corrupti! Quisquam sunt rem id, error totam sapiente, optio in ipsa doloremque, eos voluptates?</p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea placeholder='write a message' cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message