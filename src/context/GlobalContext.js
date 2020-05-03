import React, {createContext, useReducer} from 'react'

const initialState = {
    books: [
        {
            title: "THINGS FALL APART",
            author: "CHINUA ACHEBE",
            date: "02/10/1967",
            price: "250",
            id: 1
        },
        {
            title: "THERE WAS A COUNTRY",
            author: "CHINUA ACHEBE",
            date: "11/28/1978",
            price: "400",
            id: 2
        },
        {
            title: "HOW THE COOKIE CRUMBLES",
            author: "JAMES HARDLEY CHASE",
            date: "05/19/1984",
            price: "126",
            id: 3
        }
    ]
}

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_BOOK":
            return {
                books: [action.payload, ...state.books]
            };

        case "DELETE_BOOK":
            return{
                books: state.books.filter(book => book.id !== action.payload)
            };
        default:
            throw new Error();
    }
}

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function deleteBook (id) {
        dispatch(
            {
                type: "DELETE_BOOK",
                payload: id
            }
        );
    }

    function addBook (book) {
        dispatch(
            {
                type: "ADD_BOOK",
                payload: book
            }
        );
    }

    return (
        <GlobalContext.Provider value={{book: state.books, deleteBook, addBook}}>
            {children}
        </GlobalContext.Provider>
    )
}
