import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './profile.css'

function UserProfile() {
  
  const userInfo = useSelector(state => state.userReducer.user)

  if(!userInfo){
    return <div>loading...</div>
  }
  
  return (
    <div className='profileContainer'>
      <div className="col-lg-7">
        <div className="card mb-4">
          <div className="card-body bg-Orange rounded-2">
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0 fs-5 text-orange">Full Name</p>
              </div>
              <div className="col-sm-8">
                <p className=" mb-0 fs-5 text-orange Opacity-light">{userInfo.fullName}</p>
              </div>
            </div>
            <hr className='text-orange'/>
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0 fs-5 text-orange">Email</p>
              </div>
              <div className="col-sm-8">
                <p className="mb-0 fs-5 text-orange Opacity-light">{userInfo.email}</p>
              </div>
            </div>
            <hr className='text-orange'/>
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0 fs-5 text-orange ">Mobile</p>
              </div>
              <div className="col-sm-8">
                <p className=" mb-0 fs-5 text-orange Opacity-light">{userInfo.number}</p>
              </div>
            </div>
            <hr className='text-orange'/>
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0 fs-5 text-orange">Address</p>
              </div>
              <div className="col-sm-8">
                <p className=" mb-0 fs-5 text-orange Opacity-light">{userInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default UserProfile