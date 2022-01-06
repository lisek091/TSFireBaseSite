import Avatar from '@mui/material/Avatar';
const AvatarCv = () => {
    const JA = require('../assets/profilowe.jpg')
    return (
        <Avatar
            alt="Mateusz Lisowski"
            src={JA}
            sx={{ width: 160, height: 200 }}
            variant='rounded'
        />
    );
}

export default AvatarCv
