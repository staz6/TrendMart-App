import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import SkeletonLoader from "./SkeletonLoader";

type Category = string;

const Categories: React.FC = () => {
  const fetchCategories = async (): Promise<Category[]> => {
    const { data } = await axios.get<Category[]>(
      "https://fakestoreapi.com/products/categories",
    );
    return data;
  };

  const {
    data: categories,
    isLoading,
    error,
  } = useQuery<Category[]>({
    queryKey: ["Categories"],
    queryFn: fetchCategories,
  });

  if (isLoading) {
    return (
      <>
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonLoader key={index}>
            <div
              data-testid="CategorySkeleton"
              className="h-5 w-3/4 bg-gray-300 rounded-lg"
            />
          </SkeletonLoader>
        ))}
      </>
    );
  }

  if (error)
    return <p className="text-2xl text-button2">Error loading categories</p>;

  return (
    <>
      {categories?.map((category, index) => (
        <NavLink
          key={index}
          to={`/categoryProducts/${category}`}
          className={({ isActive }) =>
            `${isActive ? "font-semibold" : "unselectedCategoryClass"} capitalize text-black transition-all duration-200 text-opacity-90 hover:text-opacity-60`
          }
        >
          {category}
        </NavLink>
      ))}
      <NavLink
        className="text-black text-opacity-90 hover:text-opacity-60"
        to="/"
      >
        Sports & Outdoor
      </NavLink>
      <NavLink
        className="text-black text-opacity-90 hover:text-opacity-60"
        to="/"
      >
        Sports & Outdoor
      </NavLink>
      <NavLink
        className="text-black text-opacity-90 hover:text-opacity-60"
        to="/"
      >
        Sports & Outdoor
      </NavLink>
    </>
  );
};

export default Categories;
