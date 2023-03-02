import { Link } from 'react-router-dom'
import './sidebar.css'
import Header from '../cards/card'

function Sidebar() {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="bg col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    <div className="d-flex flex-column align-items-center align-items-center px-3 pt-2 text-white min-vh-100">
                        <div className="fs-5 d-none d-sm-inline">TELEMETRIX</div>
                        <div className="nav-link align-middle px-0 mt-3">
                            <i className="bi bi-person-circle user" style={{ fontSize: 30 }}></i>
                        </div>
                        <h6 className='fs-5 d-none d-sm-inline'>Olá Vitor!</h6>
                        <hr />
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
                            <li className="nav-item">
                                <Link to="/" className="nav-link align-middle px-0">
                                    <i className="bi bi-box-seam-fill"></i> <span className="ms-1 d-none d-sm-inline">Produtos</span>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/category" className="nav-link px-0 align-middle">
                                    <i className="bi bi-tags-fill"></i> <span className="ms-1 d-none d-sm-inline">Categorias</span></Link>
                            </li>
                        </ul>
                        <hr />
                    </div>
                </div>
                <div className="content col py-3">
                    <Header />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
