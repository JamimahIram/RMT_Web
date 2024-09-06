import React, { useState, useEffect } from "react";
import { blogs, categories } from "@/data/blog";
import { Link } from "react-router-dom";
export default function UniMonash() {
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
                  <h1 className="page-header__title">Monash University</h1>
                </div>

                <div>
                  <p className="page-header__text">
                  one of Australia's most prestigious universities. 
                  We offer a range of world class degrees in numerous disciplines.
                  Monash is consistently ranked in the top 100 Universities in the world. 
                  Monash was ranked 42nd in the world by the QS World University Rankings 2024,
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
                    <li>Pharmacy and Pharmacology</li>
                     <li>Engineering</li>
                     <li>Engineering – Chemical</li>
                     <li>Computer Science</li>
                     <li>Materials Science</li>
                     <li>Performing Arts (equal first)</li>
                     <li>Statistics and Operational Research</li>
                   
              </ul>
              <ul style={{marginLeft:180}}>
                <h5> Graduate Degree Programes</h5>
                <h6>Renowned for our expertise in areas</h6>
                     <li>Pharmacy and Pharmacology</li>
                     <li>Engineering</li>
                     <li>Engineering – Chemical</li>
                     <li>Computer Science</li>
                     <li>Materials Science</li>
                     <li>Performing Arts (equal first)</li>
                     <li>Statistics and Operational Research</li>
              </ul>
                <ul style={{marginLeft:200}}>
                <h5>Doctorate Degree Programes</h5>
                <h6>Renowned for our expertise in areas</h6>
                     <li>Pharmacy and Pharmacology</li>
                     <li>Engineering</li>
                     <li>Engineering – Chemical</li>
                     <li>Computer Science</li>
                     <li>Materials Science</li>
                     <li>Performing Arts (equal first)</li>
                     <li>Statistics and Operational Research</li>
                </ul>
            </div>

            <div className="tabs__content pt-40 js-tabs-content">
              <div className="tabs__pane -tab-item-1 is-active">
                <div className="row y-gap-30">
                  <h4>English Language Requirements</h4>
                  <p>"Academic IELTS
                      IELTS Online
                      Internet-based TOEFL
                      TOEFL iBT Paper Edition
                      Pearson Test of English (Academic)
                      C1 Advanced
                      C2 Proficiency
                    STAT English"</p>
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
