import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { AdvancedCardProps } from '../types/advancedCardProps'
import Button from '@mui/material/Button';
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

const CustomAdvandecCard = (props: AdvancedCardProps) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card sx={{ maxWidth: '100%', backgroundColor: 'transparent' }}>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    color="secondary"
                >
                    <Button variant="contained" sx={{ height: "50px", width: "30%" }}>Show CV</Button>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {props.children}
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default CustomAdvandecCard
