import React, { useState, useEffect } from "react";
import { blogs, categories } from "@/data/blog";
import { Link } from "react-router-dom";
export default function UniMlbrn() {
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
                  <h1 className="page-header__title">University of Melbourne</h1>
                </div>

                <div>
                  <p className="page-header__text">
                  The University of Melbourne’s main Parkville campus is a well-known city landmark, with unique cultural, 
                  architectural and landscape features and facilities.The University of Melbourne has an international focus 
                  and is aligned to the top universities around the world, and is ranked number 8 worldwide for graduate 
                  employability, based on QS Graduate Employability Rankings 2022.
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
                    <li>Arts</li>
                    <li>Science</li>
                     <li>Engineering</li>
                     <li>Engineering – Chemical</li>
                     <li>Computer Science</li>
                     <li>Commerce</li>
                     <li>Biomedicine</li>
                   
              </ul>
              <ul style={{marginLeft:180}}>
                <h5> Graduate Degree Programes</h5>
                <h6>Renowned for our expertise in areas</h6>
                <li>Arts</li>
                    <li>Science</li>
                     <li>Engineering</li>
                     <li>Engineering – Chemical</li>
                     <li>Computer Science</li>
                     <li>Commerce</li>
                     <li>Biomedicine</li>
              </ul>
                <ul style={{marginLeft:200}}>
                <h5>Doctorate Degree Programes</h5>
                <h6>Renowned for our expertise in areas</h6>
               n     <li>Arts</li>
                    <li>Science</li>
                     <li>Engineering</li>
                     <li>Engineering – Chemical</li>
                     <li>Computer Science</li>
                     <li>Commerce</li>
                     <li>Biomedicine</li>
                </ul>

            </div>

            <div className="tabs__content pt-40 js-tabs-content">
              <div className="tabs__pane -tab-item-1 is-active">
                <div className="row y-gap-30">
                <h6>English Language Requirements</h6>
                  <p>IELTS: total score of at least 6.5 in the Academic 
                    International English Language Testing System (IELTS), with no bands less than 6.0.</p>
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
