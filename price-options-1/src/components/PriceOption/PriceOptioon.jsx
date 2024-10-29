import PropTypes from "prop-types";

const PriceOptioon = ({option}) => {
    const {name, price, features} = option;
    return (
        <div>
            <h3>
                <span className="text-6xl">{price}</span>
                <span className="text-3xl">/Month</span>
            </h3>
        </div>
    );
};

PriceOptioon.propTypes = {
    option: PropTypes.object
}

export default PriceOptioon;