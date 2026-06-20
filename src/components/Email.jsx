function Email({ firstName, lastName }) {
  const email = `${lastName}.${firstName}@gmail.com`.toLowerCase();

  return (
    <a className="btn btn-primary" href={`mailto:${email}`}>
      Envoyer un Mail
    </a>
  );
}

export default Email;
