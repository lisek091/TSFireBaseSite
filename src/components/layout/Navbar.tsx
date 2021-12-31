import { BiHomeAlt } from "react-icons/bi";
import { DiGrunt } from "react-icons/di";
import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [value, setValue] = useState(location.pathname);
    return (
        <nav>
            <Box sx={{ width: '100%', position: "fixed", bottom: "0px" }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        if (newValue !== "github" && newValue !== "linkedin") {
                            setValue(newValue);
                        }
                        else setValue(location.pathname)
                    }}
                    sx={{ backgroundColor: "#d9d9d9" }}
                >
                    <BottomNavigationAction label="Home" icon={<BiHomeAlt />} value="/" onClick={() => navigate("/")} />
                    <BottomNavigationAction label="About" icon={<DiGrunt />} value="/about" onClick={() => navigate("/about")} />

                    <BottomNavigationAction label="Github" icon={<GoMarkGithub />} value="github" onClick={() => window.open("https://github.com/lisek091", "_blank")} />
                    <BottomNavigationAction label="Linkedin" icon={<SiLinkedin />} value="linkedin" onClick={() => window.open("https://www.linkedin.com/in/mateusz-lisowski-08676b161/", "_blank")} />
                </BottomNavigation>
            </Box>
        </nav>

    )
}

export default Navbar
