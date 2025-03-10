import { MDBInput, MDBTooltip } from 'mdb-react-ui-kit';
import PropriedadesTable from '../components/PropriedadesTable';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useState } from 'react';

const Propriedades = () => {
  let [propriedades, setPropriedades] = useState([]);

  let [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  let [inputs, setInputs] = useState({
    NO_ENTIDADE: '',
    NO_UF: '',
    NO_MUNICIPIO: '',
    NO_MESORREGIAO: '',
    NO_MICRORREGIAO: '',
    NO_REGIAO:'',
    QT_MAT_BAS:'',
  });

  const handleChange = (event) => {
    let name = event.target.name;
    setInputs({ ...inputs, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //POST, PUT e DELETE
    fetch('http://localhost:4000/instituicoes', {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => {
        if (response.ok) {
          //Adicionar na lista.
          setPropriedades([...propriedades, inputs]);
          //Fechar o modal.
          setShow(!show);
        }
      })
      .catch((error) => {});
  };

  return (
    <>
      <h3>Conheça Todas as Instituições da Paraíba</h3>

      <div>
        <Row>
          <Col>
            <MDBInput label="Buscar" id="formControlSm" type="text" size="sm" />
          </Col>
          <Col>
            <MDBTooltip
              tag="span"
              wrapperClass="d-inline-block"
              title="Adicionar Propriedade"
            >
              <Button onClick={handleShow}>+</Button>
            </MDBTooltip>
          </Col>
        </Row>
      </div>

      {/* Clientes */}
      <PropriedadesTable
        propriedades={propriedades}
        setPropriedades={setPropriedades}
      ></PropriedadesTable>
      <Modal
        show={show}
        onHide={handleShow}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Cadastrar</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Entidade</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome da Instituição"
                id="NO_ENTIDADE"
                name="NO_ENTIDADE"
                value={inputs.NO_ENTIDADE}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>UF</Form.Label>
              <Form.Control
                type="text"
                placeholder='Nome da Unidade Federativa'
                id="NO_UF"
                name="NO_UF"
                value={inputs.NO_UF}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Municipio</Form.Label>
              <Form.Control
                type="text"
                placeholder='Nome do Município'
                id="NO_MUNICIPIO"
                name="NO_MUNICIPIO"
                value={inputs.NO_MUNICIPIO}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mesorregião</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome da Mesorregião"
                id="NO_MESORREGIAO"
                name="NO_MESORREGIAO"
                value={inputs.NO_MESORREGIAO}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Microrregião</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome da Microrregião"
                id="NO_MICRORREGIAO"
                name="NO_MICRORREGIAO"
                value={inputs.NO_MICRORREGIAO}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Região</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome da Região"
                id="NO_REGIAO"
                name="NO_REGIAO"
                value={inputs.NO_REGIAO}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Matriculas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Quantidade de Matriculas"
                id="QT_MAT_BAS"
                name="QT_MAT_BAS"
                value={inputs.QT_MAT_BAS}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
              Fechar
            </Button>
            <Button variant="primary" type="submit">
              Adicionar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Propriedades;
