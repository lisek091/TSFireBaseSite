import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router"
const Games = () => {
    const navigate = useNavigate()
    const bg = require('../assets/bg.png')
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: "100vh", display: "block" }}>
            <Typography variant={"h2"} color={"primary"}>Work in progres</Typography>
            <Button onClick={() => { navigate("/") }} variant={"contained"}>Back to main site</Button>
        </div>
    )
}

export default Games
