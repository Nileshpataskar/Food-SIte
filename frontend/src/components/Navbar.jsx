import React from "react";
import "../css/Navbar.css";
import { Bookmark, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const hoverItems = [
    "Breakfast and brunch",
    "Lunch Recipe",
    "Dinner Recipe",
    "Side Dish Recipe ",
  ];

  return (
    <>
      <div className="flex bg-black items-center justify-center sm:w-full  ">
        <div className=" w-10/12  flex items-center h-20  justify-between">
          {/* logo */}
          <Link to="/">
            <h1 className="text-amber-50 text-6xl font-asap ">
              Food <span className="text-yellow-300"> .</span>
            </h1>
          </Link>

          {/* routes */}
          <div className="res">
            <ul className="flex text-white gap-8 text-2xl font-cabin  ">
              <li className="group relative">
                Recipe
                <ul className="absolute left-0 hidden mt-2 space-y-2 bg-black w-56 text-white group-hover:block z-20">
                  {hoverItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </li>
              <li className="group relative">
                Popular
                <ul className="absolute left-0 hidden mt-2 space-y-2 bg-black w-56 text-white group-hover:block z-20">
                  {hoverItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </li>
              <li>Meat & Seafood</li>
              <li>Healthy & Diet</li>
              <li>Holidays</li>
              <li>Cuisine</li>
              <li>Seasonal</li>
            </ul>
          </div>

          <div className="flex gap-6">
       <Link to='/search'>     <Search size={32} color="#ffffff" /></Link>
            <Bookmark size={32} color="#ffffff" />
            <User size={32} color="#ffffff" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
