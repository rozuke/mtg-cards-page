"use client";
import React, { useState } from "react";
import CardBack from "./cardBack";
import Image from "next/image";
const Card = ({ data }) => {
  const dummyData = [
    {
      image: "/icons/mana.png",
      title: "Mana cost",
      value: "40",
    },
    {
      image: "/icons/cmc.png",
      title: "C.M.C",
      value: "40",
    },
    {
      image: "/icons/gem.png",
      title: "Rarity",
      value: "40",
    },
    {
      image: "/icons/sword.png",
      title: "Power",
      value: "40",
    },
    {
      image: "/icons/shield.png",
      title: "Toughness",
      value: "40",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group [perspective:500px] w-[238px] h-[325px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`h-full w-full border-[12px] rounded-xl border-dark-yellow overflow-hidden
      relative transition-all duration-500 [transform-style:preserver-3d] group-hover:[transform:rotateY(180deg)]`}
      >
        <div className="absolute inset-0 h-[310px] w-[233px]">
          <img
            src="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129465&type=card"
            alt="Imagen"
            className=" h-auto object-cover -m-1 sm:max-w-xs shadow-black/40"
          />
        </div>
        <div
          className={`absolute bg-black/80 inset-0 h-full w-full [transform:rotateY(180deg)] ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="h-full w-full">
            <div className="border-4 border-black bg-gradient-card h-full">
              <div className="m-2 text-soft-green">
                <div className="text-center">
                  <h3 className="font-bold pt-2">Ancestor's Chosen</h3>
                  <h4 className="text-sm pt-3 italic">
                    “The will of all, by my hand done.”
                  </h4>
                </div>
                <div className="flex text-[12px]  ">
                  <div className="w-full ">
                    {dummyData &&
                      dummyData.map((item) => {
                        return (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center my-2 font-semibold">
                              <figure>
                                <Image
                                  src={item.image}
                                  width={25}
                                  height={25}
                                  alt={item.title}
                                />
                              </figure>
                              <figcaption className="ml-2">{`${item.title} :`}</figcaption>
                            </div>
                            <p className="text-right my-2 inline text-white">{item.value}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
