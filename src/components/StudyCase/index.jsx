/* eslint-disable array-callback-return */
import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import works from '../../data/works';


const StudyCase = () => {
  const { workSlug } = useParams();
  const [currentWork, setCurrentWork] = useState(undefined)
  useEffect(() => {
    const foundWork = works.find((work) => workSlug.includes(work.slug));
    setCurrentWork(foundWork);
  }, [workSlug]);

  return (
    <div id="main">

      {works.reduce((work, i) => {
        if (currentWork !== undefined ) {
        return (
          <div key={i} style={{textAlign: 'center'}}className="work">
            <>
              <h3>{currentWork.title}</h3>

              <br /> {currentWork.description}
            </>
          </div>
        )};
      })}
    </div>
  )

  /*if (currentWork) {
    return (
      <div style={{textAlign: 'center'}}className="work">        
              
          <h3 style={{paddingTop:'50px'}}>{currentWork.title}</h3>

          <br />{currentWork.description}              
            
      </div>  
    )
  }
  else {
    return (
      <p>Il n'y a rien a voir ici!</p>
    );
  };*/
  
};

export default StudyCase;