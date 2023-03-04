import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  $(".open-btn").on('click', function(){
    $(".sidebar").addClass("active")
  })

  $(".close-btn").on('click', function(){
    $(".sidebar").removeClass("active")
  })

  return (
    <>
      <nav className='navbar navbar-expand-md navbar-light bg-light' style={{height:50}}>
        <div className="container-fluid">
            <div className="d-flex justify-content-between d-md-none d-block">
                <button className="btn px-1 py-0 open-btn me-2"><i className='bi bi-list'></i></button>
                <Link to={'/'} className='navbar navbar-brand fs-4'>
                    <span className="bg-dark rounded px-2 py-0 text-white">TL</span>
                </Link>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
