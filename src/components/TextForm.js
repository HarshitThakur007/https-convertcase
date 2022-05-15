import React,{ useState } from 'react';


export default function TextForm(props) {
  const handelupText = () => {
    let newText = Text.toUpperCase();
    setText(newText)
  }
  const handelloText = () => {
    let newText = Text.toLowerCase();
    setText(newText)
  }
  const searchText = () => {
    console.log("Here is the searched text");
    let pos = Text.search("Hello");
    setSearch(pos);
    
  }
  const handelOnChange = (event) =>{
    setText(event.target.value)
  }
  const handelOnSearch = (event) =>{
    setSearch(event.target.value)
  }
  const [Text, setText] = useState("");
  const [Search, setSearch] = useState("");
  return (
    <>
    <div > 
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className='form-control bg-dark text-light'  value={Text} onChange={handelOnChange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handelupText}  >Convert to upper case</button>
      <button className="btn btn-primary mx-1" onClick={handelloText}  >Convert to Lower case</button>
      <button className="btn btn-primary mx-1" onClick={searchText}  >Search the Position</button>
      <input className=" mx-1 bg-dark text-light" type="search" value={Search} onChange={handelOnSearch} />
    </div>
    <div className="container my-3">
      <h2>More info about the text</h2>
      <p>No of character in the text {Text.length}</p>
      <p>No of words in the text {Text.split(" ").length} </p>
      <p>Time to read the text {Text.length * 0.24} secs </p>


    </div>
    </>
  )
}
