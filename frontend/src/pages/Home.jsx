import React from 'react'
import heroImg01 from '../assets/images/inter1.jpg'
import heroImg02 from '../assets/images/inter3.jpg'
import heroImg03 from '../assets/images/inter3.jpg'
import icon01 from '../assets/images/inter6.jpg'
import icon02 from '../assets/images/inter8.jpg'
import icon03 from '../assets/images/inter8.jpg'

import { Link } from 'react-router-dom'
import { BsArrowRight  } from 'react-icons/bs'


const Home = () => {
  return <>
  {/* ========= hero section ======== */}
  <section className="hero__section pt-[60px] 2xl:h-[800px]">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

        {/* ======== hero content ======= */}
        <div>
          <div className="lg:w-[570px]">
            <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]"> 
              We help Freshers to over come from the fear of Interviews.
            </h1>
            <p className="text__para">
            Doctors help in healing people when they are sick or have injured themselves. 
            They diagnose the condition, and prescribe medicines and other treatment that 
            need to be taken to get back to normal health. Specialist doctors are experts in 
            treating diseases of a particular part of the body. Doctors work in clinics and 
            hospitals. They conduct various tests to diagnose the ailment afflicting a person.
            </p>

            <button className="btn"> Get Start </button>
          </div>

          {/* ======== hero counter ======= */}
          {/* <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]" >
            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
              text-headingColor">30+
              </h2>
              <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
              <p className="text__para">Years of Experience</p>
            </div>

            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
              text-headingColor">15+
              </h2>
              <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
              <p className="text__para">Clinic Location</p>
            </div>

            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
              text-headingColor">100%
              </h2>
              <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
              <p className="text__para">Patient Satisfaction</p>
            </div>
          </div> */}
        </div>

        {/* ======== hero content ======= */}

        <div className="flex gap-[30px] justify-end" >
          <div>
            <img className="w-full" src={heroImg01} alt="" />
          </div>
      
        </div>
      </div>
    </div>
  </section>
  {/* ========= hero section end======== */}

  <section>
    <div className="container">
    

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-[15px] mt-[15px] lg:mt-[25px]">
        
        <div className="py-[20px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon02} alt="" />
          </div>

          <div className="mt-[20px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Front-end
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert jealth care. From the tab to the clinic.
            </p>
            
            <Link to='/interviews' className="w-[44px] h-[44px] rounded-full border border-solid 
            border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group 
            hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
            </Link>
          </div>
        </div>

        <div className="py-[20px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon03} alt="" />
          </div>

          <div className="mt-[20px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Back-end
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert jealth care. From the tab to the clinic.
            </p>
            
            <Link to='/interviews' className="w-[44px] h-[44px] rounded-full border border-solid 
            border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group 
            hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
            </Link>
          </div>
        </div>
        <div className="py-[20px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon01} alt="" />
          </div>

          <div className="mt-[20px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Database
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert jealth care. From the tab to the clinic.
            </p>
            
            <Link to='/interviews' className="w-[44px] h-[44px] rounded-full border border-solid 
            border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group 
            hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
            </Link>
          </div>
        </div>
        <div className="py-[20px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon01} alt="" />
          </div>

          <div className="mt-[20px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Data Structures
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert jealth care. From the tab to the clinic.
            </p>
            
            <Link to='/interviews' className="w-[44px] h-[44px] rounded-full border border-solid 
            border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group 
            hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
            </Link>
          </div>

          <div className="py-[20px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon01} alt="" />
          </div>

          <div className="mt-[20px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Sorting Algorithms
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert jealth care. From the tab to the clinic.
            </p>
            
            <Link to='/interviews' className="w-[44px] h-[44px] rounded-full border border-solid 
            border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group 
            hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
            </Link>
          </div>
        </div>
        </div>

      </div>
    </div>
  </section> 


  </>
}

export default Home