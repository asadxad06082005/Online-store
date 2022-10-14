import React, {useState, createContext, useEffect} from 'react';


const Context = createContext()

const ConTextProvider = ({children}) => {
    const [array, setArray] = useState([])


    const url = "https://course-api.com/react-store-products"
    const getDate = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setArray(data)
    }

    useEffect(() => {
        getDate()
    }, [])

    return (
        <Context.Provider value={{array, setArray}}>
            {children}
        </Context.Provider>
    );
};

export {ConTextProvider, Context};