function Vehicle(props) {
    
    return(
        <h2 style={{backgroundColor: "green", color: "white"}}>I am a {props.size},{props.color} {props.brand} vehicle bought in {props.year} and i am {props.value}!</h2>
    )
}


//Props stands for properties
export default Vehicle