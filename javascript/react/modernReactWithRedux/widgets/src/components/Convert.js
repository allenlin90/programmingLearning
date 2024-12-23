import React, { useState, useEffect } from 'react';
import axios from 'axios';

const googleTranslateAPI = `AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM`;

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDeboucedtext] = useState('');

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDeboucedtext(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [language, text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: googleTranslateAPI
                }
            });

            setTranslated(data.data.translations[0].translatedText);
        };

        doTranslation();
    }, [language, debouncedText])

    return (
        <div>
            <h1 className="ui header">
                {translated}
            </h1>
        </div>
    );
}

export default Convert