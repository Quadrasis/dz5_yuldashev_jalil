import React,{useState} from "react";
import News from "../../companents/news/news";
function MainPage (){
    const [news, setNews] = useState([])
    const getNews = (e) => {
        e.preventDefault()
        setNews(["About country", "About Us", "about Roads", "About People"])
    }
    return(
        <>
            <h2>Main Page</h2>
            <News propNews={news} getNewsProps={getNews}/>
        </>
    )
}

export default MainPage