import { Container } from 'react-bootstrap';
import Customers from './components/Customers.jsx';

function App() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Contacts clients</h1>
      <Customers />
    </Container>
  );
}

export default App;
