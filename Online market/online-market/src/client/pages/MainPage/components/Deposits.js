import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

export default function Deposits(materialsData) {
  const data = materialsData.materialsData;
  return (
    <React.Fragment>
      <Title>{data.materialName}</Title>
      <Typography component="p" variant="h4">
        Price: {data.price}$
      </Typography>
      <Typography color="textSecondary" flex="1">
        on {new Date().toLocaleString()}
      </Typography>
      <div>
        <Link color="primary">Buy</Link>
      </div>
    </React.Fragment>
  );
}
