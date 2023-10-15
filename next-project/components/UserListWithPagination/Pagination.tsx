import { useEffect, useState } from "react";
import { UsersPaginationModel } from "../../models/UsersPaginationModel";
import { useRouter } from "../../node_modules/next/navigation";

const Pagination = ({
  currentPage,
  pageSize,
  pageCount,
}: {
  pageSize: number;
  currentPage: number;
  pageCount: number;
}) => {
  const router = useRouter();
  const range = (from: number, to: number) => {
    if (to < from) {
      return [];
    }
    const length = to - from + 1;
    const array = Array.from(Array(length));
    array.forEach(
      (value: number, index: number, array: number[]) =>
        (array[index] = from + index)
    );
    return array;
  };

  const handleClick = (page: number) => {
    router.push(`/users/${page}`);
  };

  const applyStyleForButton = (page: number) => {
    if (page == currentPage) {
      return "text-2xl text-black-900 text-bold mr-2";
    } else {
      return "text-2xl text-slate-500 mr-2";
    }
  };

  return (
    <div className="flex justify-center mt-2">
      {pageCount &&
        range(1, pageSize).map((i: number) => (
          <button
            key={i}
            className={applyStyleForButton(i)}
            onClick={() => handleClick(i)}
          >
            {i}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
