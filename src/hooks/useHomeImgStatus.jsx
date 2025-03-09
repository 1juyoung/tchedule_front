import { useState, useEffect } from "react";

const useHomeImgStatus = (slides, intervalTime = 4000) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [length, intervalTime]);

  return { current, slides };
};

export default useHomeImgStatus;

