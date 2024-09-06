import React, { useState, useEffect } from "react";
import { blogs, categories } from "@/data/blog";
//import { Link } from "react-router-dom";
export default function UniCork() {
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
                  <h1 className="page-header__title" style={{color:'#395fa9',fontWeight:600}}>University of College Cork</h1>
                </div>

                <div>
                  <p className="page-header__text">
                  Located in Cork city, on the south coast of Ireland, UCC offers students all the advantages of a bustling, vibrant, safe, friendly 
                  and cosmopolitan city. UCC is the ideal university for students looking for a rich academic and extra-curricular experience. 
                  Find out more about our incredible city.
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
                   <li>Nursing</li>
                   <li>Law</li>
                   <li>Agriculture</li>
                   <li>Forestry</li>
                   <li>Pharmacy and Pharmacology</li>
                   <li> Anatomy and Physiology</li>
                   {/* <li>Education</li>
                   <li>Fashion Design</li>
                   <li>Law</li>
                   <li>Media</li> */}
              </ul>
              <ul style={{marginLeft:180}}>
                <h5> Graduate Degree Programes</h5>
                <li>Nursing</li>
                   <li>Law</li>
                   <li>Agriculture</li>
                   <li>Forestry</li>
                   <li>Pharmacy and Pharmacology</li>
                   <li> Anatomy and Physiology</li>
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
                </ul>
               */}
             
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
                  <b>IELTS</b>
                  <p>	7.0 Overall 6.5 Individual Skills (academic version)</p>
                  <b>TOEFL iBT</b>
                  <p>TOEFL iBT	100 Overall Listening 23 Reading 21 Speaking 22 Writing 23 MyBest® scores accepted</p>
                  <b>Cambridge Examinations</b>
                  <p>Cambridge Examinations	C2 Proficiency C1 Advanced 185 overall with no less than 176 in each element of the test.</p>
                  <p></p>
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
