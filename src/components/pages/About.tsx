import AboutContainer from '../layout/AboutContainer';
import '../layout/layout.css'
import Topbar from '../layout/Topbar';
import Message from '../layout/Message'
const About = () => {
    return (
        <div className='bg-global' style={{ height: "220vh" }}>
            <Topbar />
            <AboutContainer />
            <Message />
            <div style={{ height: "60px" }}></div>
        </div>
    )
}

export default About
