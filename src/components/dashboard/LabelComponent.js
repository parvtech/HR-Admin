import React from 'react'
import "./Label.css"
const LabelComponent = () => {
  return (
<>
    {/* Floating input  */}
    <div class="form">
    <input type="text" id="email" class="form__input" autocomplete="off" placeholder=" "/>
    <label for="email" class="form__label">Email</label>
  </div>
</>
  )
}

export default LabelComponent