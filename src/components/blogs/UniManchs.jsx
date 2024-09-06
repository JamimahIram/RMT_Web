import React, { useState, useEffect } from "react";
import { blogs, categories } from "@/data/blog";
import { Link } from "react-router-dom";
export default function UniManchs() {
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
                  <h1 className="page-header__title">University of Manchester</h1>
                </div>

                <div>
                  <p className="page-header__text">
                  The University of Manchester is one of the 40 most international universities in the world.
                  Lots of overseas students come to the exciting, friendly city of Manchester to live and learn at this institution. 
                  Its history goes back to 1824 and the creation of UMIST (the University of Manchester Institute of Science and Technology), 
                  but it has since merged with the Victoria University of Manchester to become the university students know today.
                  The University of Manchester is a globally renowned institution known for its research, teaching, and innovation excellence. 
                  Ranked 28th in the world and 6th in the UK by the QS World University Rankings 2023, it has consistently achieved high rankings.
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
                <li>Computer Science</li>
                <li>Condensed matter physics</li>
                <li>BSc Biology</li>
                <li>Business Management</li>
                <li>Arab World Studies</li>
                <li>Biotechnology</li>
                <li>Humanities</li>
                <li>Chemistry</li>
                <li>Asian Studies</li>
               
                
              </ul>
              <ul style={{marginLeft:180}}>
                <h5> Graduate Degree Programes</h5>
                <li>Computer Science</li>
                <li>Condensed matter physics</li>
                <li>BSc Biology</li>
                <li>Business Management</li>
                <li>Arab World Studies</li>
                <li>Biotechnology</li>
                <li>Humanities</li>
                <li>Chemistry</li>
                <li>Asian Studies</li>              </ul>
              <ul style={{marginLeft:200}}>
                <h5>Doctorate Degree Programes</h5>
                  <li>Computer Science</li>
                  <li>Condensed matter physics</li>
                  <li>BSc Biology</li>
                  <li>Business Management</li>
                  <li>Arab World Studies</li>
                  <li>Biotechnology</li>
                  <li>Humanities</li>
                  <li>Chemistry</li>
                  <li>Asian Studies</li>
              </ul>
            </div>

            <div className="tabs__content pt-40 js-tabs-content">
              <div className="tabs__pane -tab-item-1 is-active">
                <div className="row y-gap-30">
                  <h4>English Language Requirements</h4>
                  <p>IELTS overall score 6.0 with no less then 5.5                        
                     TOEFL iBT (note, we do not accept TOEFL iBT Home) 72 LanguageCert SELT (B2 Test)	100–128                                     
                    LanguageCert SELT (C1 Test) 128</p>
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
