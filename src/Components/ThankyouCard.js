import { useUserContext } from "../Contexts/UserContext";

const ThankyouCard = () => {
    const { email } = useUserContext();

    return(<>
        <div className="card-thankyou">
            <img src={require("../Images/icon-success.svg").default} alt=""/>
            <h1>Thanks for subscribing!</h1>
            <p> A confirmation email has been sent to <span>{email}</span>. 
                Please open it and click the button inside to confirm your subscription.</p>
            <button className="button-main" type="submit">Dismiss message</button>
        </div>
    </>);
}

export default ThankyouCard;