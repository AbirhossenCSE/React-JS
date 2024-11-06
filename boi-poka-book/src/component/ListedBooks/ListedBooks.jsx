import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');
    const allBooks = useLoaderData();

    useEffect(() =>{
        const storedReadList = getStoreReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        console.log(storedReadList, storedReadListInt, allBooks);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);
    }, [])

    const handleSort = sortType =>{
        setSort(sortType);

        if (sortType === 'number of pages') {
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedReadList)
        }
        if (sortType === 'rating') {
            const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedReadList)
        }
    }

    return (
        <div>
            <h2 className='text-3xl ml-3'>Listed Books</h2>

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {
                        sort ? `Sort by: ${sort}` : 'Sort By'
                    }

                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=> handleSort('rating')}><a>Ratting</a></li>
                    <li onClick={()=> handleSort('number of pages')}><a>Number of page</a></li>
                </ul>
            </div>

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