import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
const Message = () => {
    return (
        <div hidden>
            <TextareaAutosize
                maxRows={20}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
                style={{ width: 500, height: 200, backgroundColor: '#626C76' }}
            />
            <Button color="secondary" variant="contained">Send</Button>
        </div>
    )
}

export default Message
