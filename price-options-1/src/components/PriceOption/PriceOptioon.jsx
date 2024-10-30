import PropTypes from "prop-types";

const PriceOptioon = ({option}) => {
    const {name, price, features} = option;
    return (
        <div>
            <h3>
                <span className="text-6xl">{price}</span>
                <span className="text-3xl">/Month</span>
            </h3>
            <h4 className="text-4xl">{name}</h4>
        </div>
    );
};

PriceOptioon.propTypes = {
    option: PropTypes.object
}

export default PriceOptioon;