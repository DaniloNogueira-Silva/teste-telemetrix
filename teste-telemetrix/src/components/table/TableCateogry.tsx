import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CategoryProps } from '../../types/category';
import "./Table.css"

function TableCateogry() {

    //hooks
    const [category, setCategory] = useState<CategoryProps>([]);

    useEffect(() => {
        getCategory();
    }, []);

    //connect api
    const getCategory = async () => {
        const response = await axios.get('http://200.169.68.106:9993/api/ProductCategory');
        setCategory(response.data)
    };

    const deleteCategory = async (id: number) => {
        try {
            await axios.delete(`http://200.169.68.106:9993/api/ProductCategory/${id}`)
            getCategory();
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
                                <th className="text-uppercase  text-xxs font-weight-bolder opacity-7">ID</th>
                                <th className="text-uppercase  text-xxs font-weight-bolder opacity-7">Nome</th>
                                <th className="text-center text-uppercase  text-xxs font-weight-bolder opacity-7">Limite de Requisição</th>
                                <th className="text-center text-uppercase  text-xxs font-weight-bolder opacity-7">Variação de Valor</th>
                                <th className="text-center text-uppercase text-xxs font-weight-bolder opacity-7">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {category.map((category) => (
                                <tr key={category.id}>
                                    <td>
                                        <p className="text-xs font-weight-bold mb-0">{category.id}</p>
                                    </td>
                                    <td>
                                        <div className="d-flex px-2 py-1">
                                            <div className="d-flex flex-column justify-content-center">
                                                <h6 className="mb-0 text-xs">{category.name}</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle text-center text-sm">
                                        <span className="text-xs font-weight-bold mb-0">{category.limitRequest}</span>
                                    </td>
                                    <td className="align-middle text-center">
                                        <span className="text-secondary text-xs font-weight-normal">{category.valueVariation}</span>
                                    </td>
                                    <td className="text-center">
                                        <a onClick={() => deleteCategory(category.id)} className="btn btn-danger">Deletar</a>
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