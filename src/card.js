import './card.css'

function Card({src, text, isGerman, name, gitUrl, siteUrl, isP}) {
    let btnStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.89)',
        color: 'white',
        border: 'none',
        boxShadow: '2px 2px 4px 2px rgba(255,255,255,.3)'
    }

    return (
        <div className="flip-card g-col-6">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={src} alt="Avatar" style={{width: '350px', height: '250px'}} />
                </div>
                <div className="flip-card-back">
                    <h4>{isGerman ? name.german : name.english}</h4>
                    <p style={{fontSize: '0.6rem'}}>{isGerman ? text.german : text.english}</p>
                    <div className='d-flex flex-row' style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                    }}>
                        {isP ? null :<a href={siteUrl} target="_blank">
                            <button style={btnStyle} className='btn btn-primary'>{isGerman ? "Seite ansehen" : "View Site"}</button>
                        </a>}
                        <a href={gitUrl} target="_blank">
                            <button style={btnStyle} className='btn btn-primary'>{isGerman ? "Code ansehen" : "Source Code"}</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;