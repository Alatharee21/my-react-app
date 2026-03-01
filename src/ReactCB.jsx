import { useState } from "react";

function ChekBox(){
    const [text, enterText] = useState("");

    function handleChange(e){
        const target = e.target;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const name = target.name;
        enterText(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
    let fillings = '';
    if (text.tomato) fillings += 'tomato';
    if (text.onion) {
      if (text.tomato) fillings += ' and ';
      fillings += 'onion';
    }
    if (fillings == '') fillings = 'no fillings';
    alert(`${text.firstname} wants a burger with ${fillings}`);
    event.preventDefault();
  };

    return (
    <form onSubmit={handleSubmit}>
      <label>My name is:
      <input 
        type="text" 
        name="firstname" 
        value={text.firstname} 
        onChange={handleChange}
      />
      </label>

      <p>I want a burger with:</p>
      <label>Tomato:
      <input 
        type="checkbox" 
        name="tomato" 
        checked={text.tomato} 
        onChange={handleChange}
      />
      </label>
      <label>Onion:
        <input 
          type="checkbox" 
          name="onion" 
          checked={text.onion} 
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
  
}

export default ChekBox