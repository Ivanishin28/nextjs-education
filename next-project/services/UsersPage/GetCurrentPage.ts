const tryParseInt = (str: string): number | null => {
  const res = Number.parseInt(str);
  if (!res || res == Number.NaN) {
    return null;
  } else {
    return res;
  }
};

const GetCurrentPage = ({
  page_num,
}: {
  page_num: Array<string>;
}): number | null => {
  if (page_num && page_num.length > 0) {
    const page = tryParseInt(page_num[0]);
    return page;
  }
  return null;
  // const paramsPageNum = params?.page_num as Array<string>;
  // let pageNumber: number | null = 0;
  // if (paramsPageNum && paramsPageNum.length > 0) {
  //   pageNumber = tryParseInt(paramsPageNum[0]);
  // } else if (searchParams?.page) {
  //   pageNumber = tryParseInt(searchParams.page);
  // }

  // return pageNumber;
};

export default GetCurrentPage;
