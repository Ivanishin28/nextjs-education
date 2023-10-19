const delay = (ms: number, isRandom: boolean = false) => {
  const toWait = ms * (isRandom ? Math.random() : 1);
  return new Promise((res) => setTimeout(res, toWait));
};

export default delay;
