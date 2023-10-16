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
};

export default GetCurrentPage;
