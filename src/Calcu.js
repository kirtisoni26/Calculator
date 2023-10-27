import React, { useState } from "react";
import './calcu.css'
const Calcu = () => {
const [pre, next] = useState('')
const fetchval = (event) => {
  next(pre.concat(event.target.value))
}

return (
        <>
          <form>
           <div className="content">

            <input type="text" id="display" value={pre}></input> <br/>
            <input type="button" value='AC' className="btn" onClick={e=>next('')}></input>
            <input type="button" value='DE' className="btn" onClick={(e)=>next(pre.slice(0, -1))}></input>
            <input type="button" value='.' className="btn" onClick={fetchval}></input>
            <input type="button" value='/' className="btn" onClick={fetchval}></input> <br/>

            <input type="button" value='7' className="btn" onClick={fetchval}></input>
            <input type="button" value='8' className="btn" onClick={fetchval} ></input>
            <input type="button" value='9' className="btn" onClick={fetchval}></input>
            <input type="button" value='*' className="btn" onClick={fetchval}></input> <br/>

            <input type="button" value='4' className="btn" onClick={fetchval}></input>
            <input type="button" value='5' className="btn" onClick={fetchval}></input>
            <input type="button" value='6' className="btn" onClick={fetchval}></input>
            <input type="button" value='-' className="btn" onClick={fetchval}></input>  <br/>

           <input type="button" value='1' className="btn" onClick={fetchval}></input>
            <input type="button" value='2' className="btn" onClick={fetchval}></input>
            <input type="button" value='3' className="btn" onClick={fetchval}></input>
            <input type="button" value='+' className="btn" onClick={fetchval}></input>  <br/>

           <input type="button" className="btn" value='0' onClick={fetchval}></input>
            <input type="button" value='00' className="btn" onClick={fetchval}></input>
            <input type="button" value='=' className="btn" onClick={e=>next(eval(pre))}></input>
            <input type="button" className="btn" value='√' onClick={e=>next(Math.sqrt(pre))}></input>
            
            </div>
    </form>

 </>
    )
}


export default Calcu;