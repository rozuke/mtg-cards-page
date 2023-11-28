"use client";
import React, { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    handleSubmit(value); // Llamar a la función de búsqueda con el valor actual del input
  };

  return (
    <>
      <form className="">
        <input
          className="w-full px-3 py-2 font-semibold placeholder-gray-500 rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          type="text"
          value={name}
          placeholder="Search..."
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default SearchBar;
