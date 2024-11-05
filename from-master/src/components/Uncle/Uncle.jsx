import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
           <h2>Uncle</h2> 
           <section className="flex">
            <Cousin name={'Rahim'} asset={asset}></Cousin>
            <Cousin name={'Rahima'}></Cousin>
           </section>
        </div>
    );
};

export default Uncle;