import React, { useState, useEffect } from "react";
import { blogs, categories } from "@/data/blog";
import { Link } from "react-router-dom";
export default function UniUnsw() {
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
                  <h1 className="page-header__title">UNSW -The University of New South Wales</h1>
                </div>

                <div>
                  <p className="page-header__text">
                  UNSW university of technology, design and enterprise.
                  UNSW is ranked number one in Australia for five subjects – 
                  Civil & Structural Engineering; Electrical & Electronic Engineering; 
                  Mechanical, Aeronautical & Manufacturing Engineering; Accounting & Finance; and Statistics & Operational Research
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
                <li>Engineering
                 <ul>
                    <li>Civil & Structural Engineering</li>
                    <li>Electrical & Electronic Engineering;</li>
                    <li>Mechanical Engineering;</li>
                    <li>Aeronautical & Manufacturing Engineering</li>
                    <li></li>
                    </ul>
                </li>
                <li>Accounting and Finance</li>
                <li>Business and Management Studies</li>
                <li>Statistics & Operational Researchience</li>
                <li>Art and Design</li>
                {/* <li>Architecture and the Built Environment</li>
                <li>Education</li>
                <li>Fashion Design</li>
                <li>Law</li>
                <li>Media</li> */}
                
              </ul>
              <ul style={{marginLeft:180}}>
                <h5> Graduate Degree Programes</h5>
                <li>Engineering
                 <ul>
                    <li>Civil & Structural Engineering</li>
                    <li>Electrical & Electronic Engineering;</li>
                    <li>Mechanical Engineering;</li>
                    <li>Aeronautical & Manufacturing Engineering</li>
                    <li></li>
                    </ul>
                </li>
                <li>Accounting and Finance</li>
                <li>Business and Management Studies</li>
                <li>Statistics & Operational Researchience</li>
                <li>Art and Design</li>
                {/* <li>Architecture and the Built Environment</li>
                <li>Education</li>
                <li>Fashion Design</li>
                <li>Law</li>
                <li>Media</li> */}
                
           

              </ul>
                <ul style={{marginLeft:200}}>
                <h5> Graduate Degree Programes</h5>
                <li>Engineering
                 <ul>
                    <li>Civil & Structural Engineering</li>
                    <li>Electrical & Electronic Engineering;</li>
                    <li>Mechanical Engineering;</li>
                    <li>Aeronautical & Manufacturing Engineering</li>
                    <li></li>
                    </ul>
                </li>
                <li>Accounting and Finance</li>
                <li>Business and Management Studies</li>
                <li>Statistics & Operational Researchience</li>
                <li>Art and Design</li>
                </ul>

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
                  <p>IELTS (Academic) overall 6.5 (no band less than 6.0)            
                     TOEFL Internet-based Test (iBT) 90 overall</p>
                  {/* {pageItems.map((elm, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                      <div className="blogCard -type-1">
                        <div className="blogCard__image">
                          <img
                            className="w-1/1 rounded-8"
                            src={elm.imageSrc}
                            alt="image"
                          />
                        </div>
                        <div className="blogCard__content mt-20">
                          <div className="blogCard__category">
                            {elm.category.toUpperCase()}
                          </div>
                          <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                            <Link
                              className="linkCustom"
                              to={`/blogs/${elm.id}`}
                            >
                              {elm.title}
                            </Link>
                          </h4>
                          <div className="blogCard__date text-14 mt-5">
                            {elm.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))} */}
                </div>

                <div className="row justify-center pt-60 lg:pt-40">
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
