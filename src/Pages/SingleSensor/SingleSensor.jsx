import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import BadgeData from "../../Components/BadgeData"
import {getColor} from "../../Helpers/getColorHelper"

export default function SingleSensor() {
    const percent = 40
    let color = getColor(percent)
    let size = '350px'
    const style = {
        sizeBox : {
            height : size,
            width : size
        },
        circularBg : {
            backgroundColor : "#jFdksi"
        }
    }
    const {id} = useParams();
    console.log(id)

    return(
        <>
            <div className="singlesensor">
                <div className="singlesensor__titles">
                    <h1>Capteur Salon</h1>
                    <span>Dans salon, Maison</span>
                </div>
                <div className="singlesensor__circular">
                    <div className="circularprogress singlesensor__circular__circularprogress" style={style.sizeBox}>
                        <CircularProgress variant="determinate"  style={{ color: '#F0F0F0' }} size={size} value={100} />
                        <CircularProgress variant="determinate" color={color}  size={size} value={percent} />
                        <div>
                            <p className="singlesensor__circular__circularprogress__span">{percent}</p>
                            <span>AQI</span>
                            <span>Qualitée de l'air</span>
                            <span className={"singlesensor__circular__circularprogress__span__qualityName text-" + color}>Mauvaise</span>
                        </div>
                    </div>
                </div>
                <div className="singlesensor__badges">
                    <BadgeData icon="sun" color="danger" data={80}/>
                    <BadgeData icon="temperature-quarter" color="success" data={70}/>
                    <BadgeData icon="percent" color="info" data={60}/>
                    <BadgeData icon="volume-high" color="info" data={60}/>
                    <BadgeData icon="wind" color="success" data={100}/>
                </div>
                <div className="singlesensor__addons">
                    <div className="singlesensor__addons__graph">

                    </div>
                    <div className="singlesensor__addons__advice">
                        <h4>Conseil</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit in debitis beatae, modi adipisci, doloribus quae ipsa eum magnam, amet facere recusandae eaque corrupti est dignissimos atque inventore odit vero!</p>
                    </div>
                </div>
            </div>
        </>
    )   
}