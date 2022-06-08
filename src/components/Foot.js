import FootBoxText1 from "./FootBoxText1";
import FootBoxText2 from "./FootBoxText2";
import FootLogo from "./FootLogo";

const Foot = (props) => {
    return (
        <div className="foot">
            <FootLogo />
            <FootBoxText1 />
            <FootBoxText2 />
        </div>
    );
}

export default Foot;