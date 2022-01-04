import { CardProps } from '../types/cardTypes';
import Typography from '@mui/material/Typography';
import '../layout/layout.css'
import Grid from '@mui/material/Grid';
import useWindowDimensions from '../../hooks/useWindow';
const Card = (props: CardProps) => {

    const { width, height } = useWindowDimensions()
    const RenderImage = () => {
        if (props.image) {
            if (width > 1600) {
                return (<img className="picture" src={props.image} alt="Backgrond" style={{ minHeight: '100%', maxWidth: '100%', borderTopRightRadius: "50px", borderBottomRightRadius: "50px", padding: '0px', margin: '0px' }}></img>)
            }
            else return (<div></div>)
        }
        else return (<div></div>)
    }


    return (
        <div style={{ padding: "5px", height: "270px", display: "flex", borderRadius: "50px" }} className="bg-card" >
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
                <RenderImage />
            </Grid>
        </div>
    )
}

export default Card
