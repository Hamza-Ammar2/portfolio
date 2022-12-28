


function Frontpage({isGerman}) {
    let containerStyle = {
        width: '100vw',
        height: '100vh',
        textAlign: 'left',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.89)',
        color: 'white',
        paddingLeft: '10px'
    };

    
    return (
        <div id='home' className="d-flex flex-column" style={containerStyle}>
            <h1>
                {isGerman ? "Hallo," : "Hello,"}
            </h1>
            <h1>
                {isGerman ? "Ich bin Hamza," : "I am Hamza,"}
            </h1>
            <h1>
                {isGerman ? "Full-Stack Web-Entwickler" : "Full-Stack Web-Developer"}
            </h1>
        </div>
    );
}

export default Frontpage