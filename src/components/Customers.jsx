import { useMemo } from 'react';
import { faker } from '@faker-js/faker';
import { Row, Col } from 'react-bootstrap';
import Customer from './Customer.jsx';

function createCustomer() {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: faker.phone.number(),
    avatar: faker.image.avatar(),
    job: faker.person.jobTitle(),
  };
}

function Customers() {
  const customers = useMemo(
    () => Array.from({ length: 100 }, () => createCustomer()),
    [],
  );

  return (
    <Row className="g-4">
      {customers.map((customerData) => (
        <Col key={customerData.id} xs={12} sm={6} md={4} lg={3}>
          <Customer data={customerData} />
        </Col>
      ))}
    </Row>
  );
}

export default Customers;
