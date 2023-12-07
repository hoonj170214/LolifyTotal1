import { useState, useEffect } from 'react';

function useFetch({ callback, url, dependency }) {
    const [loading, setLoading] = useState(true);
    const fetchInitialData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        callback(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchInitialData();
    }, [dependency]);

    return loading;
}

export default useFetch;