import { Col, Row, Card } from 'react-bootstrap';
import './card.css';

function Header() {
    return (
        <>
          <div className="content">
            <Row>
            <Col lg="3" md="6" sm="6">
                <Card className="card-stats" style={{backgroundColor: "aliceblue"}}>
                  <div className="card-body">
                    <Row>
                      <Col md="4" xs="5">
                        <div className="bi bi-emoji-laughing-fill icon-big text-center icon-warning" style={{fontSize: 60}}>
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">Bem vindo novamente!</p>
                          <div className="card-title" >Vitor</div>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
              <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                  <div className='card-body'>
                    <Row>
                      <Col md="3" xs="5">
                        <div className="bi bi-boxes icon-big text-center icon-warning" style={{fontSize: 60}}></div>
                      </Col>
                      <Col md="9" xs="7">
                        <div className="numbers">
                          <p className="card-category">Qtde total de produtos</p>
                          <div className="card-title" >154</div>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
              <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                  <div className="card-body">
                    <Row>
                      <Col md="3" xs="5">
                        <div className="bi bi-tags-fill icon-big text-center icon-warning" style={{fontSize: 60}}>
                        </div>
                      </Col>
                      <Col md="9" xs="7">
                        <div className="numbers">
                          <p className="card-category">Qtde total de categorias</p>
                          <div className="card-title" >15</div>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
              <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                  <div className="card-body">
                    <Row>
                      <Col md="4" xs="5">
                        <div className="bi bi-at">
                          <i className="bi bi-tags-fill" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">Gráfico</p>
                          <div className="card-title" >A</div>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </>
      );
}

export default Header