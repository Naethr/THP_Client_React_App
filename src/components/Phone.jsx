function Phone({ phone }) {
  return (
    <a className="btn btn-success" href={`tel:${phone}`}>
      Appeler
    </a>
  );
}

export default Phone;
