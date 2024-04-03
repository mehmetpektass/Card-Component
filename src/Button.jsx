function Button(){

    const handleClick = (e) => {
        console.log(e);
        e.target.style.backgroundColor = "black";
    }   
    return(
        <button className="button" onClick={ (e) => handleClick(e)}>Click Me!</button>
    );
}

export default Button