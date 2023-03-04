import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {

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
        <div className='sidebar'>
            <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-bewtween">
                <h1 className='fs-4'><span className='bg-white text-dark rounded shadow px-2 me-2'>TL</span> <span className='text-white'>TELEMETRIX</span> </h1>
                <button className='btn d-md-none d-block close-btn px-1 py-0 text-white'> <i className="bi bi-list"></i> </button>
            </div>

            <ul className='list-unstyled px-2'>
                <li className='active'>
                    <Link className='text-decoration-none px-3 py-2 d-block mb-2' to={"/"}><i className="bi bi-box-seam-fill"></i>  Categorias</Link>
                </li>
                <li className=''>
                    <Link className='text-decoration-none px-3 py-2 d-block' to={"/product"}><i className="bi bi-tags-fill"></i>  Produtos</Link>
                </li>
            </ul>
            <hr className='h-color mx-2' />
        </div>

    )
}
export default Sidebar
