import React, { useEffect, useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { fetchData } from "../service";

const Search = () => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [data, setData] = useState(null);

  const searchRecipe = (searchQuery) => {
    fetchData(searchQuery).then((response) => {
      setData(response);
    });
  };

  useEffect(() => {
    if (searchedTerm) {
      searchRecipe(searchedTerm);
    }
  }, [searchedTerm]);

  const renderRecipeCards = () => {
    if (!data) return null;
    return data.hits.map((item, index) => (
      <div
        key={index}
        className="w-full md:w-1/2 lg:w-[24%] p-4"
      >
        <div className="h-[400px] bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={item.recipe.image}
            alt={item.recipe.label}
            className="w-full h-48 object-cover object-center"
          />
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {item.recipe.label}
            </h2>
            <h3 className="text-gray-600 text-sm">by {item.recipe.source}</h3>
          </div>
          <div className="px-6 py-4">
            <a
              href={item.recipe.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Recipe
            </a>
          </div>
          <div className="px-6 py-4 flex justify-between">
            <div className="text-yellow-500">
              Rating: {item.recipe.rating || "N/A"}
            </div>
            <div className="text-gray-600">
              Reviews: {item.recipe.reviews || 0}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="relative w-full">
      
         
        <div className="h-1/2 bg-black pb-3 box-border">
        <div className="pl-52 pr-52 pt-8 flex flex-col box-border gap-3">
          <div className=" bg-white w-[100%] pb-2 p-4 box-border  ">
            {/* search section */}
            <div className="border-b-[6px]  border-[#892074] flex gap-2 w-full justify-around">
              <label htmlFor="" className="font-cabin text-xl font-semibold  ">
                I WANT TO MAKE
              </label>
              <ul className="flex w-[4/5]  gap-4 justify-around p-1 box-border">
                <li
                  className="text-[#787777]"
                  onClick={() => {
                    searchRecipe(searchedTerm);
                  }}
                >
                  <SearchIcon />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder=""
                    className="w-[800px] focus:outline-none font-cabin text-xl"
                    onChange={(e) => {
                      setSearchedTerm(e.target.value);
                    }}
                    value={searchedTerm}
                  />
                </li>
                <div className="flex">
                  <li className="text-[#787777]">clear</li>
                  <li className="text-[#787777]">
                    <X />
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <p className="font-cabin text-white">Your recent searches</p>
          <p className="font-cabin text-[#77E2E1]">Burger | Pizza</p>
        </div>
      </div>




      
      <div className="pl-52 pr-52">
        <div className="w-full h-1/3 text-6xl font-bold p-6 pl-0">
          {data ? `${data.hits.length} Results` : ""}
        </div>

        <div className="bg-[#f0f0f0] min-h-[70vh] flex flex-wrap justify-center items-start">
          {renderRecipeCards()}
        </div>
      </div>
    </div>
  );
};

export default Search;
