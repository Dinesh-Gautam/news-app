import React from "react";
import { FALLBACK_IMAGE_URL } from "../../constants";
import useImageFetch from "../../hooks/useImageFetch";
import Skeleton from "../Skeleton";

const ProxyImage = ({ src, alt }) => {
  const { imgSrc, loading } = useImageFetch(src);

  if (loading) return <Skeleton.Image />;

  return imgSrc ? (
    <img loading="lazy" src={imgSrc} alt={alt} />
  ) : (
    <img loading="lazy" src={FALLBACK_IMAGE_URL} alt="fallback icon" />
  );
};

export default ProxyImage;
