
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import './Publisher.css';

function Publisher({news}){
  let location = useLocation();
  let publisher = location.state.param;
  if(publisher === "" || news.length === 0) return null;
  
  let filteredNews = news.filter(news => news.PUBLISHER === publisher);
  filteredNews.sort((a,b) => (a.TIMESTAMP - b.TIMESTAMP));
  function renderDate(){
    const d = new Date();
    return d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
  }
  return (
        <section className="publisher" key={publisher}>
          <h2>{publisher}</h2>
        {
          filteredNews.map((item, index) => 
            <article key={item.TITLE}>
              <h3>{item.TITLE}</h3>
              <p>
              <Link 
              key={item.TITLE}
              className="publisherButton"
              to={`/${item.URL}`}
              >
                  {item.URL }
              </Link>
              </p>
              <p>{renderDate(item.TIMESTAMP)}</p>
              
            </article>
           )
        }
        </section>
  );
}
export default Publisher;