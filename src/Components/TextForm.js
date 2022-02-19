import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    let newText = text.split(/[ ] +/);
    newText= newText.join(" ")
    let words = newText.split(" ").length;

    if (text[text.length - 1] === " " || text.length === 0)
        words = words - 1;

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Upper Case Successfully','success');
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower Case Successfully','success');
    }

    const handleTiClick = () => {
        let newText = toTitleCase(text);
        setText(newText);
        props.showAlert('Converted to Title Case Successfully','success');
    }

    const handleClClick = () => {
        setText("");
        props.showAlert('Text Cleared Successfully','success');
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "));
        props.showAlert('Extra Spaces Removed Successfully','success');
    }

    function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <div >
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>{props.heading}</h3>
                <div className="mb-3 my3 mx3">
                    <textarea className="form-control" placeholder="Enter your text here" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black'  }} value={text} id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleTiClick}>Convert to TitleCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your Text Summary</h3>
                <p>{words} words  and  {text.length} characters</p>
                <p>{0.0008 * words} minutes required to read</p>
                <h3>Preview Your Text</h3>
                <p>{text.length? text : 'Enter text to preview'}</p>
            </div>
        </div>

    )
}
