function Car() {
  return (
    <>
      <h1>My car</h1>
      <p>It has {218 * 1.36} horsepower</p>{/*Expression passed here*/}
    </>
  );
}

function Car2(){
    const hp = 218 * 1.37;
    return(
        <>
        <h1>My car</h1>
        <p>It has {hp} horsepower </p>{/*Variable passed here*/}
        </>
    )
}

function kwtohp(kw){
return  kw*1.38;
}

function Car3(){
    return(
        <>
        <h1>My car</h1>
        <p>It has {kwtohp(218)} horsepower</p>{/*Function passed here*/}
        </>
    )
}

function Car4(){
    const profile = {
        fName: "Rasheed",
        lName: "Olaniran",
        dob: "1999/04/17"
    }

    return(
        <>
        <h1>I know a man</h1>
        <p>His name is {profile.fName} {profile.lName} and he was born in {profile.dob}</p>{/*Object passed here*/}
        </>
    )
}

//export default Car

//export default Car2

//export default Car3

export default Car4