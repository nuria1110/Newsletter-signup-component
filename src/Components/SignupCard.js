import { useEffect, useRef, useState } from "react";
import { useUserContext } from "../Contexts/UserContext";

const SignupCard = () => {
    const { setHasEmail, setEmail } = useUserContext();
    const [ invalid, setInvalid ] = useState(false)
    const emailRef = useRef();
    const [ fadeOut , setFadeOut ] = useState(false);

    //email validation
    const isValid = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    //on submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const emailInput = emailRef.current.value;

        if (isValid(emailInput)) {
            setFadeOut(true)
            setEmail(emailInput);
            setTimeout(() => setHasEmail(true), 500)
        } else {
            setInvalid(true);
        }
    };

    return(<>
        <div className={`card-signup ${fadeOut ? "fade-out" : ""}`}>
            <div className="card-main">
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul className="signup-list">
                    <li className="list-item">
                        <img src={require("../Images/icon-list.svg").default} alt=""/>
                        Product discovery and building what matters
                    </li>
                    <li className="list-item">
                        <img src={require("../Images/icon-list.svg").default} alt=""/>
                        Measuring to ensure updates are a success
                    </li>
                    <li className="list-item">
                        <img src={require("../Images/icon-list.svg").default} alt=""/>
                        And much more!
                    </li>
                </ul>
                <form className={`form-email ${invalid ? "invalid" : ""}`} onSubmit={handleSubmit}>
                    <div className="form-labels">
                        <label>Email address</label>
                        <label className={`invalid-label ${invalid ? "visible" : ""}`}>Valid email required</label>
                    </div>
                    
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="email@company.com" 
                        required
                        ref={emailRef}
                    />

                    <button className="button-main" type="submit">Subscribe to monthly newsletter</button>                
                </form>
            </div>
            <div className="card-img">
                <picture>
                    <source media="(max-width: 375px)" srcSet={require("../Images/illustration-sign-up-mobile.svg").default}/>
                    <img src={require("../Images/illustration-sign-up-desktop.svg").default} alt=""/>
                </picture>
            </div>
        </div>
    </>);
}

export default SignupCard;