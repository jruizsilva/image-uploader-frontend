import React from "react";
import style from "./App.module.css";
import Uploader from "../Uploader/Uploader";
import UploadedSuccess from "../UploadSuccess/UploadSuccess";
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Uploading from "../Uploading/Uploading";

function App() {
  const navigate = useNavigate();
  const { image } = useSelector((state) => state.image);
  return (
    <>
      <img
        src="./home.svg"
        alt="Home"
        className={style.home}
        onClick={() => navigate("/")}
      />
      <div className={style.container}>
        <Routes>
          <Route exact path="/" element={<Uploader />} />
          <Route exact path="/uploading" element={<Uploading />} />
          <Route
            exact
            path="/success"
            element={
              image ? <UploadedSuccess /> : <Navigate to="/" replace={true} />
            }
          />
        </Routes>
      </div>
      <footer className={style.footer}>
        <span className={style.footer_created}>created by</span>{" "}
        <span className={style.footer_user}>Jonathan Ruiz</span> -{" "}
        <span className={style.footer_page}>devChallenges.io</span>
      </footer>
    </>
  );
}

export default App;
