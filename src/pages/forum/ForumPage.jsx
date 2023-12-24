import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "./container/Hero";
import Posts from "./container/Posts";

const ForumPage = () => {
  return (
    <MainLayout>
      <section>
        <Hero />
        <Posts />
      </section>
    </MainLayout>
  );
};

export default ForumPage;
