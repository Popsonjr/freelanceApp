import React from 'react'
import Slider from 'infinite-react-carousel';
import "./Gig.scss"
const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">MEETUP > GRAPHICS & DESIGN > </span>
          <h1>I will create AI generated art for you</h1>
        
          <div className="user">
            <img className='pp' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/80f424d5865f454af0ce6f305284094a-1226157891656596656.307661/7D146749-5539-43B7-83B4-FFAC35A9C71A" alt="" />
            <span>Popson Jr</span>
            <div className="stars">
              <img src="../img/star.png" alt="" />
              <img src="../img/star.png" alt="" />
              <img src="../img/star.png" alt="" />
              <img src="../img/star.png" alt="" />
              <img src="../img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/289150700/original/ecc98cc908669240e0b03ee7b1cd575f94ef4ba0/create-amazing-art-using-midjourney-ai.png" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/289150700/original/61e8609c94bf41b5c80cd7e553af10c8909a88fa/create-amazing-art-using-midjourney-ai.png" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/0c2ece3a1553cbbf195ee6025be45c6f-1688665605/3/create-amazing-art-using-midjourney-ai.png" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/62b9d35bbe6de55e1e8ede1e3db40d49-1688455016/3/create-amazing-art-using-midjourney-ai.png" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/5a2da6a823de0235c4daf27eb47e1b26-1688184926/Design%20uden%20navn%20(1)/create-amazing-art-using-midjourney-ai.png" alt="" />
          </Slider>
          <h2>About this Gig</h2>
          <p>If you want to see your ideas come to life through the power of Midjourney AI, you came to the right place!
              Your artwork will be generated using the most advanced artistic image generation AI (Midjourney). I will iterate different designs of whatever it is you are wishing for until you LOVE it. In this process I will be as communicative as possible and let you influence the direction of the artwork as much as you like.

              I am doing anything! Only your imagination sets the boundaries.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/80f424d5865f454af0ce6f305284094a-1226157891656596656.307661/7D146749-5539-43B7-83B4-FFAC35A9C71A" alt="" />
              <div className="info">
                <span>Popson Jr</span>
                <div className="stars">
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Denmark</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">2 hours</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Mar 2018</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">about 2 minutes</span>
                </div>
              </div>
              <hr />
              <p>If you want to see your ideas come to life through the power of Midjourney AI, you came to the right place!
                Your artwork will be generated using the most advanced artistic image generation AI (Midjourney). I will iterate different designs of whatever it is you are wishing for until you LOVE it. In this process I will be as communicative as possible and let you influence the direction of the artwork as much as you like.

                I am doing anything! Only your imagination sets the boundaries.
              </p>
            </div>
          </div>

          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className='pp' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/04561c286e6458273b99709d4323705e-1522926139451/e8163512-56a5-48fd-8e60-14b662fc10a6.jpg" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>Great results, as first order and teamwork arranged with chriller an idea as a creation of digital art. Fast and reliable delivery, can truly recommend this service provider!</p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="../img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="../img/dislike.png" alt="" />
                  <span>No</span>
                </div>
            </div>
            <hr />
            
            <div className="item">
              <div className="user">
                <img className='pp' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/04561c286e6458273b99709d4323705e-1522926139451/e8163512-56a5-48fd-8e60-14b662fc10a6.jpg" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>Great results, as first order and teamwork arranged with chriller an idea as a creation of digital art. Fast and reliable delivery, can truly recommend this service provider!</p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="../img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="../img/dislike.png" alt="" />
                  <span>No</span>
                </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className='pp' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/04561c286e6458273b99709d4323705e-1522926139451/e8163512-56a5-48fd-8e60-14b662fc10a6.jpg" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>Great results, as first order and teamwork arranged with chriller an idea as a creation of digital art. Fast and reliable delivery, can truly recommend this service provider!</p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="../img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="../img/dislike.png" alt="" />
                  <span>No</span>
                </div>
            </div>
            
            
          </div>
          
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$49.99</h2>
          </div>
          <p>Receive 8 variations of your idea to explore the concept and find your art direction</p>
          <div className="details">
            <div className="item">
              <img src="../img/clock.png" alt="" />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <img src="../img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="../img/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="../img/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="../img/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="../img/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
              
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig