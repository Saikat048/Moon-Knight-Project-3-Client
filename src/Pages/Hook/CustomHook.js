import { useEffect, useState } from "react"

  

  const usePhones = () => {
    const [phones, setPhones] = useState([])
    useEffect( () => {
      fetch('https://fast-lowlands-57075.herokuapp.com/tools')
        .then(res => res.json())
        .then(data => setPhones(data))
    }, []);

    return [phones, setPhones];
  }

  export default usePhones;