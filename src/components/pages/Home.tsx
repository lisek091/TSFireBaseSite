import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Topbar from '../layout/Topbar';
import Card from '../layout/Card'
import Button from '@mui/material/Button';
import Footer from '../layout/Footer';
import { useNavigate, useLocation } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: "#D3D3D3" }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Topbar />
                </Grid>
                <Grid item xs={6} >
                    <Card name="Are you here to explore the page?" description="Welcome and please, if you have any questions or sugestion fell free to write to me!" >
                        <Button variant="contained" sx={{ height: "50px", width: "75%" }}>Show more</Button>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card name="Are you looking for junior help?" description="See my repos and CV! You can leave message on this page, or write mail to me" >
                        <Button variant="contained" sx={{ height: "50px", width: "75%" }} onClick={() => navigate('/cv')}>Go to CV</Button>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card name="How about games made in React?" description="I am a geek and love games... I used to create some in cryengine. Years passed but somewhat passions stayed." >
                        <Button variant="contained" sx={{ height: "50px", width: "75%" }} onClick={() => navigate('/games')}>Go to Games made by me</Button>
                    </Card>
                </Grid>
            </Grid>
            <Footer />
        </Box >

    )
}

export default Home
