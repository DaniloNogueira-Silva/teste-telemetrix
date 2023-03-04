import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import SearchCategory from "../components/searchCategory/SearchCategory";
import Sidebar from "../components/sidebar/Sidebar"
import TableCateogry from "../components/table/TableCateogry";
import './style.css';

function CategoryView() {

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
        <SearchCategory />
        <TableCateogry />
      </div>
    </div>
  )
}

export default CategoryView