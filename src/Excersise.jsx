function Glass() {
    return (
        <>
            {3 > 2 && <h2>Hello</h2> }
        </>
    );
}

function Dpp({isLoggedIn}) {
  return (
    <>
      <h1>My Application</h1>
      {!isLoggedIn && <Glass /> }
    </>
  );
}

export default Dpp