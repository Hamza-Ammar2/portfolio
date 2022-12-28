

function Contact({isGerman}) {
    let divStyle = {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    }

    let formStyle = {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        boxShadow: '5px 5px 10px 2px rgba(0,0,0,.8)',
        backgroundColor: 'rgba(0,0,0,.8)'
    };

    let footerStyle = {
        width: '100%',
        padding: '20px',
        backgroundColor: 'rgba(0,0,0,.8)',
        color: 'white',
        alignItems: 'center',
        gap: '10px'
    };
    
    return (
        <div id='contact' className="d-flex flex-column" style={divStyle}>
            <h1>{isGerman ? "Schreib mir eine Email!" : "Let's Work Together!"}</h1>
            <div className="d-flex flex-column" style={{alignItems: 'center', justifyContent: 'center', flex: '1'}}>
                <form action="https://formsubmit.co/hamzaammar2@yahoo.com" method='POST' className="d-flex flex-column rounded" style={formStyle}>
                    <input type="hidden" name="_next" value={`${window.location.origin}/thanks`} />
                    <input type="text" name="name" className="form-control mb-3" placeholder={isGerman ? "Name" : "Fullname"} required/>
                    <input type="email" name="email" className="form-control mb-3" placeholder="John@yahoo.com" required />
                    <textarea name="message" placeholder="message" style={{resize: 'none'}} cols="50" className="form-control mb-3" rows="8" required></textarea>
                    <button style={{border: 'none', backgroundColor: 'rgb(221, 36, 36)'}} className="btn btn-primary" type="submit">{isGerman ? "Senden" : "Send"}</button>
                </form>
            </div>
            <footer className="d-flex flex-row" style={footerStyle} >
                <i style={{fontSize: '2.5rem'}} className="fa fa-whatsapp"></i>
                <p style={{margin: 'auto 0'}}>+43 669798665</p>
                <div style={{flex: '1'}}></div>
                <a style={{color: 'inherit'}} href="https://www.linkedin.com/in/hamza-ammar-57591021b/">
                    <i style={{fontSize: '2.5rem'}} className="fa fa-linkedin"></i>
                </a>
                <a style={{color: 'inherit'}} href="https://github.com/Hamza-Ammar2">    
                    <i style={{fontSize: '2.5rem'}} className="fa fa-github"></i>
                </a>
            </footer>
        </div>
    );
}

export default Contact