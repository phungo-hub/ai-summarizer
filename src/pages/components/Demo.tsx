import Image from "next/image";
import React, { useState } from "react";
import link from "src/pages/assets/link.svg";
import loader from "src/pages/assets/loader.svg";
import { useLazyGetSummaryQuery } from "../../services/article";

interface Article {
  url: string;
  summary: string;
}

const Demo = () => {
  const [article, setArticle] = useState<Article>({
    url: "",
    summary: "",
  });
  const [articles, setArticles] = useState<Article[]>([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { data } = await getSummary({
      articleUrl: article.url,
    });

    if (data?.summary) {
      const newArticle = {
        ...article,
        summary: data.summary,
      };

      setArticle(newArticle);
    }

    console.log(data.summary);
  };
  return (
    <>
      <div className="mt-10 w-full max-w-xl">
        <form className="relative w-full mx-auto" onSubmit={handleSubmit}>
          <Image src={link} alt="link" className="absolute left-1.5 w-6 my-3" />
          <input
            className="url_input"
            placeholder="Enter an URL"
            onChange={(e) =>
              setArticle({
                ...article,
                url: e.target.value,
              })
            }
          />
          <button type="submit" className="submit_btn">
            ⏎
          </button>
        </form>
        <div className="max-w-full my-10 flex items-center">
          {isFetching ? (
            <div className="w-full flex flex-col justify-center items-center">
              <Image src={loader} alt="loading" />
              <div>Please wait... It usually takes 10 to 15 seconds^^</div>
            </div>
          ) : (
            article.summary && (
              <div className="flex flex-col justify-center">
                <div className="font-bold text-xl text-gray-700">
                  Article <span className="">Summary</span> 
                </div>
                <div className="summary_box">
                  {article.summary}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Demo;
