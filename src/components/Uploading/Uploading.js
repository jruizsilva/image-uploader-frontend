import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./Uploading.module.css";

export default function Uploading() {
  const { loading, image } = useSelector((state) => state.image);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading === false && image) {
      navigate("/success");
    }
    if (loading === false && !image) {
      navigate("/");
    }
  }, [loading, image]);

  return (
    <div className={style.container}>
      <h4 className={style.title}>Uploading...</h4>
    </div>
  );
}
