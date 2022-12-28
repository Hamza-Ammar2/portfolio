import chess from './assets/chess.png'
import flap from './assets/flappyBird.png'
import mini from './assets/minibook.png'
import virus from './assets/virusSpread.png'
import Card from './card.js'
import './card.css'

function Projects({isGerman}) {
    let divStyle = {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.89)'
    }

    let chessText = {
        german: `Dies ist eine kleine Shachwebseite, wo Benutzer lokal mit Freunden oder online gegen Gegner von 
                überall in der Welt spielen können. Man hat die Option entweder anonym oder anzumelden und rangiert
                zu spielen. Punkte werden dann gesammelt und Spieler werden in eine Bestenliste geordnet. Spieler
                können ihre Spiele nachher analysieren. Rangierte Spiele werden gespeichert, damit andere Benutzer sie
                auch analysieren können.`,

        english: `This is a small website where people can play chess both locally with friends and online with people
                 from around the world. Users have the option to play anonymously or sign-up and play ranked where scores
                 will be arranged in a leaderboard. Users also have the ability to
                 analyze games after the match is over. Ranked matches will also be saved to be anlyzed by other 
                 players.`
    }

    let chessName = {
        german: "Schach Website",
        english: "Chess Website"
    }

    let virusName = {
        german: "Pandemie Simulation",
        english: "Pandemic Simulation Tool"
    }

    let virusText = {
        german: `Ein Python Programm, das eine Pandemie durch Teilchen Interaktionen simuliert. Mit diesem Programm kann
                man alle Parameter wie z.B soziale Distanz, Reisenbeschränkung und Asymptotizität unter anderen  
                in echter Zeit ändern und die Auswirkung studieren. Das Programm verwendet das SIR Model 
                (Susciptible, Infected, Recovered). Ein Plot von den Daten wird auch in echter Zeit gezeigt und
                aktualisiert.`,

        english: `A tool made with python that uses particle simulations to simulate virus spread. With this tool users can
                  change parameters like social distancing travel between cities recovery time and so on in real time and
                  see the results. The tool is based on the SIR model (Susciptible, Infected, Recovered) and
                  a plot of each run is shown and updated in real time.`
    }

    let flapName = {
        german: 'Flappy AI',
        english: 'Flappy AI'
    }

    let flapText = {
        german: `Eine Seite wo Benutzer das berühmte Spiel Flappy Bird spielen oder eine Künstliche Intelligenz
                trainieren um das zu tun, können. Die AI lern durch ein genetisches Algorithmus. Benutzer kontrollieren
                dann die Mutationsrate und Vögelzahl jeder Generation um das beste Resultat zu erreichen.`,

        english: `A fun site where users can play the famous game Flappy Bird or train an AI to do so. The AI
                uses a genetic algorithm to learn. Users can adjust mutation rate and and population size of each
                generation to try and get the best results.`
    }

    let miniName = {
        german: 'Facebook Mini Version',
        english: 'Facebook Mini'
    }

    let miniText = {
        german: `Eine mini Version von Facebook. Benutzer können Posts shreiben, Bilder Teilen, kommentieren und liken,
                Profiles erstellen und Freunshcaften anschliessen.`,
        english: `A mini version of the world famous site Facebook. Users can write posts, share photos, make profiles
                 comment and like eachothers posts and make friends.`
    }

    let row = {
        justifyContent: 'center',
        alignItems: 'center'
    }

    let cont = {
        height: 'auto',
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '25px',
        boxShadow: '5px 5px 10px 2px rgba(0,0,0,.8)',
        backgroundColor: 'white'
    }

    return (
        <div id='projects' className="d-flex flex-column" style={divStyle}>
            <h1 className='mb-3' style={{color: 'white'}}>
                {isGerman ? "Projekte" : "Projects"}
            </h1>
            <div className='d-flex flex-column rounded' style={cont}>
                <div className='d-flex flex-row' style={row}>
                    <Card src={chess} isGerman={isGerman} name={chessName} text={chessText} gitUrl={"https://github.com/Hamza-Ammar2/Chess-site"} siteUrl={"https://chess-845m.onrender.com"}/>
                    <Card isP={true} src={virus} isGerman={isGerman} name={virusName} text={virusText} gitUrl={"https://github.com/Hamza-Ammar2/Epidemic-simulation-Tool"} siteUrl={""}/>
                </div>
                <div className='d-flex flex-row' style={row}>
                    <Card src={flap} isGerman={isGerman} name={flapName} text={flapText} gitUrl={"https://github.com/Hamza-Ammar2/flappy-ai"} siteUrl={"https://flappy-ai.onrender.com"}/>
                    <Card src={mini} isGerman={isGerman} name={miniName} text={miniText} gitUrl={"https://github.com/Hamza-Ammar2/Mini-book"} siteUrl={"https://minibook.onrender.com"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects