import React, { Component } from 'react'
import Loader from './Loader'
import NewsComp from './NewsComp'


export default class News extends Component {
    // articles = [

    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Covid: Health Secretary Sajid Javid to detail new measures",
    //         "description": "The PM has already announced a tightening-up on mask-wearing and PCR tests for all arrivals in the UK.",
    //         "url": "http://www.bbc.co.uk/news/uk-59449480",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/827D/production/_121850433_gettyimages-1288082858.jpg",
    //         "publishedAt": "2021-11-28T06:52:20.374269Z",
    //         "content": "By Malu CursinoBBC News\r\nImage source, Getty Images\r\nHealth Secretary Sajid Javid is due to outline how and when new Covid measures will come into force in the UK's response to the new Omicron varian… [+4061 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Migrant crisis: Priti Patel not included in Calais meeting",
    //         "description": "The home secretary says failure by Europe to co-operate with the UK could lead to \"even worse scenes\".",
    //         "url": "http://www.bbc.co.uk/news/uk-59448398",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/168F5/production/_121850429_tv072205948.jpg",
    //         "publishedAt": "2021-11-28T05:52:21.2799257Z",
    //         "content": "By Malu CursinoBBC News\r\nHome Secretary Priti Patel has warned that failure by European politicians to co-operate on the continent's migrant crisis will lead to \"even worse scenes\" in the English Cha… [+3396 chars]"
    //     },

    //     {

    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "'Why do you like Shah Rukh Khan?'",
    //         "description": "The Bollywood superstar's female fandom rests not on love but on economics, according to a new book.",
    //         "url": "http://www.bbc.co.uk/news/world-asia-india-59344606",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1695D/production/_121790529_gettyimages-499342415-594x594.jpg",
    //         "publishedAt": "2021-11-28T04:52:20.0668872Z",
    //         "content": "By Aparna AlluriBBC News, Delhi\r\nImage caption, Khan is one of Bollywood's biggest superstars\r\n\"Why do you like Shah Rukh Khan?\"\r\nI put the question about the Bollywood superstar to a couple of my fr… [+7693 chars]"
    //     },
        
    //     {
            
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Covid: Netherlands enters partial lockdown amid surging infections",
    //         "description": "The government says the three-week curbs are critical to protect hospitals from becoming overwhelmed.",
    //         "url": "http://www.bbc.co.uk/news/world-europe-59448525",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1248E/production/_121849847_9cb21a48-389b-4db5-9068-1813bad1a4ac.jpg",
    //         "publishedAt": "2021-11-28T04:37:20.9759868Z",
    //         "content": "Image caption, Cafes, museums, and cinemas across the Netherlands must now be closed between 17:00 and 05:00 local time (16:00-04:00 GMT)\r\nA partial lockdown has come into force in the Netherlands, a… [+2687 chars]"
    //     },
        
    //     {
            
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Stephen Sondheim: London's West End to dim lights for theatre icon",
    //         "description": "The two-minute tribute to theatre titan Stephen Sondheim, who died this week, takes place on Monday.",
    //         "url": "http://www.bbc.co.uk/news/uk-england-london-59447170",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E2EE/production/_121849085_gettyimages-815740660.jpg",
    //         "publishedAt": "2021-11-28T03:52:23.0350144Z",
    //         "content": "Image source, Getty Images\r\nImage caption, London's West End is famed for musical theatre shows\r\nThe lights in London's West End will be dimmed as theatres pay tribute to legendary US composer and so… [+1472 chars]"
    //     },
        
    //     {
            
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Covid: Israel to impose travel ban for foreigners over new variant",
    //         "description": "Travellers from all countries will be banned from entering Israel for 14 days, local media report.",
    //         "url": "http://www.bbc.co.uk/news/world-middle-east-59448547",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1123D/production/_121850207_f43a35a8-e308-4d56-a9d1-c82e2014f40d.jpg",
    //         "publishedAt": "2021-11-28T03:37:18.5044143Z",
    //         "content": "Image caption, The Israeli government is pushing for mandatory quarantine for all Israeli nationals returning from abroad\r\nIsrael is to ban foreigners from entering the country for 14 days and use su… [+3978 chars]"
    //     },
        
