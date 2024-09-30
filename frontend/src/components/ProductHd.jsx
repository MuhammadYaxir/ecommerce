import React from "react";
import { TbArrowRight } from "react-icons/tb";

const ProductHd = (product) => {
  return (
    <div className="mx-auto max-w-[1440px] px-6 lg:px-12 flex items-center flex-wrap gap-x-2 text-[16px] font-[500] py-4 capitalize bg-primary rounded-t-xl rounded-tr-xl">
      Home <TbArrowRight />
      {product.name}{" "}
    </div>
  );
};

export default ProductHd;
