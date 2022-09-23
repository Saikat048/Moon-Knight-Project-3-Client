import { useEffect, useState } from "react"

  

  const usePhones = () => {
    const [phones, setPhones] = useState([])
    useEffect( () => {
      fetch('http://localhost:5000/phones')
        .then(res => res.json())
        .then(data => setPhones(data))
    }, []);

    return [phones, setPhones];
  }

  export default usePhones;