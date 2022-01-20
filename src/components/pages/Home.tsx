import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Topbar from '../layout/Topbar';
import Card from '../layout/Card'
import Button from '@mui/material/Button';
import Footer from '../layout/Footer';
import { useNavigate } from 'react-router-dom'
import '../layout/layout.css'
const Home = () => {
    const Image1 = require('../assets/RegisterPageBackgrond.jpg')
    //const Image2 = require('../assets/CvPic.jpg')
    const navigate = useNavigate()
    return (
        <Box sx={{ flexGrow: 1 }} className='bg-global'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Topbar />
                    <div style={{ margin: "30px" }} />
                </Grid>
                <Grid item xs={0} sm={1} md={2} xl={3}>
                </Grid>
                <Grid item xs={12} sm={10} md={8} xl={6}>
                    <Card name="Welcome! " description="This is my study site where I practice my web skills. If you have any questions or sugestion fell free to write to me!" image={Image1} >
                        <Button variant="contained" sx={{ height: "50px", width: "50%" }} onClick={() => navigate('/about')}>Show more</Button>
                    </Card>
                </Grid>
                <Grid item xs={0} sm={1} md={2} xl={3}>
                </Grid>
                <Grid item xs={0} sm={1} md={2} xl={3}>
                </Grid>
                <Grid item xs={12} sm={10} md={8} xl={6}>
                    <Card name="Are you looking for junior or intern?" description="Check my repos and CV!" >
                        <Button variant="contained" sx={{ height: "50px", width: "30%" }} onClick={() => navigate('/cv')}>Show CV</Button>
                    </Card>
                </Grid>
                <Grid item xs={0} sm={1} md={2} xl={3}>
                </Grid>
                <Grid item xs={0} sm={1} md={2} xl={3}>
                </Grid>
                <Grid item xs={12} sm={10} md={8} xl={6}>
                    <Card name="Games made in React?" description="I am a geek and love games... Soon I will add my small JS games here!" >
                        <Button variant="contained" sx={{ height: "50px", width: "40%" }} onClick={() => navigate('/games')}>Go to Games made by me</Button>
                    </Card>
                </Grid>
                <Grid item xs={0} sm={1} md={2} xl={3}>
                </Grid>
            </Grid>
            <Footer />
        </Box >

    )
}

export default Home
