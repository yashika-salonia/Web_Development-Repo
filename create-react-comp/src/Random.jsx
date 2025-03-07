function Random(){

    let no=Math.random()*100;

    return <h1 style={{'backgroundColor': 'rgb(237 218 255)'}}> Random no is: {Math.round(no)}</h1>
}
export default Random;