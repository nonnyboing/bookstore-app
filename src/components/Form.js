import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext';

export const Form = () => {
    const {addBook} = useContext(GlobalContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState('');

    function handleChange (e) {
        switch(e.target.name) {
            case 'btitle':
                return(setTitle(e.target.value));
            case 'bauthor':
                return(setAuthor(e.target.value));
            case 'bdate':
                return(setDate(e.target.value));
            case 'bamount':
                return(setPrice(e.target.value));
            default:
                return(null);
        }
    }
    function formSubmit (e) {
        e.preventDefault();
        const newBook = {
            title,
            author,
            date,
            price,
            id: Math.floor(Math.random()*100)
        }
        addBook(newBook);
        setAuthor('');
        setTitle('');
        setDate(0);
        setPrice('');
    }
    return (
        <form onSubmit={formSubmit} className="form-control bg-info container-responsive m-auto">
            <div className="container-responsive bg-info m-auto form-group">
                    <input onChange={handleChange} placeholder="Book Title" type="text" value={title} name="btitle" required className="text-dark form-control" style={{backgroundColor: "#e1e8f0"}}></input>
                    <input onChange={handleChange} placeholder="Name of Author" type="text" value={author} name="bauthor" required className="text-dark form-control" style={{backgroundColor: "#e1e8f0"}}></input>
                    <input onChange={handleChange} type="date" name="bdate" value={date} required className="text-dark form-control" style={{backgroundColor: "#e1e8f0"}}></input>
                    <input onChange={handleChange} placeholder="Price" type="number" value={price} name="bamount" required className="text-dark form-control" style={{backgroundColor: "#e1e8f0"}}></input><br></br>
                    <button className="btn btn-large font-weight-bold btn-warning">ADD BOOK</button>
            </div>
        </form>
    )
}
