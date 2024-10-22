import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";

const Dashboard = () => {

  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevVal) => {
        return !prevVal;
    })
}

  const OutSideClickHandler = (ref) => {
      useEffect(() => {
          const handleOutSideClick = (e) => {
              if (ref.current && !ref.current.contains(e.target)) {
                  setIsModalOpen(false);
              }
          }
          document.addEventListener('click', handleOutSideClick);

          return () => document.removeEventListener('click', handleOutSideClick);
      }, [ref])
  }

  OutSideClickHandler(modalRef);

  return (
    <div className='container'>

      <div className='header'>
        <p>Home / <span>Dashboard</span></p>

        <div className='header-right'>
          <div className='notification'>
            <IoIosNotificationsOutline />
          </div>

          <div className='relative'>
            <div className='profile' onClick={toggleModal} ref={modalRef}>
              <div>
                <img src='avatar.svg' alt='Profile' className='profile-image' />
              </div>
              <div>Himanshu Sharma</div>
              <div>
                  <IoIosArrowForward />
              </div>
              
            </div>

            {
              isModalOpen &&
              <div className='profile-dropdown'>
                <div>Profile</div>
                <div>Logout</div>
              </div>
            }

          </div>
          
        </div>

      </div>

      <div className='middle'>
        <h1 className='listed-properties'>Listed Properties</h1>
        <div className='banner'>
          <img src='banner.png' alt='Banner' />
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
