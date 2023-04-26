import Image from "next/image";
import React, { useState } from "react";
import link from "src/pages/assets/link.svg";

interface Article {
  url: string;
  summary: string;
}

const Demo = () => {
  const [article, setArticle] = useState<Article>({
    url: "",
    summary: "",
  });
  return (
    <>
      <form className="relative w-[70%]" onSubmit={() => {}}>
        <Image src={link} alt="link" className="absolute left-1.5 w-6 my-3" />
        <input className="url_input" placeholder="Enter an URL" />
        <button 
          type="submit"
          className="submit_btn">
              ⏎
        </button>
      </form>
    </>
  );
};

export default Demo;
