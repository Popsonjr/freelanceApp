import React from 'react'
import { Link } from 'react-router-dom'
import "./Orders.scss"
const Orders = () => {

  const currentUser = {
    id: 1,
    username: "Popson Jr",
    isSeller: true
  } 
  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
         
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/308814022/original/2aa6bf69c0accb5ba5791fb6689973136242d47b.jpg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/308814022/original/2aa6bf69c0accb5ba5791fb6689973136242d47b.jpg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/308814022/original/2aa6bf69c0accb5ba5791fb6689973136242d47b.jpg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/308814022/original/2aa6bf69c0accb5ba5791fb6689973136242d47b.jpg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/308814022/original/2aa6bf69c0accb5ba5791fb6689973136242d47b.jpg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="img/message.png" alt="" />
            </td>
          </tr>
          
          
        </table>
      </div>
    </div>
  )
}

export default Orders