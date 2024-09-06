import React, { useState, useEffect } from "react";
import { blogs, categories } from "@/data/blog";
import { Link } from "react-router-dom";
export default function UniNUI() {
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
                  <h1 className="page-header__title">University of Galway</h1>
                </div>

                <div>
                  <p className="page-header__text">
                  The University of Galway is firmly ranked in the top 2% of global universities in the Times Higher Education (THE) World University Rankings and the QS World University Rankings.
                   The latest editions of both these rankings see Galway ranked 289th in the world (QS) and top 350 in the world
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
                    <li>Becom in International Hotel Management</li>
                     <li>College of Business</li>
                     <li>Public Policy and Law</li>
                     <li>Biomedical Engineering</li>
                     <li>College of Science and Engineering</li>
                     <li>Biopharmaceutical Chemistry</li>
                     {/* <li>Statistics and Operational Research</li> */}
                   
              </ul>
              <ul style={{marginLeft:180}}>
                <h5> Graduate Degree Programes</h5>
                <h6>Renowned for our expertise in areas</h6>
                <li>Becom in International Hotel Management</li>
                     <li>College of Business</li>
                     <li>Public Policy and Law</li>
                     <li>Biomedical Engineering</li>
                     <li>College of Science and Engineering</li>
                     <li>Biopharmaceutical Chemistry</li>
              </ul>
                {/* <ul style={{marginLeft:200}}>
                <h5>Doctorate Degree Programes</h5>
                <h6>Renowned for our expertise in areas</h6>
                <li>Becom in International Hotel Management</li>
                     <li>College of Business</li>
                     <li>Public Policy and Law</li>
                     <li>Biomedical Engineering</li>
                     <li>College of Science and Engineering</li>
                     <li>Biopharmaceutical Chemistry</li>
                </ul> */}
            </div>

            <div className="tabs__content pt-40 js-tabs-content">
              <div className="tabs__pane -tab-item-1 is-active">
                <div className="row y-gap-30">
                <h4>English Language Requirements</h4>
                  <p>IELTS Academic 6.5 with no less then 6.0  </p>
                   <p> TOFEL  	
                    88 overall
                   7 Listening
                   16 Speaking
                   18 Writing
                   8 Reading     </p>   
                   <p>PTE 61 overall,  no less than 48 in any one component.</p>          
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
