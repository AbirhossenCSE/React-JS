import Girldfriend from "../Girlfriend/Girldfriend";
import Special from "../Special/Special";

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
                {name === 'Karim' && <Girldfriend></Girldfriend>}
            </section>
        </div>
    );
};

export default Cousin;