import React from 'react';


const Scroll = (props) =>{
  return(
    <div style={{overflowY:'scroll', border : '2px solid #34495e ', height: '500px'}}>
    {props.children}

    </div>
  )
};

export default Scroll;
