import React, {useEffect} from 'react'
import './popular.css';

import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsDot } from 'react-icons/bs';

// Import the images ===========>
import img1 from '../../Assets/image1.jpeg';
import img2 from '../../Assets/image2.jpg';
import img3 from '../../Assets/image3.jpg';
import img4 from '../../Assets/image4.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'

//So now we are goin to use a high order array method to display all the destination using Map. To do so we need to list all the destination in one array "Data" and later we shall call each destination by index/id.

const Data =[
  {
    id:1,
    imgSrc: img1,
    destTitle: 'Alberta',
    location: 'Canada',
    grade: 'CULTURAL RELAX',
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'budrum',
    location: 'turky',
    grade: 'CULTURAL RELAX',
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Mach Picchu',
    location: 'Maldive',
    grade: 'CULTURAL RELAX',
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Milano',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
  }

]
const Popular = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="popular section container">
      <div className="secContainer">

        <div className='secHeader flex'>
          <div data-aos="fade-right" data-aos-duration="2500" className='textDiv'>
            <h2 className='secTitle'>
              Popular Destination
            </h2>
            <p>
              From historical cities to natural specteculars, come see the best of the world!
            </p>
          </div>

          <div data-aos="fade-left" data-aos-duration="2500" className='iconsDiv flex'>
            <BsArrowLeftShort className='icon leftIcon' />
            <BsArrowRightShort className='icon' />
          </div>
        </div>

        <div className='mainContent grid'>
       {
        Data.map(({id,imgSrc,destTitle,location,grade})=>{
          return(
            <div data-aos="fade-up" className='singleDestination'>
            <div className='destImage'>
              <img src={imgSrc} alt="Image title" />

              <div className="overlyInfo">
                <h3>{destTitle}</h3>
                <p>
                {location}
                </p>

                <BsArrowRightShort className='icon' />

              </div>

            </div>

            <div className='destFooter'>
              <div className='number'>
                0{id}
              </div>

              <div className='destText flex'>
                <h6>
                 {location}
                </h6>

                <span className='flex'>
                  <span className='dot'>
                    <BsDot className='icon' />
                  </span>
                  Dot
                </span>

              </div>

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

export default Popular