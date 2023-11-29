"use client";
import { useState, useEffect } from "react";
import { fetchCards } from "./actions/fetch-cards";
import Card from "./components/card";
import LoadMore from "./components/loadMore";
import SearchBar from "./components/searchBar";

export default function Home() {
  const [cards, setCards] = useState([]);

  const fetchInitialCards = async () => {
    try {
      const data = await fetchCards(1);
      const { cards } = data;
      setCards(cards);
    } catch (error) {
      console.error("Error fetching initial cards:", error);
    }
  };

  useEffect(() => {
    fetchInitialCards();
  }, []);

  const handleSearch = async (searchTerm) => {
    try {
      // const response = await fetch(
      //   `https://api.magicthegathering.io/v1/cards?name=${searchTerm}`
      // );
      const response = await fetch(
        `https://api.magicthegathering.io/v1/cards?name=${searchTerm}&page=1&pageSize=20`
      );
      const data = await response.json();
      const { cards } = data;
      setCards(cards);
      console.log(searchTerm);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setCards([]);
    }
  };

  return (
    <>
      <header className="w-11/12 my-0 mx-auto pl-4 pt-4">
        <div className="w-[500px]">
          <SearchBar handleSubmit={handleSearch} />
        </div>
      </header>

      <div className="pt-8 flex flex-wrap w-11/12 my-0 mx-auto justify-center">
        {cards &&
          cards.map((item, index) => {
            return (
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4  py-4 ">
                <Card key={index} data={item} />
              </div>
            );
          })}
      </div>
      <LoadMore />
    </>
  );
}
