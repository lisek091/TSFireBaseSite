import { Typography } from "@mui/material"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AdvancedCard from "./AdvancedCard";
import '../layout/layout.css'

const AboutContainer = () => {

    const codeEvo = require('../assets/code.png')
    const pasjaInf = require('../assets/pasInf.jpg')
    const traversy = require('../assets/traversy.jpg')
    return (
        <div>
            <Box sx={{ flexGrow: 1, margin: '5px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <Typography variant="h2" color="secondary">Some information for everyone about this site</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <AdvancedCard header="Why and how did I made this site?" subHeader="About many diffrent styles here and all possible ways of state managment" para1="Some parts of code might look like unnecessary but the point of this page is to get any atention while still learing web design." para2="This site is using: " text2="This might seem not much but evryone start with a first step." >
                            <ul>
                                <li>
                                    React as main framework
                                </li>
                                <li>
                                    Firebase as backend
                                </li>
                                <li>
                                    MUI and tailwind CSS
                                </li>
                                <li>
                                    Redux and redux saga for practice.
                                </li>
                            </ul>
                        </AdvancedCard>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <AdvancedCard header="How long did it take to make it?" subHeader="I am learing web dev for 5 months now. So far I was watching corses, made some simple components. Gathering all information need for to start a full stack app." para2="This is quite a lot and a progress is slow. To be honest I wish I could allready find a job as a junior or intern to see how it looks like from diffrent angle.">

                        </AdvancedCard>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <AdvancedCard header="A thank you to all teachers" subHeader="If you are looking for some other sources of knowledge, here are those i used and recomend.">
                            <ul >
                                <li style={{ margin: "5px" }}>
                                    <div style={{ justifyContent: "space-between", width: "200px", display: "flex" }}>
                                        <div>Pasja informatyki</div>
                                        <img src={pasjaInf} onClick={() => window.open("https://www.youtube.com/c/Pasjainformatykitutoriale", "_blank")} width="30px" className="picture" alt="pasja"></img>
                                    </div>
                                </li>
                                <li style={{ margin: "5px" }}>
                                    <div style={{ justifyContent: "space-between", width: "200px", display: "flex" }}>
                                        Codevolution
                                        <img src={codeEvo} onClick={() => window.open("https://www.youtube.com/c/Codevolution", "_blank")} width="30px" className="picture" alt="codeEvo"></img>
                                    </div>
                                </li>
                                <li style={{ margin: "5px" }}>
                                    <div style={{ justifyContent: "space-between", width: "200px", display: "flex" }}>
                                        Traversy Media
                                        <img src={traversy} onClick={() => window.open("https://www.youtube.com/c/TraversyMedia", "_blank")} width="30px" className="picture" alt="traversy"></img>
                                    </div>
                                </li>
                            </ul>
                        </AdvancedCard>
                    </Grid>
                </Grid>
            </Box >
        </div >
    )
}

export default AboutContainer
