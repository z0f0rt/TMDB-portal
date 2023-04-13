import React from "react";

export const SelectFilters = ({ filter, onClickChanged }) => {
  return (
    <select
      value={filter}
      onChange={(e) => {
        onClickChanged(e.target.value);
      }}
      id="countries"
      className=" mb-10 bg-neutral-300 h-5dark:bg-neutral-700 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value={"popular"}>Текущие популярные</option>
      <option value={"top_rated"}>С самым популярным рейтингои</option>
      <option value={"upcoming"}>Недавно вышедшие</option>
    </select>
  );
};
