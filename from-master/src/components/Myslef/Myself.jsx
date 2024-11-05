import { useContext } from "react";
import Special from "../Special/Special";
import { MoneyContext } from "../Grandpa/Grandpa";

const Myself = ({asset}) => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h2>Abir</h2>
            <p>Grandpa Money: {money} </p>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default Myself;