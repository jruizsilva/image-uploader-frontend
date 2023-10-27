import React from "react";
import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import style from "./LinkImage.module.css";

const notify = () => toast.success("Copied");

export default function LinkImage() {
  const { image } = useSelector((state) => state.image);

  return (
    <div className={style.container}>
      <p className={style.link}>
        {image
          ? image.url
          : "https://images.yourdomain.com/photo-1496950866446-325 31231232131312..."}
      </p>
      <CopyToClipboard text={image.url}>
        <button className={style.button} onClick={notify}>
          Copy Link
        </button>
      </CopyToClipboard>
      <Toaster />
    </div>
  );
}
