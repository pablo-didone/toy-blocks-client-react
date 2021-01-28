import React from "react";
import { Box, Typography } from "@material-ui/core";
import Block from "../components/Block";

const Blocks = ({ blocks }) => {
  const { list, loading, error } = blocks;

  return (
    <Box>
      {loading && <Typography>loading</Typography>}
      {error && <Typography color="error">erorr</Typography>}
      {list.length === 0 && !loading && !error && (
        <Typography>Empty</Typography>
      )}
      {list &&
        list.length > 0 &&
        list.map((block) => (
          <Box key={block.id} marginBottom={1}>
            <Block id={block.id} />
          </Box>
        ))}
    </Box>
  );
};

export default Blocks;
