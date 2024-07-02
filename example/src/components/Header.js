import React, { Component } from 'react'

import headdicon from '../images/11Icon.svg';
import headdicon2 from '../images/22Icon.svg';
import globe1 from '../images/globe-01.svg';
import zap from '../images/zap.svg';

export class Header extends Component {
  render() {
    return (
      <>
        
<div className='header__top'>

<div className='header__top'>
<ul>
<li><span className='icon__09'><a href="#"><img src={zap} alt="" /></a>Upgrade Plans</span></li>
<li><a href="#"><img src={globe1} alt="" /></a></li>
<li><a href="#"><img src={headdicon2} alt="" /></a></li>

<li><span className='icon__09__0987'><a href="#"><img src={headdicon} alt="" />Eng</a></span></li>





</ul>

</div>
</div>
      </>
    )
  }
}

export default Header
