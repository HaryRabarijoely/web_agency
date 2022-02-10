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
  if (currentWork) {
    return (
      <div id="main">        
              
          <h3 style={{paddingTop:'50px'}}>{currentWork.title}</h3>

          <p>{currentWork.description}</p>              
            
      </div>  
    )
  }
  else {
    return (
      <p>Il n'y a rien a voir ici!</p>
    );
  };
  
};

export default StudyCase;