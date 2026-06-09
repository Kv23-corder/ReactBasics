import profilepic from './assets/react.svg';

function Card() {

    return (
        <div className="card">
            <img className='card-image' src={profilepic} alt="profile pic"></img>
            <h2 className='card-title'>Bro Code</h2>
            <p className='card-text'>I make Youtube videos and play video games</p>

        </div>
    );

}

export default Card