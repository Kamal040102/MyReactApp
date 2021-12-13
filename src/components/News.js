import React, { Component } from 'react'
import Loader from './Loader'
import NewsComp from './NewsComp'


export default class News extends Component {
    constructor(){
        super()
        this.state = {
            articles : [],
            loading : false,
            page : 0,
            totalResults : 0
        }
    }

    async componentDidMount(){
        let url = "https://qnhe88.deta.dev/world/page=0"
        this.setState({loading:true})
        let data = await fetch(url)
        // console.log(data)   
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            // totalResults : parsedData.totalResults,
            loading:false
        })
    }

    onClickPrev = async () =>{
        let url = `https://qnhe88.deta.dev/world/page=${this.state.page - 1}`
        this.setState({loading:true})
        let data = await fetch(url)
        // console.log(data) 
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            // totalResults : parsedData.totalResults,
            loading:false,
            page : this.state.page - 1
        })
    }

    onClickNext = async () =>{
        let url = `https://qnhe88.deta.dev/world/page=${this.state.page + 1}`
        this.setState({loading:true})
        let data = await fetch(url)
        // console.log(data) 
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            // totalResults : parsedData.totalResults,
            loading:false,
            page : this.state.page + 1
        })
    }

    render() {
        let {newsTxt, cardBG} = this.props
        return (
            <div className='container pt-5'>
                <div className={`text-center text-${newsTxt}`}>
                <h1>Latest News</h1>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                {this.state.loading && <Loader/>}
                </div>
                <div className="row d-flex align-items-center justify-content-between my-3">
                {!this.state.loading && this.state.articles.map((elements)=>{
                    return (
                    <div className="mx-auto col-md-6 col-lg-4 col-12 my-5" key={elements.newsURL}>
                        <NewsComp cardBg={cardBG} title={elements.newsTitle.slice(0,40)} description={elements.newsDescription.slice(0,70)} imgUrl={elements.newsPicURL} newsUrl={elements.newsURL}/> 
                    </div>
                    )
                })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled = {this.state.page <= 0} type="button" className="btn btn-primary" onClick={this.onClickPrev}>&larr; Previous Page</button>
                <button disabled= {this.state.page >= 14} type="button" className="btn btn-primary" onClick={this.onClickNext}>Next Page &rarr;</button>
                </div>
            </div>
        )
    }
}
