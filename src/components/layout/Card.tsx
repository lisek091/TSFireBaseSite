import { CardProps } from '../types/cardTypes';
import Typography from '@mui/material/Typography';



const Card = (props: CardProps) => {
    return (
        <div style={{ padding: "5px", backgroundColor: '#7070db', height: "400px", alignItems: "flex-end", display: "grid", }} >
            <Typography variant="h4" sx={{ textAlign: "center" }}>{props.name}</Typography>
            <Typography variant="h6" sx={{ textAlign: "center" }}>{props.description}</Typography>
            <div style={{ textAlign: "center" }}>
                {props.children}
            </div>
        </div>
    )
}

export default Card
