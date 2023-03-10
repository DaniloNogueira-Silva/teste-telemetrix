import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import SearchProduct from "../components/searchProduct/SearchProduct";
import Sidebar from "../components/sidebar/Sidebar"
import TableProduct from "../components/table/TableProduct";
import './style.css';

function ProductView() {

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
        <Header />
        <SearchProduct />
        <TableProduct />
      </div>
    </div>
  )
}

export default ProductView
