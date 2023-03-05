import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FormProduct() {

    const [name, setName] = useState('')
    const [icmsTax, setIcmsTax] = useState('')
    const [ipiTax, setIpiTax] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    const saveProduct = async () => {
        try {
            await axios.post('http://200.169.68.106:9993/api/Product', {
                name, icmsTax, description, ipiTax
            });
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="container col-md-6">

                <form onClick={saveProduct} className="form-control mt-5 shadow-lg p-3 mb-5 bg-body rounded ">

                <h2 className='text-center mt-2 mb-3 font-weight-bold'>CADASTRAR PRODUTO: </h2>



                    <div className="form-outline mb-2">
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        <label className="form-label">Nome</label>
                    </div>

                    <div className="form-outline mb-2">
                        <input type="number" className="form-control" value={icmsTax} onChange={(e) => setIcmsTax(e.target.value)} />
                        <label className="form-label">Taxa icms</label>
                    </div>

                    <div className="form-outline mb-2">
                        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <label className="form-label">Descrição</label>
                    </div>

                    <div className="form-outline mb-2">
                        <input type="number" className="form-control" value={ipiTax} onChange={(e) => setIpiTax(e.target.value)}  />
                        <label className="form-label">Taxa ipis</label>
                    </div>

                    <button className="button btn btn-primary mb-3 w-100">Salvar</button>
                </form>
            </div>
        </div>
    )
}

export default FormProduct
