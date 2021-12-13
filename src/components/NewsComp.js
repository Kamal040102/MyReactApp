import React, { Component } from 'react'

export default class NewsComp extends Component {
    render() {
        let {title, description, imgUrl, newsUrl, cardBG} = this.props
        return (
                    <div className={`mx-auto card p-2 bg-${cardBG}`} style={{width: "18rem", borderRadius:"20px"}}>
                        <object data={imgUrl} style={{borderRadius:"20px", width:"270.4px", height:"170.533px"}}> 
                        <img src="https://bitsofco.de/content/images/2018/12/broken-1.png" alt="Not Found" className="card-img-top" style={{borderRadius:"20px", width:"270.4px", height:"170.533px"}}/>
                        </object>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <div className="row">
                                <div className="col-6">
                                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
            
        )
    }
}
