const wait = (timeToDelay) => {
  return new Promise((resolve) => setTimeout(resolve, timeToDelay));
};

export default wait;
