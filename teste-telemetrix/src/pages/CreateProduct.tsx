import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar"
import FormProduct from "../components/form/FormProduct";

import './style.css';

function CreateProduct() {

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
        <FormProduct />
      </div>
    </div>
  )
}

export default CreateProduct