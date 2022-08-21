import heartSolid from "../assets/heart-solid.png";
import heartRegular from "../assets/heart-regular.png";

export default function HealthCheck ({snack}) {
    return (
        <>
        {snack.is_healthy ? <img src={heartSolid} alt="healthy" />  : <img src={heartRegular} alt="unhealthy" /> }
        </>
    );
}