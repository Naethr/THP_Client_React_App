import Email from './Email.jsx';
import Phone from './Phone.jsx';

function CustomerDetails({ data }) {
  return (
    <div className="border-top mt-3 pt-3">
      <img
        src={data.avatar}
        alt={`${data.firstName} ${data.lastName}`}
        className="rounded-circle mb-3"
        style={{ width: '90px', height: '90px', objectFit: 'cover' }}
      />

      <p className="mb-1">
        <strong>Prénom :</strong> {data.firstName}
      </p>
      <p className="mb-1">
        <strong>Nom :</strong> {data.lastName}
      </p>
      <p className="mb-1">
        <strong>Métier :</strong> {data.job}
      </p>
      <p className="mb-1">
        <strong>Téléphone :</strong> {data.phone}
      </p>
      <p className="mb-3">
        <strong>Email :</strong>{' '}
        {`${data.lastName}.${data.firstName}@gmail.com`.toLowerCase()}
      </p>

      <div className="d-grid gap-2">
        <Email firstName={data.firstName} lastName={data.lastName} />
        <Phone phone={data.phone} />
      </div>
    </div>
  );
}

export default CustomerDetails;
