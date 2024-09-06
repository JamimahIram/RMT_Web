import React from "react";

import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">About Us</h1>
                </div>

                <div>
                  <p className="page-header__text">
                  Founded in 1985, RMT Enterprise is one of the first organizations of its kind providing educational consultancy services in Pakistan. 
                  Twenty-four years from its establishment, RMT’s owner feels she has been able to maintain the standards of working that were laid out at its inception. 
                  RMT Enterprise facilitates students from Pakistan who aspire to study abroad at some of the best educational Universities, in Australia, Canada, New Zealand 
                  and the United Kingdom, which are placed very high in the world ranking!The facilities provided to students at RMT can be viewed at two levels; the corporate 
                  level and the office level. At the corporate level,we organize educational fairs, information seminars and face-to-face interview sessions with University 
                  representatives for on-spot provisional admissions to Universities, while at the office level encompasses individual counselling, career advice and admission processing. 
                  RMT regularly arranges visits for the representatives of the universities that we work with to come to Pakistan and provide local students a chance to 
                  interact with the University’s staff and have their own ‘mini’ international experience which can help them decide where they wish to go for higher education. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50 justify-between items-center">
            <div className="col-lg-6 pr-50 sm:pr-15">
              <div className="composition -type-8">
                <div className="-el-1">
                  <img src="/assets/img/about-1/1.png" alt="image" />
                </div>
                <div className="-el-2">
                  <img src="/assets/img/about-1/2.png" alt="image" />
                </div>
                <div className="-el-3">
                  <img src="/assets/img/about-1/3.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <h2 className="text-30 lh-16">
                Welcome to RMT Enterprise, Students Placement Services with Experience
              </h2>
              <p className="text-dark-1 mt-30">
              RMT’s biggest asset, apart from the Chief Executive’s vision,
              is the dedicated and highly-trained staff that offer student recruitment services in our offices in Karachi, Lahore and Islamabad
              </p>
              <p className="pr-50 lg:pr-0 mt-25">
              We at RMT believe that different students have different learning needs and thus make every effort to place them at 
              suitable universities, keeping this belief in mind
              </p>
              <div className="d-inline-block">
                <Link
                  to="/signup"
                  className="button -md -purple-1 text-white mt-30"
                >
                  Feedback
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
