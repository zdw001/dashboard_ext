import { useEffect, useState } from "react";

const useFetch = (url, {method = "GET"}) => {
    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
        fetch(url, {method: method})
            .then((res) => res.json())
            .then((data) => {
                seterror(data.error)
                setdata(data.joke)
                setloading(false)
            })
    }, [url]);

    return { data, loading, error };
};

export default useFetch;