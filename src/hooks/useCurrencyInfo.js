import {useState, useEffect} from 'react'

export function useCurrencyInfo(currency)
{
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/484a9f63a8d9f4d30d0bb902/latest/${currency}`).
        then((response) => response.json()).
        then((response) => setData(response.conversion_rates))
    }, [currency])

    return data
}

export default useCurrencyInfo;