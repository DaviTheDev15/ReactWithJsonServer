import { Container } from 'react-bootstrap';
import PropriedadesCard from './PropriedadesCard';
import Carrossel from './Carrossel';
import './Main.css';

const Main = () => {
  return (
    <main>
      <h2>Bem vindo ao IFPB CAMPUS Guarabira</h2>
      <Carrossel></Carrossel>
      <h3>Conheça mais sobre a gente!</h3>
      <Container fluid className="mt-2">
        {/* Propriedades */}
        <PropriedadesCard />
      </Container>
    </main>
  );
};

export default Main;
