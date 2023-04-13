import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
export const SearchBar = ({ searchValue, onChangeSearchValue }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    onChangeSearchValue(value);
  }, [value]);

  return (

      <div className="flex justify-end mr-3 mt-3 mb-3">
        <label
          className="grid grid-cols-[minmax(80px,_200px)_16px] items-center
                    px-3 py-1 rounded bg-neutral-300 dark:bg-neutral-700"
        >
          <input
            type="text"
            className="outline-none px-2 py-1 text-sm text-neutral-900 bg-neutral-300
                  dark:bg-neutral-700 dark:text-neutral-100 sm:text-base"
            value={searchValue}
            onChange={(e) => setValue(e.target.value)}  
            placeholder="поиск"
          />
          <FiSearch />
        </label>
      </div>

  );
};
