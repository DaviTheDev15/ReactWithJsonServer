import {
  MDBBtn,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PropriedadesTable = ({ propriedades, setPropriedades }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10)

  const getPropriedades = (event) => {
    fetch('http://localhost:4000/instituicoes')
      .then((response) => response.json())
      .then((data) => {
        setPropriedades([...data]);
      })
      .catch((error) => {
        console.log('Deu erro!');
      });
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/instituicoes/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        toast.success("A instituição foi removida com sucesso!");
        getPropriedades();
      }
    } catch (error) {
      toast.error("Erro ao tentar remover a instituição!");
    }
  };

  useEffect(getPropriedades, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = propriedades.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <MDBTable hover>
        <MDBTableHead>
          <tr>
            <th scope="col">Entidade</th>
            <th scope="col">UF</th>
            <th scope="col">Municipio</th> 
            <th scope="col">Mesorregião</th>
            <th scope="col">Microrregião</th>
            <th scope="col">Região</th>
            <th scope="col">Matriculas</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {currentPosts.map((propriedades, i) => {
            return (
              <tr key={i}>
                <td>{propriedades.NO_ENTIDADE}</td>
                <td>{propriedades.NO_UF}</td>
                <td>{propriedades.NO_MUNICIPIO}</td>
                <td>{propriedades.NO_MESORREGIAO}</td>
                <td>{propriedades.NO_MICRORREGIAO}</td>
                <td>{propriedades.NO_REGIAO}</td>
                <td>{propriedades.QT_MAT_BAS}</td>
                <td>
                  <MDBBtn floating tag="a" className="mx-2">
                    <MDBIcon fas icon="pen" />
                  </MDBBtn>

                  <MDBBtn floating tag="a" className="mx-2" color="danger" onClick={() => handleDelete(propriedades.id)}>
                    <MDBIcon fas icon="trash-alt" />
                  </MDBBtn>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
      <Pagination
        totalPosts={propriedades.length}
        postsPerPage={postPerPage}
        currentPage={currentPage} // Adiciona isso aqui!
        setCurrentPage={setCurrentPage}
    />
    </>
  );
};

export default PropriedadesTable;
