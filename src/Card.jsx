import profilePic from './assets/profilePic.jpeg'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src= {profilePic} alt="" />
            <h2 className='card-title'>Mehmet Pektas</h2>
            <p className='card-content'>I am a student.</p>
        </div>
    );
}
export default Card