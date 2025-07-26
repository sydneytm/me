import Finn from "./assets/finn.png"
import Cooper from "./assets/cooper.png"
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
export const DogGrid = () => {
    return(

        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
                <Stack>
                <img src={Finn} alt="Finn" className="dog-image" />
                <img src={Finn} alt="Finn" className="dog-image" />
                <img src={Finn} alt="Finn" className="dog-image" />
                </Stack>
            </Grid>
            <Grid item xs={5}>
            <Stack>
                <img src={Cooper} alt="Cooper" className="dog-image" />
                <img src={Cooper} alt="Cooper" className="dog-image" />
                <img src={Cooper} alt="Cooper" className="dog-image" />
                </Stack>
            </Grid>
            <Grid item xs={5}>
            <Stack>
                <img src={Cooper} alt="Cooper" className="dog-image" />
                <img src={Cooper} alt="Cooper" className="dog-image" />
                <img src={Cooper} alt="Cooper" className="dog-image" />
                </Stack>
            </Grid>
        </Grid>
    )
}