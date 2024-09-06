import React, { useState, useEffect } from "react";
import { blogs, categories } from "@/data/blog";
//import { Link } from "react-router-dom";
export default function UniIndependt() {
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
                  <h1 className="page-header__title" style={{color:'#395fa9',fontWeight:600}}>Independent College</h1>
                </div>

                <div>
                  <p className="page-header__text">
                  Independent College Dublin's positive, high-energy environment, deeply committed faculty and staff and a strong network 
                  of support systems make it the perfect place for you to find your niche – academically, socially, and professionally. 
                  Attending college for the first time can be an exciting prospect.
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
                <h5>Undergraduate Degree Programes</h5>
                   <li>Accounting and Finance</li>
                   <li>Business and Management Studies</li>
                   <li>Law</li>
                   {/* <li>Computer Science</li>
                   <li>Dispute Resolution</li>
                   <li>Architecture and the Built Environment</li>
                   <li>Education</li>
                   <li>Fashion Design</li>
                   <li>Law</li>
                   <li>Media</li> */}
              </ul>
              <ul style={{marginLeft:180}}>
                <h5> Graduate Degree Programes</h5>
                    <li>Accounting and Finance</li>
                    <li>Business and Management Studies</li>
                    <li>LAw</li>
                    <li>MA Dispute Resolution</li>
                    {/* <li>Architecture and the Built Environment</li>
                   <li>Fashion Design</li>
                   <li>Law</li>
                  <li>Media</li> */}
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

            <div className="tabs__content pt-40 js-tabs-content">
              <div className="tabs__pane -tab-item-1 is-active">
                <div className="row y-gap-30">
                  <h6>English Language Requirements</h6>
                  <p>We accept a number of English language qualifications including IELTS, TOEFL and Duolingo.</p>
                </div>

                <div className="row  pt-60 lg:pt-40">
                  <div className="col-auto">
                 
                  <p>display here batch Information(current batch)</p>
                  <p>display here Universities Campuses Inforamtion</p>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
