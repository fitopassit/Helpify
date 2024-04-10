"use client";

import { useState } from "react";

import { TransformCodex } from "../../utils/transformCodex";

export const TransformCodexComponent = () => {
  const [value, setValue] = useState("");
  const transform = new TransformCodex();
  const copyContent = async () => {
    try {
      const data =
        transform.decodeTransform["transformStringToArticles"](value)[0];
      await navigator.clipboard.writeText(
        JSON.stringify({
          article: data.article,
          titleArticle: data.titleArticle,
          punishment: data.punishment,
          keyword: data.keyword,
          exception: data.exception,
          note: data.note,
          explanation: data.explanation,
        }),
      );
      console.log(data);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const data = transform.decodeTransform["criminalCode"](value);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div style={{ display: "flex" }}>
          <textarea
            style={{ width: 500, height: 500 }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={copyContent}>copy</button>
        </div>
      )}
    </>
  );
};
