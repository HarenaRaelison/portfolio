import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Python from "../assets/python.png";
import js from "../assets/js.png";
import java from "../assets/java.png";
import laravel from "../assets/laravel.png";
import pg from "../assets/pg.png";
import reactImg from "../assets/react.png";
import spring from "../assets/spring.png";
import "./Skills.css";

const Skills = () => {
  const [percentages, setPercentages] = useState(Array(7).fill(0));

  const languages = [
    { name: "Python", percentage: 56, image: Python },
    { name: "Java", percentage: 50, image: java },
    { name: "React", percentage: 50, image: reactImg },
    { name: "PostgreSQL", percentage: 60, image: pg },
    { name: "Spring", percentage: 40, image: spring },
    { name: "JavaScript", percentage: 55, image: js },
    { name: "Laravel", percentage: 45, image: laravel },
  ];

  useEffect(() => {
    const intervals = languages.map((_, index) =>
      setInterval(() => {
        setPercentages((prevPercentages) => {
          const newPercentages = [...prevPercentages];
          if (newPercentages[index] < languages[index].percentage) {
            newPercentages[index] += 1;
          }
          return newPercentages;
        });
      }, 30)
    );

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" color="textPrimary" gutterBottom>
        Skills
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography variant="h3" color="initial">
          Hard-Skills
        </Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {languages.map((language, index) => (
            <Paper
              key={language.name}
              elevation={3}
              style={{
                position: "relative",
                width: "120px",
                height: "120px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#e0e0e0",
              }}
            >
              <img
                src={language.image}
                alt={`${language.name} Logo`}
                style={{ width: "48px", height: "48px", zIndex: 1 }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  transform: `translateY(${100 - percentages[index]}%)`,
                }}
              >
                <svg
                  viewBox="0 0 500 500"
                  preserveAspectRatio="none"
                  className="wave"
                >
                  <path
                    d="M0,200 C150,300 350,100 500,200 L500,500 L0,500 Z"
                    className="wave1"
                  />
                  <path
                    d="M0,250 C150,350 350,150 500,250 L500,500 L0,500 Z"
                    className="wave2"
                  />
                  <path
                    d="M0,300 C150,400 350,200 500,300 L500,500 L0,500 Z"
                    className="wave3"
                  />
                </svg>
              </div>
              <Typography
                variant="h6"
                style={{
                  position: "absolute",
                  bottom: 10,
                  color: "white",
                  fontWeight: "bold",
                  zIndex: 2,
                }}
              >
                {percentages[index]}%
              </Typography>
            </Paper>
          ))}
        </div>
        <Typography variant="h3" color="initial">
          Soft-Skills
        </Typography>
        <div>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <Paper elevation={3} style={{ padding: "20px", width: "300px" }}>
              <Typography variant="body1">
                Excellent communicator, able to convey ideas clearly and
                concisely.
              </Typography>
            </Paper>
            <Paper elevation={3} style={{ padding: "20px", width: "300px" }}>
              <Typography variant="body1">
                Exceptional team player, able to collaborate effectively with
                diverse personalities.
              </Typography>
            </Paper>
            <Paper elevation={3} style={{ padding: "20px", width: "300px" }}>
              <Typography variant="body1">
              Able to adjust to new situations and challenges with ease.
              </Typography>
            </Paper>
            {/* Ajoutez ici d'autres papiers pour d'autres soft-skills */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
