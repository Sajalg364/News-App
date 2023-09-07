import React from 'react'

const NewsItem =(props)=>{
    let {title , description , imageUrl ,newsUrl , author , date ,source} = props;
    return (
      <div className='my-3'>
        
        <div className="card shadow-lg" style={{width: "20rem" , backgroundColor: "#e3ffff"}}>
        <div style={{display : 'flex', justifyContent : 'flex-end' , position : 'absolute' , right : '0'}}>
        <span class="badge rounded-pill bg-danger">{source}
        </span>
        </div>
        <img src={imageUrl} style={{width: "20rem" , height: "12rem"}} className="card-img-top shadow-lg" alt="..."/>
        
        <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More..</a>
        </div>
        </div>
      </div>
    )
}

export default NewsItem