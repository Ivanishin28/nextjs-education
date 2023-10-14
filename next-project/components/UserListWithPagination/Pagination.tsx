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
  const [buttons, setButtons] = useState(new Array<number>());
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
    console.log(array);
    return array;
  };

  const handleClick = (page: number) => {
    router.push(`/users/${page}`);
  };

  return (
    <div className="layout flex">
      {pageCount &&
        range(1, pageSize).map((i: number) => (
          <button key={i} onClick={() => handleClick(i)}>
            {i}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
