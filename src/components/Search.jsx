import {useState} from 'react';

function Search ({cb = Function.prototype}){
  
  const [value,setValue] = useState('');   
 
  const handlekey = (event)=>{
       if (event.key === 'Enter'){
          handleSubmit();  
       }
   } 
    const handleSubmit = ()=>{
        cb(value);
   }
   const handleChange = (event)=>{
         setValue(event.target.value);
   }

  return <div className="row">
        <div className="input-field col s12">
            <input 
               type="search"
               id="search-field"
               placeholder="search"
               onKeyDown={handlekey}
               onChange={handleChange}
               value={value}  
            />
            <button
             className='btn'
             style={{
                 position: 'absolute',
                 top: 0,
                 right:0,
             }}
             onClick={handleSubmit}
            >Search</button>
        </div>
  </div>
   
}

export {Search};