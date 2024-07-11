import React from "react";
import Content from "../containers/Content";
import Profile from "../containers/Profile";

const Page = () => {
  return (
    <>
      <article className="flex flex-col items-center">
        <Profile />
        <Content />
      </article>
    </>
  );
};

export default Page;
