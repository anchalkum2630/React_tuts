import { useEffect,useState } from "react"

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/a2257dd0ed84a0a3f1b4e550/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
}
export default useCurrencyInfo;