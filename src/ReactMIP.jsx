import { useState } from "react";

function NameMeM(){
    const [inputs, setInputs] = useState({});;

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    return(
        <>
        <form>
            <label>
                Enter your Name:
                <input style={{margin: 8, borderRadius: 8, padding: 8}}
                type="text"
                name="fName"
                value={inputs.fName}
                onChange={handleChange}
                />
            </label>

            <label>
                Last Name:
                <input style={{margin: 8, borderRadius: 8, padding: 8}}
                type="text"
                name="lName"
                value={inputs.lName}
                onChange={handleChange}
                />
            </label>
            <p>Current Values: {inputs.fName} {inputs.lName}</p>
        </form>
        </>
    )
}

export default NameMeM