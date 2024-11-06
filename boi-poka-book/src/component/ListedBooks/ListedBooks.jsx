import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData();

    useEffect(() =>{
        const storedReadList = getStoreReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        console.log(storedReadList, storedReadListInt, allBooks);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);
    }, [])

    return (
        <div>
            <h2 className='text-3xl ml-3'>Listed Books</h2>

            <Tabs>
                <TabList>
                <Tab>Read List</Tab>
                <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                <h2>Book I Read: {readList.length} </h2>
                {
                    readList.map(book => <Book key={book.bookID} book={book}></Book>)
                }
                </TabPanel>
                <TabPanel>
                <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;