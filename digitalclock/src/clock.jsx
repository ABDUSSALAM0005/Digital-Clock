import { useState, useEffect } from "react";
const wallpaper = "bg-[url('./img/forclock.jpg')]";

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect( () => {
        const intervalid = setInterval (() => {
            setTime(new Date())
        }, 1000);

        return() => {
            clearInterval(intervalid);
        }
    },[])

    function Digitaltime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours > 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${hours}:${minutes}:${seconds} ${meridiem}`
    }

    return(
 <div className={`${wallpaper} bg-cover bg-center h-screen flex flex-col justify-center`}>
  <div className="clock flex justify-center">
  <span className="text-white text-7xl md:text-9xl font-mono text-shadow-2xs backdrop-blur-xs ">{Digitaltime()}</span> 
  </div>
 </div>
    );
}

export default Clock