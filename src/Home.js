import { HiChevronDoubleRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import './Home.css';

function Home({news, publishers}){
    if(publishers.length === 0) return null;

    return (
            <section className="publishers">
            {
              publishers.map((item, index) => 
                <Link 
                  key={item}
                  className="publishersButton"
                  to={`/${item}`}
                  state={{ param: item }}
                >
                  {item }
                  <HiChevronDoubleRight />
                </Link>
               )
            }
            </section>
    );
}
export default Home;