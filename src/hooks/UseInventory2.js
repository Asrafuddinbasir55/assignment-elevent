import { useEffect, useState } from "react"

const UseInventory2 = ()=>{
    const[inventory,setInventory] = useState([]);
    useEffect(()=>{
        fetch('https://serene-sands-01817.herokuapp.com/product2')
        .then(res=>res.json())
        .then(data=> setInventory(data));
    },[]);
    return [inventory,setInventory];
}
export default UseInventory2;