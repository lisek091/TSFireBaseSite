import { StyledBar } from "./styledcomponents/StyledBar"
const Display = () => {
    const exampletab = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100px" }}>
            {
                exampletab.map((bar, index) => {
                    return (<StyledBar key={index} />)
                })
            }
        </div >
    )
}

export default Display
