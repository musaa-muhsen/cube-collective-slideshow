import React from 'react';


const Pagination = ({ state,setState,slides}) => {
    
    function plusOne(i) {
        return i + 1;
    }
    return ( 
        <div className="dots-container">
           {slides.map((slide, i) => (
    //   <Dot key={slide} active={activeSlide === i} />
         <span 
         className={i === state ? plusOne(i) + ' dot active' : 'dot'}
         onClick={() => setState(i)}

         key={slide + i}>
             {plusOne(i)}
        </span>
    ))}
        </div>
     );
}
 
export default Pagination;