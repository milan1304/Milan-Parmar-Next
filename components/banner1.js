import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Banner1 = (props) => {
  return (
    <>
      <div
        id={props.banner1Id}
        className={`banner1-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="banner1-max-width thq-section-max-width">
          <div className="banner1-container2">
            <h2 className="banner1-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="banner1-text2">Welcome to teleportHQ</span>
                </Fragment>
              )}
            </h2>
            <h3 className="banner1-text1 thq-heading-3">
              {props.content1 ?? (
                <Fragment>
                  <span className="banner1-text3">
                    Your destination for cutting-edge web design and development
                    solutions
                  </span>
                </Fragment>
              )}
            </h3>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .banner1-container1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .banner1-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner1-container2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner1-title {
            text-align: center;
          }
          .banner1-text1 {
            text-align: center;
          }
          .banner1-text2 {
            display: inline-block;
          }
          .banner1-text3 {
            display: inline-block;
          }
          .banner1root-class-name {
            background-color: #d9d9d9;
          }
          @media (max-width: 1600px) {
            .banner1root-class-name {
              background-color: #d9d9d9;
            }
          }
          @media (max-width: 479px) {
            .banner1-container1 {
              align-items: center;
              justify-content: flex-start;
            }
            .banner1root-class-name {
              width: auto;
              position: static;
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

Banner1.defaultProps = {
  heading1: undefined,
  rootClassName: '',
  banner1Id: '',
  content1: undefined,
}

Banner1.propTypes = {
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
  banner1Id: PropTypes.string,
  content1: PropTypes.element,
}

export default Banner1
