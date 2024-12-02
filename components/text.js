import React from 'react'

import PropTypes from 'prop-types'

const Text = (props) => {
  return (
    <>
      <div className={`text-container ${props.rootClassName} `}>
        <p className="text-text10 thq-body-large">
          <span>Milan Parmar</span>
          <br></br>
          <br></br>
          <span>IT Infrastructure and Systems Engineer</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>226-346-2570</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>Email:</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>info@mysite.com</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>Address:</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>500 Terry Francine Street</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>San Francisco, CA 94158</span>
        </p>
      </div>
      <style jsx>
        {`
          .text-container {
            display: flex;
            position: relative;
          }
          .text-text10 {
            width: 602px;
            height: 663px;
            display: block;
            align-self: flex-end;
            text-align: center;
            transition: 0.3s;
            background-color: rgba(217, 217, 217, 0.97);
          }
        `}
      </style>
    </>
  )
}

Text.defaultProps = {
  rootClassName: '',
}

Text.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text
