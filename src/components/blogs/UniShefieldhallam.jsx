import React, { useState, useEffect } from "react";
import { blogs, categories } from "@/data/blog";
import { Link } from "react-router-dom";
export default function UniShefieldhallam() {
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
                  <h1 className="page-header__title">University of Sheffield Hallam</h1>
                </div>

                <div>
                  <p className="page-header__text">
                 Sheffield Hallam have been awarded a maximum five stars in the 2021 QS Stars excellence rating, achieving top marks in almost every category 
                  - including teaching, employability, academic development, facilities, and innovation and inclusivity.
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
                <li>Sports</li>
                <li>Business</li>
                <li>Computer Science</li>
                <li>Nursing</li>
            </ul>
              <ul style={{marginLeft:180}}>
                <h5> Graduate Degree Programes</h5>
                <li>Sports</li>
                <li>Business</li>
                <li>Computer Science</li>
                <li>Nursing</li>
              </ul>
              <ul style={{marginLeft:200}}>
                <h5>Doctorate Degree Programes</h5>
                <li>Sports</li>
                <li>Business</li>
                <li>Computer Science</li>
                <li>Nursing</li>
              </ul>
            </div>

            <div className="tabs__content pt-40 js-tabs-content">
              <div className="tabs__pane -tab-item-1 is-active">
                <div className="row y-gap-30">
                <h6>English Language Requirements Undergraduate</h6>
                  <p>"IELTS (for UKVI) Academic*	IELTS for UKVI* 6.0                     
                    TOEFL internet based (including TOEFL iBT at Home Edition)	79 overall score"</p>
                
                  <h6>English Language Requirements Postgraduate</h6> 
                  <p>Postgraduate applicants are required to achieve Pearson Test of English -
                     Academic 	52 overall score Cambridge IGCSE English as a First Language Grade C.</p>
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
