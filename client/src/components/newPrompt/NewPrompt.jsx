import React, { useEffect, useRef } from 'react'
import './newPrompt.css'
const NewPrompt = () => {
    const endref = useRef(null);
  useEffect( () => {
    endref.current.scrollIntoView({behavior : "smooth"})
  }, [] )
  return (
    <>
    <div className="endChat" ref={endref}></div>
    <div className="newPrompt">
        <form className="newForm">
            <label htmlFor="file">
                <img src="/attachment.png" alt="attachment" />
            </label>
            <input type="file" name="file" id="file" multiple = {false} hidden />
            <input type="text" placeholder='Ask me anything...' />
            <button><img src="/arrow.png" alt="arrow" /></button>
        </form>
    </div>
    </>
  )
}

export default NewPrompt