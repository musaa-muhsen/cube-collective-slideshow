import React, {useState, useEffect, useRef} from 'react';
//import {Data} from './Data';
import Pagination from './Pagination';
import rightIcon from '../images/right-icon.svg';
import leftIcon from '../images/left-icon.svg';



const Slider = ({slides}) => {
    console.log(slides)

    const [state, setState] = useState(0);
    console.log(state)
    
    const length = slides.length;
    //let interval = null
    // interval = setInterval(() => {
    //     setState((length - 1)++);
    // }, 2000);

     // useRef ==============================================================
     const autoPlayRef = useRef();
     //console.log(autoPlayRef.current);

     useEffect(() => {
         autoPlayRef.current = nextSlide;
     });

     useEffect(() => {
        const play = () => {
          autoPlayRef.current()
        }
    
        const interval = setInterval(play, 5000)
        return () => clearInterval(interval)
      }, [])

    const nextSlide = () => {
        setState(state === length - 1 ? 0 : state + 1)
    }
    const prevSlide = () => {
        setState(state === 0 ? length - 1 : state - 1)
    }

    // if (!Array.isArray(slides) || slides.length <= 0) {
    //     return null;
    // }
   



    return (
        <section>
       <div className="slider-container">
           <div className="left-container">
               <div className="left-arrow arrow"><img src={leftIcon } alt="left arrow" onClick={prevSlide} /></div>
             </div>
        <div className="slider">
            {
                slides.map((s, i) => {
                    return (
                        <div className={ s.orientation + ' ' + (i === state ? 'slide active' : 'slide') } key={i}>
                            {i === state && <img src={s.image}  alt="image" className={'image'} /> }
                            {i === state && <h1>{s.title}</h1>}
                        </div>
                    )

                })
            }
        </div>
        <div className="right-container">
              <div className="right-arrow arrow"><img src={rightIcon} alt="right arrow" onClick={nextSlide} /></div>
        </div>
      

        </div>

       <div className="pagination-container"><Pagination state={state} setState={setState} slides={slides}/></div> 

        </section>
    )
}

export default Slider
