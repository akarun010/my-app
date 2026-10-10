import React, { useEffect, useState } from 'react'
import axios from '../Api/getInstance'

const QuoteGenerator = () => {
    const [quote, setQuote] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [author, setAuthor] = useState(null);
    async function apiCall() {
        try {
            setLoading(true);
            const response = await axios.get("/quotes/random");
            setQuote(response.data.quote ?? response.data);
            setAuthor(response.data.author)
        } catch (error) {
            setError("Failed to fetch quote. Try again.");
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        apiCall() }, []);

  return (
    <div>
        <h1>Quote Generator</h1>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <p>{quote}</p>
        <button onClick={apiCall}>Generate Quote</button>
    </div>
  )
}

export default QuoteGenerator