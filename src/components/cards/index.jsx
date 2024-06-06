import React from "react";
import RecipeReviewCard from "../card";
import { Grid } from "@mui/material";

const Cards = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Grid item>
          <RecipeReviewCard />
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid item>
          <RecipeReviewCard />
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid item>
          <RecipeReviewCard />
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid item>
          <RecipeReviewCard />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cards;
