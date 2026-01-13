function Shoe(props){
    return(
        <h2>I am a {props.color} car!</h2>
    );
}



function Cobbler(){
    return(
        <>
        <h1>Who lives in my shoe rack</h1>
        <Shoe color="White" />
        <Shoe color="notGrey" />{/*Component rendered twice */}
        </>
    );
}//Component inside another component

export default Cobbler