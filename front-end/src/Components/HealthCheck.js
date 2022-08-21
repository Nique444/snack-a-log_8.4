import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

export default function HealthCheck ({snack}) {
    return (
        <>
        {snack.is_healthy ? ( <img src={heartSolid} alt="healthy" /> ) : (<img scr={heartOutline} alt="unhealthy" /> )}
        </>
    );
}