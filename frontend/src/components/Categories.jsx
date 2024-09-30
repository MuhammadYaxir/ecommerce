import React from "react";
import { categories } from "../assets/data";
const Categories = ({ category, setCategory }) => {
  return (
    <section
      id="categories"
      className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-16 "
    >
      <div className="flex items-center justify-between pb-20">
        <h4 className="text-4xl font-extrabold leading-none font-ace flex flex-col ">
          <span className="text-[16px] font-[500]">select</span>
          categories
        </h4>
      </div>
      <div className="flex items-center justify-start gap-12 flex-wrap ">
        {categories.map((item) => (
          <div
            id={item.name}
            key={item.name}
            className="flex items-center justify-center flex-col"
            onClick={() => setCategory((prev) => (prev=== item.name ? "All": item.name))}
          >
            <div className="p-8 rounded-2xl cursor-pointer bg-primary">
              <img
                src={item.image}
                alt="categoryImg"
                height={155}
                width={155}
                className="object-cover h-32"
              />
            </div>
            <h4
              className={`mt-6 text-[18px] font-[600] ${
                category === item.name
                  ? "border-b-4 border-secondary"
                  : " border-b-4 border-white"
              }`}
            >
              {item.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
