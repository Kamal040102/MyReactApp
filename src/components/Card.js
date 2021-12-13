import React from 'react'

export default function Card(props) {
    return (
        <div className="py-5 row m-0">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-0 mb-5">
                <div className={`card bg-${props.Mode} text-${props.Mode==='light'?'dark':'light'} mx-auto`} style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="card-link">Card link</a>
                        <a href="/" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-0 mb-5">
                <div className={`card bg-${props.Mode} text-${props.Mode==='light'?'dark':'light'} mx-auto`} style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="card-link">Card link</a>
                        <a href="/" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-0 mb-5">
                <div className={`card bg-${props.Mode} text-${props.Mode==='light'?'dark':'light'} mx-auto`} style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="card-link">Card link</a>
                        <a href="/" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-0 mb-5">
                <div className={`card bg-${props.Mode} text-${props.Mode==='light'?'dark':'light'} mx-auto`} style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="card-link">Card link</a>
                        <a href="/" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-0 mb-5">
                <div className={`card bg-${props.Mode} text-${props.Mode==='light'?'dark':'light'} mx-auto`} style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="card-link">Card link</a>
                        <a href="/" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-0 mb-5">
                <div className={`card bg-${props.Mode} text-${props.Mode==='light'?'dark':'light'} mx-auto`} style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="card-link">Card link</a>
                        <a href="/" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
