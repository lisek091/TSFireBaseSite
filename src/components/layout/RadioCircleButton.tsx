import CircleIcon from '@mui/icons-material/Circle';
import Rating from '@mui/material/Rating';
import { Typography, Grid } from '@mui/material';
import { RadioTypes } from '../types/radioTypes';
const RadioCircleRatio = (props: RadioTypes) => {
    return (
        <div >
            <Grid container spacing={0} className='twoiteminrow'  >
                <Grid item md={6} sm={12} xs={12} >
                    <Typography component="legend" variant='subtitle1'>{props.name}</Typography>
                </Grid >
                <Grid item md={6} sm={12} xs={12}>
                    <Rating
                        name={props.name}
                        defaultValue={props.value}
                        disabled
                        precision={0.5}
                        icon={<CircleIcon fontSize="medium" color="inherit" />}
                        emptyIcon={<CircleIcon fontSize="medium" color="error" />}
                    />
                </Grid>
            </Grid >
        </div >
    )
}
export default RadioCircleRatio
