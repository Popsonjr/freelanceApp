import React from 'react'
import { Link } from 'react-router-dom'
import "./MyGigs.scss"
const MyGigs = () => {
  return (
    <div className='myGigs'>
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button> Add New Gig </button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Orders</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/308814022/original/2aa6bf69c0accb5ba5791fb6689973136242d47b.jpg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="img/delete.png" alt="" />
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
              <img className='delete' src="img/delete.png" alt="" />
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
              <img className='delete' src="img/delete.png" alt="" />
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
              <img className='delete' src="img/delete.png" alt="" />
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
              <img className='delete' src="img/delete.png" alt="" />
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
              <img className='delete' src="img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs