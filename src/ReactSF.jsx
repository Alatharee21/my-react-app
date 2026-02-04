import { useState } from "react";

function NameMe(){
    const [namee, setNamee] = useState("");
    const [text, writeText] = useState("");
    const [myCar, pickCar] = useState("Volvo");

    function handleChange(e){
        setNamee(e.target.value);
    }
    function handleChanges(e){
        writeText(e.target.value);
    }

    function handleChangee(e){
        pickCar(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        alert(`Your name has been reg as ${namee}`);
        alert(text);
        alert(myCar);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Enter your Name:
                <input style={{margin: 8, borderRadius: 8, padding: 8}}
                type="text"
                value={namee}
                onChange={handleChange}
                />
            </label>
            <label>
                Write here:
                <textarea style={{margin: 8, borderRadius: 8, padding: 8}}
                value={text}
                onChange={handleChanges}
                />
            </label>

            <label>
                Select your Car:
                <select value={myCar} onChange={handleChangee}>
                    <option value = "Ford">Ford</option>
                    <option value = "Volvo">Volvo</option>
                    <option value = "Fiat">Fiat</option>
                </select>
            </label>
            <input style={{margin: 8, borderRadius: 8, border: 'none', padding: 8}} type="submit" />
        </form>
        </>
    )
}

export default NameMe