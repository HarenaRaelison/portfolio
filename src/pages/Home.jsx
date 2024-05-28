import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import "./Home.css";
import me from "../assets/me.jpg";

function Home() {
  const [animations, setAnimations] = useState({
    hello: false,
    iAm: false,
    name: false,
    info: false,
  });

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimations((prevState) => ({ ...prevState, hello: true }));
    }, 500);
    const timer2 = setTimeout(() => {
      setAnimations((prevState) => ({ ...prevState, iAm: true }));
    }, 1000);
    const timer3 = setTimeout(() => {
      setAnimations((prevState) => ({ ...prevState, name: true }));
    }, 1500);
    const timer4 = setTimeout(() => {
      setAnimations((prevState) => ({ ...prevState, info: true }));
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="contenaire">
      <div className="left">
        <Typography
          variant="h1"
          color="initial"
          className={animations.hello ? "fade-in" : ""}
        >
          Hello !
        </Typography>
        <Typography
          variant="h2"
          color="initial"
          className={animations.iAm ? "fade-in" : ""}
        >
          I'm
        </Typography>
        <Typography
          variant="h3"
          color="initial"
          className={animations.name ? "fade-in" : ""}
        >
          RAELISON Harena Andriahaganirina
        </Typography>
        <Typography
          variant="h6"
          color="initial"
          className={animations.info ? "fade-in" : ""}
        >
          Passionate about software development and technological innovation, I
          would like to share my knowledge and skills in computer science to
          create a positive impact within society
        </Typography>
      </div>
      <div className="right">
        <img src={me} alt="" id="me" />
      </div>
    </div>
  );
}

export default Home;
