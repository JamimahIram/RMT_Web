import React, { useState, useEffect } from "react";
import { blogs, categories } from "@/data/blog";
import { Link } from "react-router-dom";
export default function UniLatrobe() {
  const [pageItems, setPageItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All Categories");
  useEffect(() => {
    if (currentCategory == "All Categories") {
      setPageItems(blogs);
    } else {
      let filtered = blogs.filter((elm) => elm.category == currentCategory);
      setPageItems(filtered);
    }
  }, [currentCategory]);
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">La Trobe University Melbourne</h1>
                </div>

                <div>
                  <p className="page-header__text">
                  La Trobe University Melbourne Victoria Australia ranked in the world's top 250 by the Times Higher Education World University Rankings 2021.
                   We're also: ranked #2 in the world for health and wellbeing, ranked in the world's top 50 for sports-related subjects.
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
            <div className="tabs__controls d-flex justify-center flex-wrap y-gap-20 x-gap-10 js-tabs-controls">
            <ul>
                <h5>Undergraduate Degree Programes</h5>
                  <h6>Renowned for our expertise in areas</h6>
                    <li>Health and well being</li>
                    <li>Science</li>
                     <li>Engineering</li>
                     <li>Sports</li>
                     <li>Computer Science</li>
                     <li>Architecture</li>
                     <li>Art and Design</li>
                     <li>Accounting and Finance</li>
                   
              </ul>
              <ul style={{marginLeft:180}}>
                <h5> Graduate Degree Programes</h5>
                <h6>Renowned for our expertise in areas</h6>
                <li>Health and well being</li>
                    <li>Science</li>
                     <li>Engineering</li>
                     <li>Sports</li>
                     <li>Computer Science</li>
                     <li>Architecture</li>
                     <li>Art and Design</li>
                     <li>Accounting and Finance</li>
              </ul>
                <ul style={{marginLeft:200}}>
                <h5>Doctorate Degree Programes</h5>
                <h6>Renowned for our expertise in areas</h6>
                <li>Health and well being</li>
                    <li>Science</li>
                     <li>Engineering</li>
                     <li>Sports</li>
                     <li>Computer Science</li>
                     <li>Architecture</li>
                     <li>Art and Design</li>
                     <li>Accounting and Finance</li>
                </ul>

            </div>

            <div className="tabs__content pt-40 js-tabs-content">
              <div className="tabs__pane -tab-item-1 is-active">
                <div className="row y-gap-30">
                <h6>English Language Requirements</h6>
                  <p>UKVI IELTS Overall 6.0, no band less than 6.0                                      
                    (PTE) Overall score of 46 with no score less than 46                             
                    TOEFL Overall score of 64 with 13 in Reading, 12 in Listening, 18 in Speaking and 21 in Writing                                        
                    Cambridge Certificate of Advanced English 169 with no less than 169 in any component</p>
                </div>

                <div className="row justify-center pt-60 lg:pt-40">
                  <div className="col-auto">
                    <div className="pagination -buttons">
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
                    </div>
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
