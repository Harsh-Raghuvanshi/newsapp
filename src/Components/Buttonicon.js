import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Buttonicon(props) {
  let {types,iconname}=props;
  return (
    <div className='card rounded-4 shadow-lg m-5 d-inline-block enlargeonhover' style={{width:"8rem",height:"8rem"}}>
      <div className='mt-4 px-auto'><FontAwesomeIcon icon={types} className='d-block myicons'/></div>
      <div className='iconname fw-bolder'>{iconname}</div>
    </div>
  )
}
