import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '10px'
    }

    const handleShowDetails = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
           <h2>ID: {id} </h2> 
           <p>{title}</p>
           <Link to={`/post/${id}`}>Post Details</Link>
           <Link to={`/post/${id}`}><button>Click Me</button></Link>
           <button onClick={handleShowDetails}>Click to see Details</button>
        </div>
    );
};

export default Post;
