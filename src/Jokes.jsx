
function Jokes({ id, joke, handleChange }) {
    return (
        <div className='card-box'>
            <div className="card">
                <div className="card-content">
                    <h2 className="card-header">
                        Joke
                    </h2>
                    <p className="content">
                        {joke}
                    </p>
                    <button className="btn" onClick={() => handleChange()}>
                        Show me a new Joke!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Jokes;