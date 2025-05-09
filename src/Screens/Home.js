import React,{useEffect,useState} from "react";
import '../styles/Home-styles.css'

const Home =()=>{
    const [currentHour, setCurrentHour] = useState(new Date().toLocaleTimeString());
    const user ='Cecilia'

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHour(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <>
            <div className="Main-Container">
                <p>Hola {user}</p>
                <p>Current Hour: {currentHour}</p>
            </div>
        </>
    )
}

export default Home;