import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { callToAPI } from "./ReduxSlice";
import {
  Grid,
  Card,
  CardActionArea,
  Typography,
  CardContent,
  CircularProgress,
  Box,
} from "@mui/material";

function Main() {
  const [allUsersData, setAllUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(callToAPI());
    setAllUsersData(data);
    // setLoading(false);
  }, []);

  return (
    <>
      {/* {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : ( */}
        <>
          <h1 style={{ textAlign: "center" }}>MOVIE STARS</h1>
          <Grid container spacing={2}>
            {allUsersData?.map((el) => (
              <Grid item xs={3} md={3} key={el.id}>
                <Card sx={{ maxWidth: 300 }}>
                  <CardActionArea>
                    <Typography gutterBottom variant="h5" component="div">
                      {el.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {el.username}
                      <Typography gutterBottom variant="h5" component="div">
                      {el.email}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {el.address}
                    </Typography>
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      {/* )} */}
    </>
  );
}
export default Main;
