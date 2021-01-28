import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { zeroFill } from "../utils/numberFormat";

const Block = ({ id }) => {
  const classes = useStyles();
  const minNumberOfDigits = 3;
  const formattedId = zeroFill(id, minNumberOfDigits);

  return (
    <Box bgcolor="#bbb" padding={1} width={1}>
      <Typography className={classes.blockId} variant="caption">
        {formattedId}
      </Typography>
      <Typography className={classes.text} variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nemo
        quod saepe totam iure itaque.
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles({
  blockId: {
    color: "#00f",
    margin: 0,
  },
  text: {
    margin: 0,
  },
});

Block.propTypes = {
  id: PropTypes.string,
};

export default Block;
