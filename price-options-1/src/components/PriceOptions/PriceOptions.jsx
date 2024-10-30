import PriceOptioon from "../PriceOption/PriceOptioon";

const PriceOptions = () => {

    const  priceOptions = [
      {
        "id": 1,
        "name": "Basic",
        "price": 29.99,
        "features": [
          "Access to gym equipment",
          "Locker room access",
          "1 free personal training session"
        ]
      },
      {
        "id": 2,
        "name": "Standard",
        "price": 49.99,
        "features": [
          "Access to gym equipment",
          "Locker room access",
          "Unlimited group classes",
          "5 personal training sessions",
          "Free fitness assessment"
        ]
      },
      {
        "id": 3,
        "name": "Premium",
        "price": 79.99,
        "features": [
          "Access to gym equipment",
          "Locker room access",
          "Unlimited group classes",
          "10 personal training sessions",
          "Access to spa and sauna",
          "Nutrition consultation"
        ]
      },
      {
        "id": 4,
        "name": "VIP",
        "price": 99.99,
        "features": [
          "Access to gym equipment",
          "Private locker",
          "Unlimited group and specialty classes",
          "Unlimited personal training",
          "Access to spa, sauna, and pool",
          "Monthly fitness assessment",
          "Personalized diet plan"
        ]
      }
    ];
      

    return (
        <div>
            <h2 className="text-4xl">Best price in the town</h2>
            {
                priceOptions.map(option => <PriceOptioon key={option.id} option={option}></PriceOptioon>)
            }
        </div>
    );
};

export default PriceOptions;