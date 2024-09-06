import BlogsOne from "@/components/blogs/BlogsOne";
import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "RMIT Univerrsity || Australia",
  description:
    "RMIT is a global university of technology, design and enterprise",
};

export default function RMIT() {
  return (
    <div className="main-content  ">
      <MetaComponent meta={metadata} />
      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

        <BlogsOne />

        <FooterOne />
      </div>
    </div>
  );
}
