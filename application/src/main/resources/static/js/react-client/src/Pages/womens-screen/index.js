import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import style from '../../Components/news-pages-styling/style.module.scss';

const WomensScreen=()=>{
 
    const [news, setNews] = useState(null);
    const [newsOne, setNewsOne] = useState(null);
    const [newsTwo, setNewsTwo] = useState(null);
    const [newsThree, setNewsThree] =useState(null);
    const [newsFour, setNewsFour] =useState(null);
    const [newsFive, setNewsFive] =useState(null);
    const [newsSix, setNewsSix] =useState(null);
    const [newsSeven, setNewsSeven] =useState(null);
    const [newsEight, setNewsEight] =useState(null);
    const [newsNine, setNewsNine] =useState(null);
    const [newsTen, setNewsTen] =useState(null);
    const [newsEleven, setNewsEleven] =useState(null);
    const [newsTwelve, setNewsTwelve] =useState(null);
    const [newsThirteen, setNewsThirteen] =useState(null);
    const [newsFourteen, setNewsFourteen] =useState(null);
    const [newsFifthteen, setNewsFifthteen] =useState(null);
    const [newsSixteen, setNewsSixteen] =useState(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const fetchNews = async() => {
            const result = await Axios('https://newsapi.org/v2/everything?q=women-rights&apiKey=afd7612c61e743fe8fcd0d466b788981');
            console.log(result.data.articles[0]);
            setNews(result.data.articles[0]);   
            setNewsOne(result.data.articles[1]);
            setNewsTwo(result.data.articles[2]);
            setNewsThree(result.data.articles[3]);
            setNewsFour(result.data.articles[4]);
            setNewsFive(result.data.articles[5]);
            setNewsSix(result.data.articles[6]);
            setNewsSeven(result.data.articles[7]);
            setNewsEight(result.data.articles[8]);
            setNewsNine(result.data.articles[9]);
            setNewsTen(result.data.articles[10]);
            setNewsEleven(result.data.articles[11]);
            setNewsTwelve(result.data.articles[12]);
            setNewsThirteen(result.data.articles[14]);
            setNewsFourteen(result.data.articles[15]);
            setNewsFifthteen(result.data.articles[16]);
            setNewsSixteen(result.data.articles[17]);
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
        <div className={style.newsOne}>
                <a href ={news.url} target='_blank'><h2 className={style.newsTitle}>{news.title}</h2></a>
                <a href ={news.url} target='_blank'><img className={style.newsImg} src={news.urlToImage}/></a>
                <h3 className={style.newsDescription}>{news.description}</h3>
                <h4 className={style.newsTagline}>Author: {news.author} | {news.publishedAt}</h4> 
                </div>
                <div className={style.newsTwo}>
                <a href ={newsOne.url} target='_blank'><h2 className={style.newsTitle}>{newsOne.title}</h2></a>
                <a href ={newsOne.url} target='_blank'><img className={style.newsImg} src={newsOne.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsOne.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsOne.author} | {newsOne.publishedAt}</h4> 
                </div>
                <div className={style.newsThree}>
                <a href ={newsTwo.url} target='_blank'><h2 className={style.newsTitle}>{newsTwo.title}</h2></a>
                <a href ={newsTwo.url} target='_blank'><img className={style.newsImg} src={newsTwo.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsTwo.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsTwo.author} | {newsTwo.publishedAt}</h4>
                </div>
                <div className={style.newsFour}>
                <a href ={newsThree.url} target='_blank'><h2 className={style.newsTitle}>{newsThree.title}</h2></a>
                <a href ={newsThree.url} target='_blank'><img className={style.newsImg} src={newsThree.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsThree.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsThree.author} | {newsThree.publishedAt}</h4>
                </div>
                <div className={style.newsOne}>
                <a href ={newsFour.url} target='_blank'><h2 className={style.newsTitle}>{newsFour.title}</h2></a>
                <a href ={newsFour.url} target='_blank'><img className={style.newsImg} src={newsFour.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsFour.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsFour.author} | {newsFour.publishedAt}</h4>
                </div>
                <div className={style.newsOne}>
                <a href ={newsFive.url} target='_blank'><h2 className={style.newsTitle}>{newsFive.title}</h2></a>
                <a href ={newsFive.url} target='_blank'><img className={style.newsImg} src={newsFive.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsFive.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsFive.author} | {newsFive.publishedAt}</h4>
                </div>
                <div className={style.newsOne}>
                <a href ={newsSix.url} target='_blank'><h2 className={style.newsTitle}>{newsSix.title}</h2></a>
                <a href ={newsSix.url} target='_blank'><img className={style.newsImg} src={newsSix.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsSix.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsSix.author} | {newsSix.publishedAt}</h4>
                </div>
                <div className={style.newsOne}>
                <a href ={newsSeven.url} target='_blank'><h2 className={style.newsTitle}>{newsSeven.title}</h2></a>
                <a href ={newsSeven.url} target='_blank'><img className={style.newsImg} src={newsSeven.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsSeven.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsSeven.author} | {newsSeven.publishedAt}</h4>
                </div>
                <div className={style.newsOne}>
                <a href ={newsEight.url} target='_blank'><h2 className={style.newsTitle}>{newsEight.title}</h2></a>
                <a href ={newsEight.url} target='_blank'><img className={style.newsImg} src={newsEight.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsEight.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsEight.author} | {newsEight.publishedAt}</h4>
                </div>
                <div className={style.newsOne}>
                <a href ={newsNine.url} target='_blank'><h2 className={style.newsTitle}>{newsNine.title}</h2></a>
                <a href ={newsNine.url} target='_blank'><img className={style.newsImg} src={newsNine.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsNine.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsNine.author} | {newsNine.publishedAt}</h4>
                </div>
                <div className={style.newsOne}>
                <a href ={newsTen.url} target='_blank'><h2 className={style.newsTitle}>{newsTen.title}</h2></a>
                <a href ={newsTen.url} target='_blank'><img className={style.newsImg} src={newsTen.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsTen.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsTen.author} | {newsTen.publishedAt}</h4>
                </div>
                <div className={style.newsOne}>
                <a href ={newsEleven.url} target='_blank'><h2 className={style.newsTitle}>{newsEleven.title}</h2></a>
                <a href ={newsEleven.url} target='_blank'><img className={style.newsImg} src={newsEleven.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsEleven.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsEleven.author} | {newsEleven.publishedAt}</h4>
                </div>
                <div className={style.newsOne}>
                <a href ={newsTwelve.url} target='_blank'><h2 className={style.newsTitle}>{newsTwelve.title}</h2></a>
                <a href ={newsTwelve.url} target='_blank'><img className={style.newsImg} src={newsTwelve.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsTwelve.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsTwelve.author} | {newsTwelve.publishedAt}</h4>
                </div>
                <div className={style.newsOne}>
                <a href ={newsThirteen.url} target='_blank'><h2 className={style.newsTitle}>{newsThirteen.title}</h2></a>
                <a href ={newsThirteen.url} target='_blank'><img className={style.newsImg} src={newsThirteen.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsThirteen.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsThirteen.author} | {newsThirteen.publishedAt}</h4>
                </div>
                <div className={style.newsOne}>
                <a href ={newsFourteen.url} target='_blank'><h2 className={style.newsTitle}>{newsFourteen.title}</h2></a>
                <a href ={newsFourteen.url} target='_blank'><img className={style.newsImg} src={newsFourteen.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsFourteen.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsFourteen.author} | {newsFourteen.publishedAt}</h4>
                </div>
                <div className={style.newsOne}>
                <a href ={newsFifthteen.url} target='_blank'><h2 className={style.newsTitle}>{newsFifthteen.title}</h2></a>
                <a href ={newsFifthteen.url} target='_blank'><img className={style.newsImg} src={newsFifthteen.urlToImage}/></a>
                <h3 className={style.newsDescription}>{newsFifthteen.description}</h3>
                <h4 className={style.newsTagline}>Author: {newsFifthteen.author} | {newsFifthteen.publishedAt}</h4>
                </div>
                 
            </section>
        </div>
        
    )
}
export default WomensScreen