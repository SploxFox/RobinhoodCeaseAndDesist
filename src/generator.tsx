import React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { generateLetter } from "./generate";

export function Generator() {
    const [name, setName] = useState('');
    const letter = generateLetter({ name });
    const [copiedText, setCopiedText] = useState('Copy to clipboard')

    return <div className='generator'>
        <h1>Robinhood GME Cease and Desist Generator</h1>
        <i>Note: I am not a lawyer; this isn't legal advice.</i>
        <br />
        <input placeholder='Full name' value={name} onChange={el => setName(el.target.value)} />
        { name ? <button className='copyButton' onClick={() => {
            navigator.clipboard.writeText(letter);
            setCopiedText('Copied!')
        }}>📋 {copiedText}</button> : ''}
        <hr />
        <ReactMarkdown className='letter'>
            { name ? letter : 'Please input your full name to generate the letter.'}
        </ReactMarkdown>
        
    </div>
}