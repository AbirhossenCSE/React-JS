import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Girldfriend = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Girl Friend</h2>
            <p>Has: {gift} </p>
        </div>
    );
};

export default Girldfriend;