function Box(props){
    return(
        <div>
            {props.children}
        </div>
    )
}
function Box2(props){
    return(
        <div>
            {props.children}
        </div>
    )
}
function MainBox(){
    return(
        <div style={{backgroundColor: "pink", padding: 8}}>
            <Box>This is written inside MainBox but appears as part of Box</Box>
            <Box2>This outside but Inside</Box2>
        </div>
    )
}

export default MainBox