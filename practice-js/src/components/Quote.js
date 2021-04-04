import { React, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const QuoteText = styled.h2`
    width: 75%;
    margin: 0 auto;
    border: 5px solid #fff;
    border-radius: 12px;
    padding: 100px 20px;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
`;

const QuoteAuthor = styled.h5`
    margin: 0 auto;
    width: 20%;
    font-size: 22px;
    padding-top: 12px;
    text-align: center;
`;

const QuotePage = styled.div`
    background-color: #D9CCAA;
    padding: 200px 100px;
`;

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
        <QuotePage>
            <QuoteText>{quote}</QuoteText>
            <QuoteAuthor>{author}</QuoteAuthor>
        </QuotePage>
    )
}

export default Quote
