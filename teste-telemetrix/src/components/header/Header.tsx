import "./Header.css"

function Header() {
    return (

        <div className="col-md-10 m-auto">
            <div className="row">
            <div className="col-xl-3 col-lg-6">
                    <div className="card l-bg-blue-dark">
                        <div className="card-statistic-3 p-4">
                            <div className="card-icon card-icon-large"><i className="fas fa-users"></i></div>
                            <div className="mb-4">
                                <h5 className="card-title mb-0">Bem vindo</h5>
                            </div>
                            <div className="row align-items-center mb-2 d-flex">
                                <div className="col-8">
                                    <h2 className="d-flex align-items-center mb-0">
                                        Vitor
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="card l-bg-cherry">
                        <div className="card-statistic-3 p-4">
                            <div className="card-icon card-icon-large"><i className="fas fa-shopping-cart"></i></div>
                            <div className="mb-4">
                                <h5 className="card-title mb-0">Categorias</h5>
                            </div>
                            <div className="row align-items-center mb-2 d-flex">
                                <div className="col-8">
                                    <h2 className="d-flex align-items-center mb-0">
                                        3,243
                                    </h2>
                                </div>
                                <div className="col-4 text-right">
                                    <span>12.5% <i className="fa fa-arrow-up"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="card l-bg-green-dark">
                        <div className="card-statistic-3 p-4">
                            <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
                            <div className="mb-4">
                                <h5 className="card-title mb-0">Produtos</h5>
                            </div>
                            <div className="row align-items-center mb-2 d-flex">
                                <div className="col-8">
                                    <h2 className="d-flex align-items-center mb-0">
                                        578
                                    </h2>
                                </div>
                                <div className="col-4 text-right">
                                    <span>10% <i className="fa fa-arrow-up"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="card l-bg-orange-dark">
                        <div className="card-statistic-3 p-4">
                            <div className="card-icon card-icon-large"><i className="fas fa-dollar-sign"></i></div>
                            <div className="mb-4">
                                <h5 className="card-title mb-0">Qtde total de produtos</h5>
                            </div>
                            <div className="row align-items-center mb-2 d-flex">
                                <div className="col-8">
                                    <h2 className="d-flex align-items-center mb-0">
                                        11.61k
                                    </h2>
                                </div>
                                <div className="col-4 text-right">
                                    <span>2.5% <i className="fa fa-arrow-up"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
