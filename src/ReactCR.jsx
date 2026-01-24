
//Using ifElse statement
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

/*function Goal(props){
    const isGoal = props.isGoal;
    if(isGoal){
        return <MadeGoal />
    } else {
        return <MissedGoal />
    } 
}

export default Goal;*/

//Using && operator

/*function Bus(props){
    return(
        <>
        {props.Brand && <h2>The brand of this bus is {props.brand}</h2>}
        </>
    )
}

export default Bus*/

//Using ternary

function Goall(props){
    const isGoal = props.isGoal;
    return(
        <>
        {isGoal? <MadeGoal/> : <MissedGoal/>}
        </>
    ) 
}

export default Goall;