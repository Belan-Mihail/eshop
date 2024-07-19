import React from 'react'



const Navbar = () => { 
    const [placeholder, setPlaceholder] = React.useState('');

    
  const
    string = 'S hop',
    index = React.useRef(0);

    
  React.useEffect(() => {
    function tick() {
      setPlaceholder(prev => prev + string[index.current]);
      index.current++;
    }

    
       
    if (index.current < string.length- 1) {
      let addChar = setInterval(tick, 500);
      return () => clearInterval(addChar);
    } 
    
    


    if (placeholder.length === 4) {
        setTimeout(() => {
        setPlaceholder('')
        
        
    }, 2000)
    
    }
    
  }, [placeholder]);     

  
    
//   if (placeholder.length === 4) {
//     setTimeout(() => {
//         setPlaceholder('')
        
//     }, 2000)
//   }

  return (
    <>
    <div className='h-20 bg-[#e9e000] flex justify-around items-center w-screen  p-4'>
        <div className='text-5xl font-bold'>
            {placeholder}
        </div>
        <div>
           <span className='m-4'>Sign Up</span>
           <span>Sign In</span>
        </div>
    </div>
    <div className=' bg-slate-950 text-white w-full h-8'>
        

    </div>
    </>
  )
}

export default Navbar