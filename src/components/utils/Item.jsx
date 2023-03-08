import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const Item = ({ id, color, shadow, title, text, img, btn, rating, price }) => {
  
  return (
    <>
      <div className={`relative bg-gradient-to-b ${color} ${shadow}`}>
        <div className="">
          <h1 className="">{title}</h1>
          <p>{text}</p>
          <div className="">
            <div className="">
              <h1 className="">{price}</h1>
            </div>
            <div>
              <StarIcon className="icon-style text-slate-900" />{" "}
              <h1>{rating}</h1>
            </div>
          </div>
        </div>
        <div>
          <button type="button" className="">
            <ShoppingBagIcon className="icon-style text-slate-900" />
          </button>
          <button type="button" className="">
            {btn}
          </button>
        </div>
      </div>
      <div>
        <img src={img} alt="img/item" className="" />
      </div>
    </>
  );
};

export default Item;
