import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import style from './style.module.scss';

const LGBTQScreen=()=>{
    const [news, setNews] = useState(null);
    const [newsOne, setNewsOne] = useState(null);
    const [newsTwo, setNewsTwo] = useState(null);
    const [newsThree, setNewsThree] =useState(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const fetchNews = async() => {
            const result = await Axios('https://newsapi.org/v2/everything?q=lgbtq&apiKey=afd7612c61e743fe8fcd0d466b788981');
            console.log(result.data.articles[0]);
            setNews(result.data.articles[0]);   
            setNewsOne(result.data.articles[1]);
            setNewsTwo(result.data.articles[2]);
            setNewsThree(result.data.articles[3]);
        };


        if (news) {
            setLoading(false);
        
        }
        const timer = setTimeout(() => {
            !news && fetchNews();
        }, 1000);
        return () => clearTimeout(timer);
    }, [news]);

    
    
    return(
        loading ? <h3> loading...</h3> :
        
        <div>
            {/* <h1>News</h1> */}
        <section className={style.newsContainer}>
                <a href ={news.url} target='_blank'><h2>{news.title}</h2></a>
                <a href ={news.url} target='_blank'><img src={news.urlToImage}/></a>
                <h3>{news.description}</h3>
                <h4>Author: {news.author} {news.publishedAt}</h4> 
                <a href ={newsOne.url} target='_blank'><h2>{newsOne.title}</h2></a>
                <a href ={newsOne.url} target='_blank'><img src={newsOne.urlToImage}/></a>
                <h3>{newsOne.description}</h3>
                <h4>Author: {newsOne.author} {newsOne.publishedAt}</h4> 
                <a href ={newsTwo.url} target='_blank'><h2>{newsTwo.title}</h2></a>
                <a href ={newsTwo.url} target='_blank'><img src={newsTwo.urlToImage}/></a>
                <h3>{newsTwo.description}</h3>
                <h4>Author: {newsTwo.author} {newsTwo.publishedAt}</h4>
                <a href ={newsThree.url} target='_blank'><h2>{newsThree.title}</h2></a>
                <a href ={newsThree.url} target='_blank'><img src={newsThree.urlToImage}/></a>
                <h3>{newsThree.description}</h3>
                <h4>Author: {newsThree.author} {newsThree.publishedAt}</h4>
                
            </section>
        </div>
        
    )
}

export default LGBTQScreen