const Cv = () => {
    const xd = [9, 6]
    return (
        <div>
            {xd.map((wtf, index) => {
                return (<div key={index}>{wtf}</div>)
            })}
        </div>
    )
}

export default Cv
