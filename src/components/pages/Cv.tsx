import RadioCircleRatio from "../layout/RadioCircleButton"
import { SiGooglemaps } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import { VscBook } from 'react-icons/vsc'
import '../layout/layout.css'
import AvatarCv from "../layout/AvatarCv"
import Button from '@mui/material/Button';
import { AiOutlineFilePdf } from 'react-icons/ai'
const Cv = () => {
    const cvpdf = require('../assets/MateuszLisowski_CV.pdf')
    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={0}>
                <Grid item xs={4} minWidth='100px'>
                    <Paper sx={{ backgroundColor: "#335384", borderRadius: "0" }}>
                        <Grid container spacing={0}>
                            <Grid item sm={0} lg={1}></Grid>
                            <Grid item xs={12} lg={10}>
                                <div style={{ height: "10px" }}>
                                </div >
                                <div className="cvLeft">
                                    <AvatarCv />
                                </div>
                                <div style={{ height: "30px" }}>
                                </div >
                                <div className="cvLeft">
                                    <Typography variant="h4">PERSONAL INFO</Typography>
                                </div>
                                <div style={{ height: "20px" }}>
                                </div>
                                <div style={{ justifyContent: "flex-end", margin: '10px' }} >
                                    <div>
                                        <Grid container style={{ display: "table-row" }}>
                                            <Grid item xs={12} style={{ display: 'flex' }}>
                                                <SiGooglemaps size="28px" style={{ marginRight: "10px" }} />
                                                <Typography variant="body1">ul. Stalowa 64/16 53-440 Wrocław</Typography>
                                            </Grid>
                                            <Grid item xs={12} style={{ display: 'flex' }}>
                                                <BsFillTelephoneFill size="28px" style={{ marginRight: "10px" }} />
                                                <Typography variant="body1">722 187 712</Typography>
                                            </Grid>
                                            <Grid item xs={12} style={{ display: 'flex' }}>
                                                <FiMail size="28px" style={{ marginRight: "10px" }} />
                                                <Typography variant="body1">lisek091@gmail.com</Typography>
                                            </Grid>
                                            <Grid item xs={12} style={{ display: 'flex' }}>
                                                <AiFillGithub size="28px" style={{ marginRight: "10px" }} />
                                                <Typography variant="body1">https://github.com/lisek091</Typography>
                                            </Grid>
                                            <Grid item xs={12} style={{ display: 'flex' }}>
                                                <AiFillLinkedin size="28px" style={{ marginRight: "10px" }} />
                                                <Typography variant="body1">https://www.linkedin.com/i
                                                    n/mateusz-lisowski-
                                                    08676b161/</Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div style={{ height: "40px" }}>
                                    </div>
                                    <div className="cvLeft">
                                        <Typography variant="h4">SKILLS</Typography>
                                    </div>
                                    <RadioCircleRatio name="HTML" value={4} />
                                    <RadioCircleRatio name="CSS3" value={2} />
                                    <RadioCircleRatio name="JS" value={3} />
                                    <RadioCircleRatio name="React" value={4} />
                                    <RadioCircleRatio name="Redux" value={3} />
                                    <RadioCircleRatio name="Firebase" value={2} />
                                    <div className="cvLeft">
                                        <Typography variant="body1">ADDITIONAL</Typography>
                                    </div>
                                    <Grid container style={{ display: "table-row" }}>
                                        <Grid item xs={12} style={{ display: 'flex' }}>
                                            <VscBook size="28px" style={{ marginRight: "20px" }} />
                                            <Typography variant="body1">ENGLISH FLUENT</Typography>
                                        </Grid>
                                        <Grid item xs={12} style={{ display: 'flex' }}>
                                            <VscBook size="28px" style={{ marginRight: "20px" }} />
                                            <Typography variant="body1">POLISH NATIVE</Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item xs={0} md={0} lg={1}></Grid>
                        </Grid>
                        <div style={{ height: "60px" }} />
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper style={{ borderRadius: "0" }}>
                        <div style={{ marginLeft: "40px", marginTop: "100px" }}>
                            <div style={{ width: "75%" }}>
                                <Typography variant="h3" color="#335384">MATEUSZ LISOWSKI</Typography>
                                <hr style={{ color: "#335384", backgroundColor: "#335384", height: "4px", marginTop: "20px" }} />
                            </div>
                            <Typography variant="h5" color="#5BA7D7" style={{ marginTop: "50px" }}>PERSONAL PROFILE</Typography>
                            <Typography variant="body1" style={{ marginTop: "15px", width: "73%" }}>I am an ICT student who would like to associate his future
                                with programming. I am creative and the programming
                                is my creation tool. I am learning how to write web pages
                                on my own. I assimilate knowledge quickly. I am open
                                to new challenges that will allow me to spread my wings.</Typography>
                            <Typography variant="h5" color="#5BA7D7" style={{ marginTop: "30px" }}>WORK EXPERIENCE</Typography>
                            <Typography variant="body1" style={{ marginTop: "15px" }}>Reactjs</Typography>
                            <Typography variant="body1">Freelancer since Nov 2021</Typography>
                            <Button variant="contained" onClick={() => { window.open('https://www.upwork.com/freelancers/~01d2d65256fbcfc762', "_blank") }}>Check out profile</Button>
                            <Typography variant="h5" color="#5BA7D7" style={{ marginTop: "30px" }}>EDUCATION</Typography>
                            <Typography variant="body1" style={{ marginTop: "15px" }}>Wrocław University of Science and technology -
                                Information and communication technology (ICT)</Typography>
                            <Typography variant="body2">10.2019 – at present</Typography>
                            <Typography variant="body1" style={{ marginTop: "15px" }}>Wrocław University of Science and technology -
                                Quantum engineering</Typography>
                            <Typography variant="body2">10.2018 – at present</Typography>
                        </div>
                        <div style={{ height: "70px" }}></div>
                        <div style={{ justifyContent: "flex-end", display: "flex" }}>
                            <Typography variant="body2">Download the PDF version</Typography>
                            <a href={cvpdf} download>
                                <AiOutlineFilePdf size="60px" />
                            </a>
                        </div>
                        <div style={{ height: "40px" }}></div>
                    </Paper>
                </Grid>
            </Grid >
        </Box >
    )
}

export default Cv

