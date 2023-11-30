"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "./spinner";
import { fetchCards } from "../actions/fetch-cards";
import Card from "./card";
const LoadMore = () => {
  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  const [cards, setCard] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(1);

  const { ref, inView } = useInView();

  const loadMoreCards = async () => {
    await delay(2000);
    const nextPage = pageLoaded + 1;
    const newCards = (await fetchCards(nextPage)) ?? [];
    const { cards } = newCards;
    setCard((prevCards) => [...prevCards, ...cards]);
    setPageLoaded(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMoreCards();
    }
  }, [inView]);
  return (
    <>
      <div className="pt-8 flex flex-wrap w-11/12 my-0 mx-auto justify-center">
        {cards ? (
          cards.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4  py-4"
              >
                <Card data={item} />
              </div>
            );
          })
        ) : (
          <div className="text-xl font-bold">No beers available !! </div>
        )}
      </div>

      <div className="flex justify-center items-center" ref={ref}>
        <Spinner />
      </div>
    </>
  );
};

export default LoadMore;
