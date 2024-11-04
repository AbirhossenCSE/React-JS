import { useLoaderData } from "react-router-dom";

const UserDwtails = () => {
    const user = useLoaderData();
    const {name} = user;
    return (
        <div>
            <h2>Detais About User: {name} </h2>
        </div>
    );
};

export default UserDwtails;