import React, { useState, useEffect } from "react";
import { blogs, categories } from "@/data/blog";
//import { Link } from "react-router-dom";
export default function USAUnis() {
  // const [pageItems, setPageItems] = useState([]);
  // const [currentCategory, setCurrentCategory] = useState("All Categories");
  // useEffect(() => {
  //   if (currentCategory == "All Categories") {
  //     setPageItems(blogs);
  //   } else {
  //     let filtered = blogs.filter((elm) => elm.category == currentCategory);
  //     setPageItems(filtered);
  //   }
  // }, [currentCategory]);
  return (
    <>
      <section className="page-header -type-1" style={{paddingTop:40}}>
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title" style={{color:'#395fa9',fontWeight:600}}>Universities in United State of America</h1>
                </div>

                <div>
                  <p className="page-header__text">
                  The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s 
                  presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC. 
                  Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles' Hollywood is famed for filmmaking. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-sm layout-pb-lg">
        <div className="container">
          <div className="tabs -pills js-tabs">
            <div className="tabs__controls d-flex  flex-wrap y-gap-18 x-gap-20 js-tabs-controls">
              <ul>
                  <h5>University of South California(Los Angeles)</h5>
                   <h5>Harvard University(cambridge)</h5>
                   <h5>Standford University (Standford)</h5>
                   <h5>University of California(Los Angeles)</h5>
                   <h5>Yale University (new Haven)</h5>
                   <h5>Liberty University</h5>
                   <h5>Massachusetts Institute of Technology (MIT)</h5>
                   <h5>Cornell University</h5>
                   <h5>University of Chile</h5>
                   <h5>University of Washington</h5>
                   <h5>New York University</h5>
              </ul>
              <ul style={{marginLeft:200}}>
                  <h5> Princeton University</h5>
                  <h5>Columbia University</h5>
                  <h5>University of Chicago</h5>
                  <h5>University of Pennsylvania</h5>
                  <h5>California Institute of Technology</h5>
                  <h5>John Hopkins University</h5>
                  <h5>Northwestern University </h5>
                  <h5>Duke University</h5>
                  <h5>University Texas at Austin </h5>
              </ul>
                {/* <ul style={{marginLeft:200}}>
                <h5>Doctorate Degree Programes</h5>
                  <li>Accounting and Finance</li>
                  <li>Business and Management Studies</li>
                  <li>Engineering</li>
                  <li>Computer Science</li>
                  <li>Architecture and the Built Environment</li>
                  <li>Fashion Design</li>
                  <li>Law</li>
                  <li>Media</li>
                </ul> */}
              
             
              {/* {categories.map((elm, i) => (
                <div key={i} onClick={() => setCurrentCategory(elm)}>
                  <button
                    className={`tabs__button px-15 py-8 rounded-8 js-tabs-button ${
                      currentCategory == elm ? "is-active" : ""
                    } `}
                    data-tab-target=".-tab-item-1"
                    type="button"
                  >
                    {elm}
                  </button>
                </div>
              ))} */}
            </div>

            {/* <div className="tabs__content pt-40 js-tabs-content">
              <div className="tabs__pane -tab-item-1 is-active">
                <div className="row y-gap-30">
                  <h6>English Language Requirements</h6>
                  <p>IELTS (Academic) overall 6.5 (no band less than 6.0)</p>
                </div>

                <div className="row  pt-60 lg:pt-40">
                  <div className="col-auto">
                 
                  <p>display here batch Information(current batch)</p>
                  <p>display here Universities Campuses Inforamtion</p> */}
                    {/* <div className="pagination -buttons">
                      <button className="pagination__button -prev">
                        <i className="icon icon-chevron-left"></i>
                      </button>

                      <div className="pagination__count">
                        <a href="#">1</a>
                        <a className="-count-is-active" href="#">
                          2
                        </a>
                        <a href="#">3</a>
                        <span>...</span>
                        <a href="#">67</a>
                      </div>

                      <button className="pagination__button -next">
                        <i className="icon icon-chevron-right"></i>
                      </button>
                    </div> */}
                  {/* </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
