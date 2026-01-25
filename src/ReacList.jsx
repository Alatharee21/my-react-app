function MyCars() {
    const carrs = ["BMW1","BMW4","BMW3"];
  const cars = [
    {id: 1001, brand: 'Ford'},
    {id: 1002, brand: 'BMW'},
    {id: 1003, brand: 'Audi'}
];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car) => <li key={car.id}>I am a { car.brand }</li>)}
      </ul>
      <ul style={{listStyleType: "none"}}>
        {carrs.map((car, index) => <li key={index}>I am a { car }</li>)}
      </ul>
    </>
  );
}

export default MyCars