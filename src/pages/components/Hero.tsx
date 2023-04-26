import React from "react";
import logo from "src/pages/assets/logo.png";
import Link from "next/link";

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center my-3">
      <nav className="flex justify-between w-full items-centers">
        <div className="flex justify-start items-center">
          <Link href="/">
            <span className="text-green-600 font-bold text-2xl">QUICKREADS</span>
          </Link>
        </div>
        <button onClick={() => {}} className="black_btn">
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"/>{" "}
        <span className="orange_gradient"> OpenAI GPT-4</span>
      </h1>
      <h3 className="desc">
        QuickReads is an AI-powered article summarizer SAAS business that
        quickly and accurately summarizes lengthy articles, helping users save
        time and effort.
      </h3>
    </header>
  );
};

export default Hero;
