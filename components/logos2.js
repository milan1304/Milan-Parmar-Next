import React from 'react'

import PropTypes from 'prop-types'

const Logos2 = (props) => {
  return (
    <>
      <div className="logos2-container1 thq-section-padding">
        <div className="logos2-max-width thq-section-max-width">
          <div className="logos2-container2 thq-grid-5"></div>
        </div>
      </div>
      <style jsx>
        {`
          .logos2-container1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: 1566px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .logos2-max-width {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .logos2-container2 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
        `}
      </style>
    </>
  )
}

Logos2.defaultProps = {
  imageSrc3: 'b222cba0-eccc-4e9d-92fc-a33d745720d3',
}

Logos2.propTypes = {
  imageSrc3: PropTypes.string,
}

export default Logos2
