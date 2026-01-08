function Cclass(){
    const x = "school";
    const myFunc = () => {
        alert("Hello mfkr");
    }
    return(
        <>
        <h1  className="melchi">Class name is string</h1>
        <h2 className={x}>class name is in const expression</h2>
        {/*disabled ={false} will able the button while disabled= {true} will disable it*/}
        <div><button onClick={myFunc} disabled>Click me  mfkr</button></div>
        <button onClick={myFunc}>Not disabled</button>
        </>
    )
}

export default Cclass