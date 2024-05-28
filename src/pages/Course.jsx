import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Paper, Link } from "@mui/material";
import git from "../assets/git.png";

function Course() {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h2" color="textPrimary" gutterBottom>
        Achievements
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <Paper elevation={3} sx={{ padding: "30px" }}>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            Winner - 1st place SUMMER-CODE
          </Typography>
          <Typography variant="body1" color="textPrimary">
            Algorithm: An event organized by Emitech, sponsored by Novity &
            Bocasay. Received a certificate of participation from October 19 to
            November 2, 2022.
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ padding: "20px" }}>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            Certification PYTHON 3
          </Typography>
          <Typography variant="body1" color="textPrimary">
            Validation of problem-solving skills with honors certification
            Codingame.
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ padding: "20px" }}>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            Participation in the Cloudflight Coding Contest in Fianarantsoa
          </Typography>
          <Typography variant="body1" color="textPrimary">
            Algorithm Contest: Achieved third place. Team Name: KIRIKOU. April
            19, 2024, at ENI.
          </Typography>
        </Paper>
      </Box>
      <br /> <br />
      <Typography variant="h2" color="textPrimary" gutterBottom>
        Professional experience:
      </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "200px", // Taille maximale pour assurer la responsivité
          height: "auto",
          borderRadius: "10px",
          overflow: "hidden",
          margin: "20px auto",
        }}
      >
        <Link href="https://github.com/HarenaRaelison" target="_blank" rel="noopener noreferrer" style={{ width: "100%" ,height:'100%'}}>
          <img
            src={git}
            alt="GitHub Logo"
            style={{ width: "48px", height: "48px" }}
          /><Typography variant="h5" color="initial">Lien GitHub</Typography>
        </Link>
      </Paper>
    </div>
  );
}

export default Course;
