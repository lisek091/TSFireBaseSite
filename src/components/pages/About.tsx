import AboutContainer from '../layout/AboutContainer';
import '../layout/layout.css'
import Topbar from '../layout/Topbar';
const About = () => {
    return (
        <div className='bg-global' style={{ backgroundSize: 'cover', height: "100vh" }}>
            <Topbar />
            <AboutContainer />
        </div>
    )
}

export default About
