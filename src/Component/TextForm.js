import React ,{useState} from 'react'


export default function TextForm(props) {
  const handleUpclick=()=>{
    // console.log("UpperCase was Clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Text is in UpperCase" ,'success')
  }
  const handleLoclick=()=>{
    // console.log("LowerCase was Clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Text is in LowerCase" ,'success')
  }
  const handleOnchange=(event)=>{
    // console.log("On Change ");
    setText(event.target.value)
  }
  const handlReverseclick=()=>{
    let newText=text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text Reverse" ,'success')
  }
  const clear=()=>{
    setText('')
    props.showAlert("Text are clear" ,'success')
  }
  const[text,setText]=useState(' Enter text here ');
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
      <h1 >{props.heading } </h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor: props.mode==='light'?'white':'#02121C ',color: props.mode==='light'?'black':'white'}}></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpclick}> Convert to UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoclick}> Convert to LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={handlReverseclick}> Reverse given Sentance</button>
    <button className="btn btn-primary mx-1" onClick={clear}> Clear Text</button>

<h2>Your Text Summry</h2>
<p>{text.split(" ").length-1} Words</p>
<p>{text.length} character</p>
<p>{0.008*(text.split(" ").length-1)} minute </p>
<h2>Preview</h2>
<div>{text.length>0? text: 'Enter Somthing int the Textbox to preview it here'}</div>
</div>
</>
  )
}
