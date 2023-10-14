const tryParseInt = (str: string): number | null => {
  const res = Number.parseInt(str);
  if (!res || res == Number.NaN) {
    return null;
  } else {
    return res;
  }
};

const GetCurrentPage = ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: { page: any };
}): number | null => {
  const paramsPageNum = params?.page_num as Array<string>;
  let pageNumber: number | null = 0;
  if (paramsPageNum && paramsPageNum.length > 0) {
    pageNumber = tryParseInt(paramsPageNum[0]);
  } else if (searchParams?.page) {
    pageNumber = tryParseInt(searchParams.page);
  }

  return pageNumber;
};

export default GetCurrentPage;
