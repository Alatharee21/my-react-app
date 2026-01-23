function Football() {
  const shoot = (a, b) => {
    alert(b.type);
    alert(a);
  }

  return (
    <>
    <button onClick={(event)=>shoot("Goal", event)}>Take the shot!</button>
    <button onMouseOver={(event)=>shoot("Goal", event)}>Hover here</button>
    </>
  );
}

export default Football