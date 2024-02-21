import React, {useState} from 'react'

export default function TextForm(props) {
    const HandleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+ text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showalert("Uppercase was clicked","success")
      }
      
      const handleLoClick=()=>{
        console.log("Lowercase was clicked"+ text);
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showalert("Lowercase was clicked","success")
    }
    
    const [text,setText]=useState('Enter text here');

    return (
      <>
    <div className='container' style={{color:props.mode==='dark'?'white' :'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="mybox" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={HandleOnChange} style={{backgroundColor:props.mode==='dark'?'grey' :'white',color:props.mode==='dark'?'white' :'black'}} id="mybox" rows="6"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white' :'black'}}>
      <h1>Your text sumary</h1>
      <p>{text.split(" ").length} words and {text.length} chars</p>
      <p>{0.08*text.split(" ").length} words read in minutes</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
      </>
  )
}
