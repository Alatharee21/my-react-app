function Glass() {
    return (
        <>
            {3 > 2 && <h2>Hello</h2> }
        </>
    );
}

function GroceryList() {
  const items = [
    {id: 1, name: 'bread'},
    {id: 2, name: 'milk'},
    {id: 3, name: 'eggs'}
  ];

  return (
    <>
      <h1>Grocery List</h1>
      <ul>
        {items.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </>
  );
}

function Dpp({isLoggedIn}) {
  return (
    <>
      <h1>My Application</h1>
      {!isLoggedIn && <Glass /> }
      <GroceryList />
    </>
  );
}

export default Dpp