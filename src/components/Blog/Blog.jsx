import React, {useEffect} from 'react'
import './blog.css';

import { BsArrowRightShort } from 'react-icons/bs'

//Images to use =====>
import img1 from '../../Assets/image8.jpg'
import img2 from '../../Assets/image11.jpg'
import img3 from '../../Assets/image9.jpg'
import img4 from '../../Assets/image13.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'


// here also we are going to use the Mp method to display our posts.

const Posts = [
  {
    id: 1,
    postImage: img1,
    title: 'beautiful Bali, let us travel',
    desc: 'bali is an Indonisian island famous for its forested volcanic mountains, rice fields, beaches and coral errfs.',
  },

  {
    id: 2,
    postImage: img2,
    title: 'Las Vegas, let us travel',
    desc: 'Las Vegas,in Nevada s Mojave Desert, is a city khnown for its vibrant nightlife,24-hour caninos and other entertainment.',
  },

  {
    id: 3,
    postImage: img3,
    title: 'Amesterdam',
    desc: 'capital of the Nertherlands, is known for its artistic heritage,its elaborate system of canals and narrow gabled houses.',
  },

  {
    id: 4,
    postImage: img4,
    title: 'Greece',
    desc: 'Greece is a country located in southeastern Europe, made up of thousands of islands scattered across the Aegean and lonian seas.',
  },
]

const Blog = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='blog container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the incredible experience in the world.
          </p>
        </div>
        <div className="mainContainer grid">
          {
            Posts.map(({id, postImage, title, desc}) => {
              return (
                <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
                  <div className="imgDiv">
                    <img src={postImage} alt={title} />
                  </div>

                  <div className="postDetails">
                    <h3 data-aos="fade-up" data-aos-duration="3000">
                      {title}
                    </h3>
                    <p data-aos="fade-up" data-aos-duration="4000">{desc}</p>
                  </div>

                  <a href="#" data-aos="fade-up" data-aos-duration="4500" className="flex">
                    Read More
                    <BsArrowRightShort className="icon" />
                  </a>

                </div>
              )
            })
          }

        </div>

      </div>
    </section>
  )
}

export default Blog