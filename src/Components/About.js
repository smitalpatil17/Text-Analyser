import React, { useState } from 'react'
// import { useState } from 'react/cjs/react.development'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // })

    
    
    //     if (props.mode === 'light') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',

    //         })
    //     } else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: '#343a40',
    //             // border: '1px solid white'
    //         })
    //     }

    let setMyStyle={color: props.mode === 'light' ? 'black ': 'white', backgroundColor:props.mode === 'light' ? 'white ': '#343a40', border: props.mode === 'light' ? '1px solid white' : '1px solid white'}

    return (
      
        <div class="card container"  style= {setMyStyle}>
            <div class="card-body " >
                <h3 class="card-title">About Text Analyser</h3>
                Text Analyser is a website which will help to analyse and manipulate entered text using provided options based on which 
                text is modified. Apart from all the manipulations, it gives preview of the entered text. Text Analyser will also count 
                and display number of words and characters from the text. Based on average time required to read a word, Text Analyser 
                also gives time required to read the entered text. Following are the manipulation actions that are provided by Text Analyser
            </div>
            <div class="card-body" >
                <div class="accordion accordion-flush" id="accordionFlushExample" >
                    <div class="accordion-item" style= {setMyStyle}>
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={setMyStyle}>
                                Convert to UpperCase
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">This option will convert entered text to upper case. It will display alert informing that text is Converted to upper case successfully.</div>
                        </div>
                    </div>
                    <div class="accordion-item" style= {setMyStyle}>
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style= {setMyStyle}>
                            Convert to LowerCase
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">This option will convert entered text to lower case. It will display alert informing that text is Converted to lower case successfully.</div>
                        </div>
                    </div>
                    <div class="accordion-item" style= {setMyStyle}>
                        <h2 class="accordion-header" id="flush-headingThree" >
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style= {setMyStyle}>
                            Convert to TitleCase
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">This option will convert entered text to title case i.e., first letter of all words of given text are capitalized and all other letters are in lower case. It will display alert informing that text is Converted to title case successfully.</div>
                        </div>
                    </div>
                    <div class="accordion-item" style= {setMyStyle}>
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo " style= {setMyStyle}>
                            Clear text
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">This option will clear all the entered text and make textbox empty. It will display alert informing that text is cleared successfully.</div>
                        </div>
                    </div>
                    <div class="accordion-item" style= {setMyStyle}>
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style= {setMyStyle}>
                            Remove Extra Spaces
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">This option will remove all the extra spaces in the entered text. It will display alert informing that all extra spaces in text are removed successfully.</div>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}
