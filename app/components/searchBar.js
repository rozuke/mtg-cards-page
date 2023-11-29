"use client";
import Image from "next/image";
import React, { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    handleSubmit(name.trim());
  };

  return (
    <form className="flex items-center justify-center">
      <input
        className="w-full px-3 py-2 font-semibold placeholder-gray-500 rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
        type="text"
        value={name}
        placeholder="Search..."
        onChange={handleChange}
      />
      <button
        type="submit"
        className="ml-2 p-3 bg-gray-200 rounded-full focus:outline-none"
        onClick={handleForm}
      >
        <Image src={"/icons/search.svg"} width={20} height={20} />
      </button>
    </form>
  );
};

export default SearchBar;
