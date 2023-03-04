import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar"
import FormCategory from "../components/form/FormCategory";

import './style.css';

function CreateCategory() {

  $('.sidebar ul li').one('click', function(){
    $('.sidebar ul li.active').removeClass('active');
    $(this).addClass('active');
  })

  $(".open-btn").on('click', function(){
    $(".sidebar").addClass("active")
  })

  $(".close-btn").on('click', function(){
    $(".sidebar").removeClass("active")
  })

  return (
    <div className="main-container d-flex">
      <div className="sidebar" id="side-nav">
        <Sidebar />
      </div>
      <div className="content">
        <Navbar/>
        <FormCategory />
      </div>
    </div>
  )
}

export default CreateCategory