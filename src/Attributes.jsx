function Cclass(){
    const x = "school";
    const myFunc = () => {
        alert("Hello mfkr");
    }

    //Styles are written as objects and attribute in camel case e.g fontSize instead of font-size
    const myStyles = {
        color: "red",
        fontSize: "20px",
        backgroundColor: "lightyellow"
    };

    const b = 21;
    let c = "Ackpple";
    if(b < 10){
        c = "Backnana";
    }

    //b < 20 ? "Groundnut" : "Beans";

    return(
        <>
        <h1  className="melchi" style={myStyles}>Class name is string</h1>
        <h2 className={x} style={{color: "blue"}}>class name is in const expression</h2>{/*Styled thisinLine */}
        {/*disabled ={false} will able the button while disabled= {true} will disable it*/}
        <div><button onClick={myFunc} disabled>Click me  mfkr</button></div>
        <button onClick={myFunc}>Not disabled</button>
        <h4>{c}</h4>
        </>
    )
}

export default Cclass