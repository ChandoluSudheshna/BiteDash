import { useRouteError } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

const Error = () => {

    const err = useRouteError();
    console.log(err);

    return(
        <div>
            <HeaderComponent/>
            <div className="error">
                <img className="errimg" src="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-chef-is-holding-a-baking-sheet-with-disgusted-expression-png-image_10140682.png"/>
                <div className="errormsg">
                    <h2 className="errmsg">{err.status + " " + err.statusText}</h2>
                    <h1 className="errmsg">Whoops! The oven is too hot to handle your request right now.</h1>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default Error;