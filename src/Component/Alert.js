import React from 'react'

 function Alert(props) {
  const captlize=(word)=>{
    let s=word[0].toUpperCase();
    let newWord=s+word.slice(1);
    return newWord;
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{captlize(props.alert.type)}!</strong> {props.alert.msg}.
  </div>
  )

}
export default Alert
