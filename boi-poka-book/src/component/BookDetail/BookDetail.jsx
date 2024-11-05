import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
    
    const {bookId} = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)

    const {bookId: currentBookId, image} = book;
    return (
        <div className="m-4 p-4">
            <h2>Book Details: {bookId} </h2>
            <img className="w-36" src={image} alt="" />
            <button className="btn btn-outline mr-4 btn-accent">Read</button>
            <button className="btn btn-accent">Wish List</button>
        </div>
    );
};

export default BookDetail;