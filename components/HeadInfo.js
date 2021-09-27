import React from "react";
import Head from "next/head";

const HeadInfo = ({
  title = "Test",
  keyword = "powered by Next Js",
  contents = "powered by Next Js",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </Head>
  );
};

export default HeadInfo;
