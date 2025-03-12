import { MDBInput, MDBTooltip } from 'mdb-react-ui-kit';
import PropriedadesTable from '../components/PropriedadesTable';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useFormik } from 'formik';
import { schema } from '../components/ValidationSchema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Propriedades = () => {
  let [propriedades, setPropriedades] = useState([]);

  let [show, setShow] = useState(false);
  const handleShow = () => {
    formik.resetForm();
    setShow(!show)
  };

  const formik = useFormik({
    initialValues: {
      NO_ENTIDADE: '',
      NO_UF: '',
      NO_MUNICIPIO: '',
      NO_MESORREGIAO: '',
      NO_MICRORREGIAO: '',
      NO_REGIAO: '',
      QT_MAT_BAS: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      //POST, PUT e DELETE
      fetch('http://localhost:4000/instituicoes', {
        method: 'POST',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (response.ok) {
            toast.success("Uma nova instituição foi adicionada com sucesso!");
            //Adicionar na lista.
            setPropriedades([...propriedades, values]);
            //Fechar o modal.
            setShow(!show);
          }
        })
        .catch((error) => {
          toast.error("Erro ao adicionar uma nova instituição!");
        });
    }
  });

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
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Entidade</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome da Instituição"
                id="NO_ENTIDADE"
                name="NO_ENTIDADE"
                value={formik.values.NO_ENTIDADE}
                onChange={formik.handleChange}
              />
              <span>{formik.errors.NO_ENTIDADE}</span>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>UF</Form.Label>
              <Form.Control
                type="text"
                placeholder='Nome da Unidade Federativa'
                id="NO_UF"
                name="NO_UF"
                value={formik.values.NO_UF}
                onChange={formik.handleChange}
              />
              <span>{formik.errors.NO_UF}</span>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Municipio</Form.Label>
              <Form.Control
                type="text"
                placeholder='Nome do Município'
                id="NO_MUNICIPIO"
                name="NO_MUNICIPIO"
                value={formik.values.NO_MUNICIPIO}
                onChange={formik.handleChange}
              />
              <span>{formik.errors.NO_MUNICIPIO}</span>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mesorregião</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome da Mesorregião"
                id="NO_MESORREGIAO"
                name="NO_MESORREGIAO"
                value={formik.values.NO_MESORREGIAO}
                onChange={formik.handleChange}
              />
              <span>{formik.errors.NO_MESORREGIAO}</span>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Microrregião</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome da Microrregião"
                id="NO_MICRORREGIAO"
                name="NO_MICRORREGIAO"
                value={formik.values.NO_MICRORREGIAO}
                onChange={formik.handleChange}
              />
              <span>{formik.errors.NO_MICRORREGIAO}</span>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Região</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome da Região"
                id="NO_REGIAO"
                name="NO_REGIAO"
                value={formik.values.NO_REGIAO}
                onChange={formik.handleChange}
              />
              <span>{formik.errors.NO_REGIAO}</span>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Matriculas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Quantidade de Matriculas"
                id="QT_MAT_BAS"
                name="QT_MAT_BAS"
                value={formik.values.QT_MAT_BAS}
                onChange={formik.handleChange}
              />
              <span>{formik.errors.QT_MAT_BAS}</span>
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
      <ToastContainer />
    </>
  );
};

export default Propriedades;
