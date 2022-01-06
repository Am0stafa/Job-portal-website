import React,{useState, createContext} from 'react'

//* whenever we want to use the information from this context we import this Context 
export const Context = createContext();
//1) import this Context
//2) import from react usecontext
        // import React,{useContext} from "react";
        // import {Context} from '../../Context'
//4) write const [a ,seta] = usecontext(Context)

//* this provider basically provide the information to diffrent components
export const ContextProvider = (props) => {
    
    const[User, setUser] = useState({})
    
    
    
    
    
    
    return (
        <Context.Provider  value={[User, setUser]}>
            {props.children}
        </Context.Provider>
    )
}
