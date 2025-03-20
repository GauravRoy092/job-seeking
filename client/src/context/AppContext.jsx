import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) =>{
    const value = {
        // then we can access those function and variable in whole project

    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}