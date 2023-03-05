import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ProductProps } from '../../types/product';
import "./Table.css"

function TableCateogry() {

    //hooks
    const [product, setProduct] = useState<ProductProps>([]);

    useEffect(() => {
        getProduct();
    }, []);

    //connect api
    const getProduct = async () => {
        const response = await axios.get('http://200.169.68.106:9993/api/Product');
        setProduct(response.data)
    };

    const deleteProduct = async (id: number) => {
        try {
            await axios.delete(`http://200.169.68.106:9993/api/Product/${id}`)
            getProduct();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="card m-5">
                <div className="table-responsive">
                    <table className="table align-items-center mb-0">
                        <thead>
                            <tr>
                                <th className="text-uppercase text-xxs font-weight-bolder opacity-7">ID</th>
                                <th className="text-uppercase text-xxs font-weight-bolder opacity-7">Nome</th>
                                <th className="text-center text-uppercase text-xxs font-weight-bolder opacity-7">Descrição</th>
                                <th className="text-center text-uppercase text-xxs font-weight-bolder opacity-7">ICMS Taxa</th>
                                <th className="text-center text-uppercase text-xxs font-weight-bolder opacity-7">IPI Taxa</th>
                                <th className="text-center text-uppercase text-xxs font-weight-bolder opacity-7">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <p className="text-xs font-weight-bold mb-0">{product.id}</p>
                                    </td>
                                    <td>
                                        <div className="d-flex px-2 py-1">
                                            <div className="d-flex flex-column justify-content-center">
                                                <h6 className="mb-0 text-xs">{product.name}</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle text-center text-sm">
                                        <span className="text-xs font-weight-bold mb-0">{product.description}</span>
                                    </td>
                                    <td className="align-middle text-center">
                                        <span className="text-secondary text-xs font-weight-normal">{product.icmsTax}</span>
                                    </td>
                                    <td className="align-middle text-center">
                                        <span className="text-secondary text-xs font-weight-normal">{product.ipiTax}</span>
                                    </td>
                                    <td className="text-center">
                                        <a onClick={() => deleteProduct(product.id)} className="btn btn-danger">Deletar</a>
                                    </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableCateogry