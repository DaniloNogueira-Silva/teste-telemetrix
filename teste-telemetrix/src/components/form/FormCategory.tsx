import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CategoryProps } from '../../types/category'
import "./Form.css"

function FormCategory() {

    const [name, setName] = useState('')
    const [limitRequest, setLimitRequest] = useState('')
    const [description, setDescription] = useState('')
    const [valueVariation, setValueVariation] = useState('')
    const navigate = useNavigate()

    const saveCategory = async () => {
        try {
            await axios.post('http://200.169.68.106:9993/api/ProductCategory', {
                name, limitRequest, description, valueVariation
            });
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="container col-md-6">

                <form onClick={saveCategory} className="form-control mt-5 shadow-lg p-3 mb-5 bg-body rounded">

                    <h2 className='text-center mt-2 mb-3 font-weight-bold'>CADASTRAR CATEGORIA: </h2>


                    <div className="form-outline mb-2">
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        <label className="form-label">Nome</label>
                    </div>

                    <div className="form-outline mb-2">
                        <input type="number" className="form-control" value={limitRequest} onChange={(e) => setLimitRequest(e.target.value)} />
                        <label className="form-label">Limite de requisição</label>
                    </div>

                    <div className="form-outline mb-2">
                        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <label className="form-label">Descrição</label>
                    </div>

                    <div className="form-outline mb-2">
                        <input type="number" className="form-control" value={valueVariation} onChange={(e) => setValueVariation(e.target.value)}  />
                        <label className="form-label">Valor de variação</label>
                    </div>

                    <button className="button btn mb-3 w-100">Salvar</button>
                </form>
            </div>
        </div>
    )
}

export default FormCategory