    //     {
            
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "The migrants turned back from Belarus",
    //         "description": "Three specially chartered planes have now returned 1,000 migrants from Belarus to Iraq.",
    //         "url": "http://www.bbc.co.uk/news/world-europe-59438028",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9618/production/_121842483_p0b6mgwz.jpg",
    //         "publishedAt": "2021-11-28T01:52:21.2326924Z",
    //         "content": "Three specially chartered planes have now returned 1,000 migrants from Belarus to Iraq.\r\nThe majority of those returned were Iraqi and Syrian Kurds and Yazidis, groups displaced by fighting in the re… [+210 chars]"
    //     },
        
    //     {
            
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Hondurans vote to replace controversial leader",
    //         "description": "A former first lady and a man convicted of corruption vie to succeed an unpopular president.",
    //         "url": "http://www.bbc.co.uk/news/world-latin-america-59446944",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12556/production/_121849057_mediaitem121849056.jpg",
    //         "publishedAt": "2021-11-28T00:22:17.1713783Z",
    //         "content": "By Will GrantBBC News, Tegucigalpa\r\nIn the final hours before polling day in Honduras, a few dozen activists gathered inside the Liberal Party's headquarters in the capital, Tegucigalpa, for some las… [+5663 chars]"
    //     },
        
    //     {
            
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Burkina Faso: Tear gas fired at protesters decrying Islamist attacks",
    //         "description": "The protest comes amid fear of an Islamist encroachment following a number of recent attacks.",
    //         "url": "http://www.bbc.co.uk/news/world-africa-59443521",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8CF4/production/_121848063_mediaitem121845995.jpg",
    //         "publishedAt": "2021-11-27T15:37:20.3789913Z",
    //         "content": "Image caption, Protesters have been demanding the president's resignation\r\nPolice in Burkina Faso have fired tear gas at people protesting against the state's failure to stop a rise in Islamist viole… [+1446 chars]"
    //     },
        
    //     {
            
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Biden: Fact-checking claims about US economic progress",
    //         "description": "President Biden says things have improved for the US economy, but is he right?",
    //         "url": "http://www.bbc.co.uk/news/59402975",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/149B8/production/_121780448_biden_hands_gettyimages-1355155674.jpg",
    //         "publishedAt": "2021-11-27T00:52:17.5872085Z",
    //         "content": "By Reality Check teamBBC News\r\nImage caption, President Biden says there's been major progress on the economy\r\nPresident Joe Biden says the US has made \"historic progress\" on the economy in the last … [+3973 chars]"
    //     }
    // ]
    constructor(){
        super()
        this.state = {
            articles : [],
            loading : false,
            page : 1,
            totalResults : 0
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/everything?q=technology&apiKey=ea34feb6da93457895d2f1ea5b063374&page=1&pageSize=9"
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults : parsedData.totalResults,
            loading:false
        })
    }

    onClickPrev = async () =>{
        let url = `https://newsapi.org/v2/everything?q=technology&apiKey=ea34feb6da93457895d2f1ea5b063374&page=${this.state.page - 1}&pageSize=9`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults : parsedData.totalResults,
            loading:false
        })
    }

    onClickNext = async () =>{
        let url = `https://newsapi.org/v2/everything?q=technology&apiKey=ea34feb6da93457895d2f1ea5b063374&page=${this.state.page + 1}&pageSize=9`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults : parsedData.totalResults,
            loading:false
        })
    }

    render() {
        let {newsTxt, cardBG} = this.props
        return (
            <div className='container pt-5'>
                <div className={`text-center text-${newsTxt}`}>
                <h1>Latest Tech News</h1>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                {this.state.loading && <Loader/>}
                </div>
                <div className="row d-flex align-items-center justify-content-between my-3">
                {!this.state.loading && this.state.articles.map((elements)=>{
                    return (
                    <div className="mx-auto col-md-6 col-lg-4 col-12 my-5" key={elements.url}>
                        <NewsComp cardBg={cardBG} title={elements.title.slice(0,40)} description={elements.description.slice(0,70)} imgUrl={elements.urlToImage} newsUrl={elements.url} newsDate={elements.publishedAt.slice(0,10)}/> 
                    </div>
                    )
                })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.onClickPrev}>&larr; Previous Page</button>
                <button disabled={this.state.page === (Math.round(this.state.totalResults/9))} type="button" className="btn btn-primary" onClick={this.onClickNext}>Next Page &rarr;</button>
                </div>
            </div>
        )
    }
}
