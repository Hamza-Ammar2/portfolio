import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/javascript.png'
import bs from './assets/bootstrap.png'
import react from './assets/react.png'
import mongo from './assets/mongoDB.png'
import node from './assets/node.jpg'
import python from './assets/python.png'
import cpp from './assets/c++.png'
import git from './assets/git.png'
import sql from './assets/sql.png'
import github from './assets/github.png'

function Tech({isGerman}) {
    let divStyle = {
        width: '100%',
        height: '100%'
    }
    
    let cont = {
        width: '100%',
        height: '100%',
    }

    let row = {
        width: '100%',
        flex: '1',
    }

    let imgStyle = {
        width: 'auto',
        height: '150px',
        objectFit: 'cover'
    }

    let col = {
        flex: '1',
        alignItems: 'center'
    }

    return (
        <div id="technologies" className="d-flex flex-column" style={divStyle}>
            <h1>
                {isGerman ? "Technologien" : "Technologies"}
            </h1>
            <div className="d-flex flex-column" style={cont}>
                <div className="d-flex flex-row" style={row}>
                    <div className="d-flex flex-column" style={col}>
                        <img src={html} style={imgStyle} />
                        <h5>HTML</h5>
                    </div>
                    <div className="d-flex flex-column" style={col}>
                        <img src={css} style={imgStyle} />
                        <h5>CSS</h5>
                    </div>
                    <div className="d-flex flex-column" style={col}>
                        <img className='rounded' src={js} style={imgStyle} />
                        <h5>JavaScript</h5>
                    </div>
                    <div className="d-flex flex-column" style={col}>
                        <img src={bs} style={imgStyle} />
                        <h5>Bootstrap</h5>
                    </div>
                </div>
                <div className="d-flex flex-row" style={row}>
                    <div className="d-flex flex-column" style={col}>
                        <img className='rounded' src={react} style={imgStyle} />
                        <h5>React</h5>
                    </div>
                    <div className="d-flex flex-column" style={col}>
                        <img className='rounded' src={node} style={imgStyle} />
                        <h5>Node js</h5>
                    </div>
                    <div className="d-flex flex-column" style={col}>
                        <img className='rounded' src={python} style={imgStyle} />
                        <h5>Python</h5>
                    </div>
                    <div className="d-flex flex-column" style={col}>
                        <img src={github} style={imgStyle} />
                        <h5>Github</h5>
                    </div>
                </div>
                <div className="d-flex flex-row" style={row}>
                    <div className="d-flex flex-column" style={col}>
                        <img className='rounded' src={cpp} style={imgStyle} />
                        <h5>C/C++</h5>
                    </div>
                    <div className="d-flex flex-column" style={col}>
                        <img className='rounded' src={mongo} style={imgStyle} />
                        <h5>MongoDB</h5>
                    </div>
                    <div className="d-flex flex-column" style={col}>
                        <img className='rounded' src={sql} style={imgStyle} />
                        <h5>SQL</h5>
                    </div>
                    <div className="d-flex flex-column" style={col}>
                        <img src={git} style={imgStyle} />
                        <h5>Git</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tech