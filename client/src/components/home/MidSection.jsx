import React from "react";

import { Grid, styled} from "@mui/material";
import { imageURL } from "../../constants/data";

const Wrapper = styled(Grid)`
    margin-top: 10px;
    justify-content: space-between;

`;

const Image = styled('img')(({ theme })=>({
    marginTop: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: { //after down md it will be applied i.e for small devices sm and xs
        objectFit: 'cover',
        heigt: 120
    }
}));

const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

  return (
    <>
      <Wrapper lg={12} sm={12} md={12} xs={12} container>
        {imageURL.map((image) => (
          <Grid item g={4} md={4} sm={12} xs={12}>
            <Image src={image} alt="image" style={{ width: "100%" }} />
          </Grid>
        ))}
      </Wrapper>
      <Image src={url} alt="covid"></Image>
    </>
  );
};

export default MidSection;
