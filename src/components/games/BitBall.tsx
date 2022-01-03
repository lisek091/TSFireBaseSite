import Display from "./bitball/Display"

//a ball hiting bunch of blocks 
// timer for points save score to indivi user data base
const BitBall = () => {
    return (
        <div style={{ borderStyle: "solid", borderColor: "black", borderWidth: "5px", height: "700px" }}>
            <Display />
        </div>
    )
}

export default BitBall
