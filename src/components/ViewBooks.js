import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext';
import {BooksDisplay} from './booksDisplay';
import '../App.css';

export const ViewBooks = () => {
    const {book} = useContext(GlobalContext);
    const bookData = book.map(bk => <BooksDisplay key={bk.id} bok={bk}/>);
    return (
        <div className="text-light m-auto container" style={{backgroundColor: "#9068be"}}>
            <p className="text-light h5 m-auto">AVAILABLE BOOKS</p>
            <div className="table-responsive table-bordered">
                <table className="m-auto">
                    <thead className="bg-transparent">
                        <tr>
                            <th>TITLE </th>
                            <th> AUTHOR </th>
                            <th> DATE </th>
                            <th> PRICE </th>
                            <th> BUY </th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookData}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
