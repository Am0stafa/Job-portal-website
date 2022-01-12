import React,{useState, createContext} from 'react'

//* whenever we want to use the information from this context we import this Context 
export const Context = createContext();
//1) import this Context
//   import from react usecontext
        // import React,{useContext} from "react";
        // import {Context} from '../../Context'
//2) write const [a ,seta] = useContext(Context)

//* this provider basically provide the information to diffrent components
export const ContextProvider = (props) => {
    
    const[User, setUser] = useState({})
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState(0);
    const [isSigned, setIsSigned] = useState(-1);
    const [usertype, setUsertype] = useState('a');
    const [userID, setUserID] = useState(-1);
    const [userPass, setUserpass] = useState(1234);
    const [first_name,setFirst_name] = useState('');

    
    
    
    return (
        <Context.Provider  value={[User, setUser,search,setSearch,category,setCategory,isSigned, setIsSigned,usertype, setUsertype,userID, setUserID,userPass, setUserpass,first_name,setFirst_name]}>
            {props.children}
        </Context.Provider>
    )
}
