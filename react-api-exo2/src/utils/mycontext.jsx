import { createContext, useEffect, useState } from "react";
export const Mycontext = createContext();
export const MyProvider = ({ children }) => {
    const [coins, setCoins] = useState([]);
    const [refrech , setRefrech] = useState(false);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then(Response => Response.json())
        .then(data => setCoins(data))
    },[refrech]);
    console.log(coins);
    console.log(refrech);
    
    
    return (
        <Mycontext.Provider value={{coins ,refrech,setRefrech}}>
            {children}
        </Mycontext.Provider>
    )
}