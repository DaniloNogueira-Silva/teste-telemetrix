import { Link } from 'react-router-dom';
import './SearchProduct.css';

function SearchProduct() {
  return (
    <div className='container'>
      <div className="row d-flex justify-content-center align-items-center p-0 m-0">
        <div className="col-md-3 m-auto">
          <Link to={"/product/create"} className='btn btn-primary' style={{fontSize: 20}}>Criar produto</Link>
        </div>
        <div className="col-md-5">
          <div className="form">
            <i className="fa fa-search"></i>
            <input type="text"
              className='form-control form-input'
              placeholder='Procure pelo id da categoria'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchProduct