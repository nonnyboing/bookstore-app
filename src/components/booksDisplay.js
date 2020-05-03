import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext';

export const BooksDisplay = ({bok}) => {
    const {deleteBook} = useContext(GlobalContext);
    //const [key, setKey] = useState('');

    function handleDelete(e) {
        const keyid = e.target.id;
        //setKey(e.target.id);
        deleteBook(Number(keyid));
        //setKey(null);
    }

    return (
        <tr style={{ fontSize: "11px"}}>
            <td> {bok.title} </td>
            <td> {bok.author} </td>
            <td> {bok.date} </td>
            <td> {bok.price} </td>
            <td><button onClick={handleDelete} id={bok.id} className="btn btn-small btn-info" >buy</button></td>
        </tr>
    )
}
