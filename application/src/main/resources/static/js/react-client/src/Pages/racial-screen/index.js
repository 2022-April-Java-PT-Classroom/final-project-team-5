import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import style from '../../Components/news-pages-styling/style.module.scss';

const RacialScreen=()=>{

    const [news, setNews] = useState(null);
    const [newsOne, setNewsOne] = useState(null);
    const [newsTwo, setNewsTwo] = useState(null);
    const [newsThree, setNewsThree]=useState(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const fetchNews = async() => {
            const result = await Axios('https://newsapi.org/v2/everything?q=racism&apiKey=afd7612c61e743fe8fcd0d466b788981');
            console.log(result.data.articles[0]);
            setNews(result.data.articles[0]);   
            setNewsOne(result.data.articles[1]);
            setNewsTwo(result.data.articles[20]);
            setNewsThree(result.data.articles[30]);
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
        loading ? <h3 className={style.NewLoading}> loading...</h3> :
        
        <div>
            {/* <h1>News</h1> */}
        <section className={style.newsContainer}>
                <a href ={news.url} target='_blank'><h2 className={style.newsTitle}>{news.title}</h2></a>
                <a href ={news.url} target='_blank'><img className={style.newsImg} src={news.urlToImage}/></a>
                <h3 className={style.newsDescription}>{news.description}</h3>
                <h4 className={style.newsTagline}>Author: {news.author} | {news.publishedAt}</h4> 
                <a href ={newsOne.url} target='_blank'><h2 className={style.newsTitle}>{newsOne.title}</h2></a>
                <a href ={newsOne.url} target='_blank'><img className={style.newsImg} src={newsOne.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsOne.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsOne.author} | {newsOne.publishedAt}</h4> 
                <a href ={newsTwo.url} target='_blank'><h2 className={style.newsTitle}>{newsTwo.title}</h2></a>
                <a href ={newsTwo.url} target='_blank'><img className={style.newsImg} src={newsTwo.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsTwo.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsTwo.author} | {newsTwo.publishedAt}</h4>
                <a href ={newsThree.url} target='_blank'><h2 className={style.newsTitle}>{newsThree.title}</h2></a>
                <a href ={newsThree.url} target='_blank'><img className={style.newsImg} src={newsThree.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsThree.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsThree.author} | {newsThree.publishedAt}</h4>
            </section>
        </div>
        
    )
}
export default RacialScreen