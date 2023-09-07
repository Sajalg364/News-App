import React,{useEffect , useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

import PropTypes from 'prop-types'


const News =(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalfl = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const updateNews = async()=>{
    props.setProgress(20);
    console.log(props.setProgress);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({loading : true});
    setLoading(true)

    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(60);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    // this.setState({ loading: false ,articles: parsedData.articles , totalResults: parsedData.totalResults})
    
    props.setProgress(100);
  }  

  useEffect(() => {
    document.title = `${capitalfl(props.category)} - SpaceNews`;
    updateNews()
  }, [])
  

  const handlePrevClick = async ()=>{
    setPage(page-1);
    updateNews()
  }

  const handleNextClick = async()=>{
    setPage(page+1);
    updateNews()
  }

  const fetchMoreData = async()=>{
    
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

    return (
      <div className='container my-3 '>
        
        <h2 className='text-white text-center ' style={{marginTop : '70px'}}>SpaceNews - Top {capitalfl(props.category)} Headlines</h2>
        {loading && <Spinner/>}        

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >

        <div className="container">

        <div className="row">
          {articles.map((element)=>{
             return <div className="col-md-4" key={element.url}>
             <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,70):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
             </div> 
          })}  
        </div>

        </div>

        </InfiniteScroll>
        <div className="container d-flex justify-content-between">
          <button disabled={page<=1} type="button" className="btn btn-light" onClick={handlePrevClick}>&larr; Previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-light" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
}

News.defaultProps = {
  name: 'stranger'
}

News.defaultProps = {
  name: 'stranger'
}

export default News