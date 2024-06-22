import { useEffect, useState } from "react";
import { getProxyUrl } from "../utils/proxy";

const useImageFetch = (src) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!imgSrc) return;

    const img = new Image();

    const handleLoad = () => setLoading(false);

    const handleError = () => {
      if (!error) {
        setImgSrc(getProxyUrl(src));
        setError(true);
      } else {
        handleLoad();
        setImgSrc(null);
      }
    };

    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = imgSrc;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imgSrc, src, error]);

  return { imgSrc, loading, error };
};

export default useImageFetch;
