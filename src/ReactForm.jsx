import { useState } from "react";

function MyForm1(){
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    function handleChange(e){
        setName(e.target.value);
    }
    function handleAge(e){
        setAge(e.target.value);
    }

    return(
        <form>
            <label>Username
            <input type="text" value={name} onChange={handleChange} />
            <input type="text" value={age} onChange={handleAge} />
            </label>
            <p>Current value: {name}</p>
            <p>Current value: {age}</p>
        </form>
    )
}
function MyForm(){
    return(
        <>
        <form>
            <label style={{display: "block"}}>Enter your Name</label>
            <input type="text" />
        </form>
        <MyForm1 />
        </>
    )
}

export default MyForm