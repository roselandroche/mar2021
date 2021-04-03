import { React, useState, useEffect } from 'react';
import axios from 'axios';


function Quote() {
    const [quote, setQuote] = useState("https://engineeredsys.com/wp-content/uploads/2019/08/download.png");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        axios.get("https://api.quotable.io/random")
            .then((res) => {
                setQuote(res.data.content);
                setAuthor(res.data.author);
            })
    }, [])

    return (
        <div>
            <h2>{quote}</h2>
            <h5>{author}</h5>
        </div>
    )
}

export default Quote
