import './about.css'
import me from './assets/me.jpg'

function About({isGerman}) {
    let divStyle = {
        justifyContent: 'center',
        alignItems: 'flex-end',
        textAlign: 'right',
        paddingRight: '30px',
        color: 'white'
    }

    let oneStyle = {
        alignItems: 'center',
        justifyContent: 'center',
    }

    return (
        <div id="about" /*className="d-flex flex-column" style={divStyle}*/>
            <div className='d-flex flex-column' id="one" style={oneStyle}>
                <img className='rounded' src={me} style={{
                    width: '50%',
                    height: '50%',
                    objectFit: 'cover',
                    boxShadow: '5px 5px 10px 2px rgba(0,0,0,.8)'
                }} />
            </div>
            <div id="two" className='d-flex flex-column' style={divStyle}>
                <h1>
                    {isGerman ? "Über mich," : "About me,"}
                </h1>
                <h5 style={{maxWidth: '400px', fontSize: '0.8rem', textAlign: 'right'}}>
                    {
                        isGerman ? 
                        `Meine Geschichte mit Programmieren hat angefangen, als ich 14 war. Ich hatte ein Buch über Informatik
                        gelesen. Durch dieses Buch habe ich das Programmieren kennengelernt und mich darin verliebt. Programmieren 
                        verspricht der Kreativität unendliche Freiheit. Jedes kann mehrere einzigartige Lösungen haben. Dies kam ohne 
                        Opferung der Anwendbarkeit. Ich fand es richtig spannend, an Probleme und Projekte zu arbeiten, meine Ideen zu verwirklichen
                        und diese sofort zu testen. Seitdem ist viel Zeit vergangen. In dieser Zeit habe ich meine Skills und Fähigkeiten refiniert.
                        Ich behersche alles von High-level Sprachen wie JavaScript und Python bis zu Low-level Sprachen wie C/C++. Ich bin kompetent
                        in der Front-End, Back-End und Datenbankseite der Entwicklung und kann eine Full-stack website in wenig Zeit machen.
                        `
                        :
                        `My coding journey began when I was 14 as I read a book about computer science. Through this book
                        I discovered the world of programming and fell in love with its most interesting promise. Full creative
                        Freedom. Every problem can have multiple solutions, all of them unique. This came with little to no 
                        sacrifice to effectiveness or real world usability. Which is why I have been learning and improving my style and skills
                        ever since. I have mastered everything from low-level languages like C/C++ to high-level ones like Python and JavaScript.
                        I am competent at the Front-End, Back-End and, Database side of development, 
                        and can effectively create a site on my own in very little time.`
                    }
                </h5>
            </div>
        </div>
    );
}

export default About