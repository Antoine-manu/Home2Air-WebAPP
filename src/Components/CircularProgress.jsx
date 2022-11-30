import { CircularProgress } from "@mui/material"

export default function circularProgress({percent}) {
    
    let color = ''

    if(percent<60){
        color = 'danger'
    } else if(percent>=60 && percent<80){
        color = 'info'
    } else if(percent>=80){
        color = 'success'
    }
    return(
        <>
            <div className="circularprogress">
                <CircularProgress variant="determinate" color="lightgrey"  size='70px' value={100} />
                <CircularProgress variant="determinate" color={color}  size='70px' value={percent} />
                <div>
                    <p>{percent}</p>
                    <span>AQI</span>
                </div>
            </div>
        </>
    )   
}