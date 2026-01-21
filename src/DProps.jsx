//Practicing destructuring of props

function Car({color}) {
  return (
    <h4 style={{backgroundColor: "red", color: "white", borderRadius: 16, padding: 8}}>My car is {color}!</h4>
  );
}

function Car2({color, brand, ...rest}) {
  return (
    <h2>My {brand} {rest.model} is {color} and {rest.age}!</h2>
  );
}

function Profile(personality){
    const{name, year, state, language} = personality
    return(
        <>
        <h2 style={{backgroundColor: "red", color: "white", borderRadius: 16, padding: 8}}>
            My name is {name}, I am {year} old and i currently live in {state} while i learn {language}
        </h2>
        <h3 style={{backgroundColor: "red", color: "white", borderRadius: 16, padding: 8}}>
            My name is {name}
        </h3>
        <Car color="REd" />
        <Car2 brand="Ford" model="Mustang" color="red" age="old" />
        </>
    )
}

export default Profile