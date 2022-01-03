import { CardProps } from '../types/cardTypes';
import Typography from '@mui/material/Typography';
import '../layout/layout.css'
import Grid from '@mui/material/Grid';

const Card = (props: CardProps) => {
    return (
        <div style={{ padding: "5px", height: "270px", display: "flex", borderRadius: "50px", }} className='bg-card' >
            <Grid item xs={0} sm={1} md={2} xl={3}>
            </Grid>
            <Grid item xs={12} sm={10} md={8} xl={6}>
                <Typography variant="h4" sx={{ textAlign: "center", marginTop: '10px', color: "beige" }}>{props.name}</Typography>
                <Typography variant="h6" sx={{ textAlign: "center", marginTop: '10px', color: "beige" }}>{props.description}</Typography>
                <div style={{ height: '25px' }}>
                </div>
                <div style={{ textAlign: "center" }}>
                    {props.children}
                </div>
            </Grid>
            <Grid item xs={0} sm={1} md={2} xl={3}>
                {props.image ? <img src={props.image} alt="Backgrond" height="auto"></img> : <div></div>}
            </Grid>
        </div>
    )
}

export default Card
