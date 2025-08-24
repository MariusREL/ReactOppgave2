import { useEffect, useState } from "react"
import styles from "./CatFacts.module.css"
export  function CatFacts ()  {
    const [data, setdata] = useState()
    const url ="https://catfact.ninja/facts?limit=5"



useEffect(() => {
    async function getFacts() {
        const response = await fetch(url)
        const responseData = await response.json()
        setdata(responseData)
    }
    getFacts()
}, [])

    
    return (<div>   
        <h1>Cat Facts</h1>
        <ul>
            {!data ? (
                <p>Loading</p>
            ) : (
                data.data.map((fact, idx) => (
                    <li className={styles} key={idx}>{fact.fact}</li>
                ))
            )}
        </ul>

    </div>)
}