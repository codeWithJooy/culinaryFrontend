import React from 'react'
import "./Extra.css"

const Extra=()=>{
    return(
        <div className="extraSection">
        <div className="extraHolder">
          <div className="extraHeader">
            <div className="extraItemName">
              <p>Butter Masala Dosa(1 pcs)</p>
            </div>
            <div className="extraTitle">
              <p>Customise as per your taste</p>
            </div>
            <div className="extraCross">
              <img src="Assets/main/close.png" />
            </div>
          </div>
          <div className="extraAccom">
            <div className="extraAccomHeader">
              <p>Choice of Accompaniment</p>
            </div>
            <div className="accomHolder">
              <div className="accomSection">
                <div className="accomType">
                  <img src="Assets/main/nonVeg.png" />
                </div>
                <div className="accomName">
                  <p>Special Dry Coconut Chutney</p>
                </div>
                <div className="accomRate">
                  <p>Rs 35</p>
                </div>
                <div className="accomCheck">
                  <input type="checkbox" id="customCheckbox" />
                  <label htmlFor="customCheckbox"></label>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="extraAddFinal">
            <div className="extraCounter">

            </div>
            <div className="extraAddSection">
              
            </div>
          </div>
      </div>
    )
}

export default Extra;