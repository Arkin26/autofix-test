import React from "react";

const merchItems = [
  {
    name: "ARRIVAL 7 JERSEY",
    price: "$60.00",
    image: "/T-SHIRT.jpg",
    url: "https://arrivalseven.printify.me/product/19618584/arrival-seven-jersey-wav",
  },
  {
    name: "ARRIVAL 7 ESPORTS JERSEY",
    price: "$55.00",
    image: "/T-SHIRT-2.jpg",
    url: "https://arrivalseven.printify.me/product/18708435/arrival-seven-esports-jersey",
  },
  {
    name: "ARRIVAL 7 MOUSEPAD",
    price: "$30.00",
    image: "/MOUSEPAD-1.jpg",
    url: "https://arrivalseven.printify.me/product/19014751/arrival-seven-mousepad",
  },
  {
    name: "ARRIVAL 7 HOODIE",
    price: "$50.00",
    image: "/HOODIE.jpg",
    url: "https://arrivalseven.printify.me/product/19011484/unisex-heavy-blend-hooded-sweatshirt-arrival-seven",
  },
];

export default function MerchShowcase() {
  return (
    <div className="bg-black text-white py-12 px-4 md:px-12">
      <div className="flex justify-between items-center mb-10">
        <h1
          className="text-6xl font-black DrukWide"
          style={{ color: "#4DA0C7" }}
        >
          MERCH
        </h1>
        <a
          href="https://arrivalseven.printify.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm font-bold tracking-widest no-underline flex items-center gap-2"
        >
          SHOP NOW <span className="text-2xl">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {merchItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center block hover:opacity-90 transition duration-200"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto mx-auto mb-4"
            />
            <p className="uppercase font-bold text-sm tracking-wider">
              {item.name}
            </p>
            <p className="text-white font-semibold text-lg mt-1">
              {item.price}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
