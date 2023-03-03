import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar"
import './style.css';

function CategoryView() {

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
      </div>
    </div>
  )
}

export default CategoryView