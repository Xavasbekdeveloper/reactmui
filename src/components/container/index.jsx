import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Cards from "../cards";
import CustomizedAccordions from "../accordion";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Cards />
        <CustomizedAccordions />
      </Container>
    </React.Fragment>
  );
}
