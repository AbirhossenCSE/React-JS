import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOptioon = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-blue-300 rounded-md flex flex-col p-4 text-black">
            <h3 className="text-center"> 
                <span className="text-6xl font-extrabold">{price}</span>
                <span className="text-2xl">/Month</span>
            </h3>
            <h4 className="text-3xl">{name}</h4>
            <div className="flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>

            <button className="bg-green-700 p-2 rounded-lg w-full mt-4 text-white hover:bg-green-900">Buy Now</button>
        </div>
    );
};

PriceOptioon.propTypes = {
    option: PropTypes.object
}

export default PriceOptioon;