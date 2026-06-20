import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Email from './Email.jsx';
import Phone from './Phone.jsx';
import CustomerDetails from './CustomerDetails.jsx';

function Customer({ data }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="h-100 text-center">
      <Card.Img
        variant="top"
        src={data.avatar}
        alt={`${data.firstName} ${data.lastName}`}
        className="p-3 rounded-circle mx-auto"
        style={{ width: '140px', height: '140px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          {data.firstName} {data.lastName}
        </Card.Title>

        <div className="d-grid gap-2 mt-auto">
          <Email firstName={data.firstName} lastName={data.lastName} />
          <Phone phone={data.phone} />
          <Button
            variant="outline-primary"
            onClick={() => setShowDetails(true)}
          >
            Afficher les détails
          </Button>
        </div>

        {showDetails && <CustomerDetails data={data} />}
      </Card.Body>
    </Card>
  );
}

export default Customer;
