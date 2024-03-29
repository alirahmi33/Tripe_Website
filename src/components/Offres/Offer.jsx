import React, {useEffect}  from 'react'
import './offer.css';

import { MdKingBed } from 'react-icons/md'
import { MdAirportShuttle } from 'react-icons/md'
import { MdLocationOn } from 'react-icons/md'
import { MdBathtub } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs';

// import images
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

// So since we have finished styling every content,let us also use the same high order array methods (MAP)to list our offers.

const Offers = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Alberta',
    location: 'london',
    price: '$4,400',
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'budrum',
    location: 'bora',
    price: '$400',
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Mach Picchu',
    location: 'tejmahal',
    price: '$2,452',
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Milano',
    location: 'paris',
    price: '$1000',
  }
]

const Offer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='offer container section'>
      <div className='secContainer'>

        <div data-aos="fade-up" data-aos-duration="2000" className='secIntro'>
          <h2 className='secTitle'>
            Special Offers
          </h2>
          <p>
            From historical cites to natural specteculars, come see the best of the world!
          </p>
        </div>

        <div className="mainContent grid">

          {
            Offers.map(({id, imgSrc, destTitle, location, price}) => {
              return (
                <div data-aos="fade-up" data-aos-duration="3000"  className="singleOffer">
                  <div className="destImage">
                    <img src={imgSrc} alt={destTitle} />

                    <span className="discount">
                      30% Off
                    </span>
                  </div>

                  <div className="offerBody">
                    <div className="price flex">
                      <h4>
                      {price}
                      </h4>
                      <span className="status">
                        For Rent
                      </span>
                    </div>

                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <MdKingBed className='icon' />
                        <small>2 Beds</small>
                      </div>

                      <div className="singleAmenity flex">
                        <MdBathtub className='icon' />
                        <small>1 Bath</small>
                      </div>

                      <div className="singleAmenity flex">
                        <FaWifi className='icon' />
                        <small>Wi-Fi</small>
                      </div>

                      <div className="singleAmenity flex">
                        <MdAirportShuttle className='icon' />
                        <small>Shuttle</small>
                      </div>
                    </div>

                    <div className="location flex">
                      <MdLocationOn className='icon' />
                      <small>450 Vine #310, {location}</small>
                    </div>

                    <button className="btn flex">
                      View Details
                      <BsArrowRightShort className='icon' />
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Offer
