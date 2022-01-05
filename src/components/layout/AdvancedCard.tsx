import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AdvancedCardProps } from '../types/advancedCardProps'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function AdvancedCard(props: AdvancedCardProps) {

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: '100%', backgroundColor: "#0A1929" }}>
            <CardHeader
                title={props.header}
                style={{ color: "#00695f" }}
            />
            <CardContent>
                <Typography color="secondary" sx={{ marginBottom: "5px" }}>{props.subHeader}</Typography>
                <Typography variant="body2" color="secondary">
                    {props.text1}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    color="secondary"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph color="secondary">
                        {props.para1}
                    </Typography >
                    <Typography paragraph color="secondary">
                        {props.para2}
                    </Typography>
                    <span style={{ color: "#70c4bc" }}>
                        {props.children}
                    </span>
                    <Typography paragraph color="secondary">
                        {props.para3}
                    </Typography>
                    <Typography color="secondary">
                        {props.text2}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}