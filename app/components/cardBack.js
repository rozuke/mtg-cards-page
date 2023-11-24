import Image from "next/image";
import React from "react";

const CardBack = () => {
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
    {
      image: "/icons/artist.png",
      title: "Artist",
      value: "Rodrigo Sulca",
    },
  ];
  return (
    <div
      className={`max-w-xl mx-auto border-[12px] rounded-xl border-dark-yellow overflow-hidden`}
    >
      <div className="max-w-[233px] w-full h-full border-4 border-black bg-gradient-card">
        <div className="m-2 text-soft-green">
          <div className="text-center">
            <h3 className="font-bold pt-2">Ancestor's Chosen</h3>
            <h4 className="text-sm pt-3">
              “The will of all, by my hand done.”
            </h4>
          </div>
          <div className="flex text-sm">
            <div className="w-7/12 ">
              {dummyData &&
                dummyData.map((item) => {
                  return (
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
                  );
                })}
            </div>
            <div className="w-5/12 ">
              {dummyData &&
                dummyData.map((item) => <p className="text-right my-2">{item.value}</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBack;
