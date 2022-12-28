

function Thanks({isGerman}) {
    let divStyle= { 
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.8)',
        color: 'white'
    }

    return (
        <div className="d-flex flex-column" style={divStyle}>
            <h1 style={{fontSize: '5rem'}}>{isGerman ? "Danke!" : "Thanks!"}</h1>
            <p>{isGerman ? "Ich melde mich bald bei Ihnen." : "I'll be in touch soon."}</p>
        </div>
    );
}

export default Thanks