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
            setError(null);
            setQuote(null);
            setAuthor(null);
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
    <div className="w-full h-lvh flex items-center bg-[#E5E7EB] justify-center">
        <div className="flex p-7 rounded-2xl gap-4 flex-col bg-white">
            <h1 className="text-center text-3xl">Quote Generator</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="bg-[#DC2626]">{error}</p>}
            {quote && <p className="text-[#6B7280]">"{quote}"</p>}
            {author && <p className="text-center">~ {author}</p>}
            <button className="bg-[#2563EB] cursor-pointer text-white rounded-lg p-2" onClick={apiCall}>Generate Quote</button>
        </div>
    </div>
  )
}

export default QuoteGenerator