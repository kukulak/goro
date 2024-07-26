import React from 'react'

import { LogoWrapper, AppleMusicWraper } from './AppleMusicBtn.styles.jsx'

const AppleMusicBtn = props => {
  // const manageClick = () => {
  //   console.log('applepressed', props.href)
  // }

  return (
    // <button onClick={manegeClick}>
    //     <img src="" alt="" />
    // </button>
    <AppleMusicWraper target="_blank" href={props.href} className="appleMusic">
      <LogoWrapper src={props.image} alt="appleMusic link" />
    </AppleMusicWraper>
  )
}

export default AppleMusicBtn
