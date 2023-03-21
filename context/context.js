import { createContext, useState } from "react";

export const YananoContext = createContext({ cartItems: [], setCartItems: ([]) => { } });

function Context({ children }) {
    const [cartItems, setCartItems] = useState([]);

    return (
        <YananoContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </YananoContext.Provider>
    );
}
export default Context