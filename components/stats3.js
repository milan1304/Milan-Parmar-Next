import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Stats3 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="stats3-max-width thq-section-max-width">
          <div className="stats3-container2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="stats3-text18">
                    Business value of teleportHQ
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="stats3-text26">Our results in numbers</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="stats3-container3">
            <div className="stats3-container4">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats3-text25">99%</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats3-text19">Customer satisfaction</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats3-container5">
              <h2 className="thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats3-text24">44%</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats3-text21">Active users</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats3-container6">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats3-text22">99%</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats3-text20">Customer satisfaction</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats3-container7">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats3-text27">44%</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats3-text23">Active users</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .stats3-max-width {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .stats3-container2 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .stats3-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
          }
          .stats3-container4 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .stats3-container5 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
          }
          .stats3-container6 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .stats3-container7 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
          }
          .stats3-text18 {
            display: inline-block;
          }
          .stats3-text19 {
            display: inline-block;
          }
          .stats3-text20 {
            display: inline-block;
          }
          .stats3-text21 {
            display: inline-block;
          }
          .stats3-text22 {
            display: inline-block;
          }
          .stats3-text23 {
            display: inline-block;
          }
          .stats3-text24 {
            display: inline-block;
          }
          .stats3-text25 {
            display: inline-block;
          }
          .stats3-text26 {
            display: inline-block;
          }
          .stats3-text27 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Stats3.defaultProps = {
  heading1: undefined,
  stat1Description: undefined,
  stat3Description: undefined,
  stat2Description: undefined,
  stat3: undefined,
  stat4Description: undefined,
  stat2: undefined,
  stat1: undefined,
  content1: undefined,
  stat4: undefined,
}

Stats3.propTypes = {
  heading1: PropTypes.element,
  stat1Description: PropTypes.element,
  stat3Description: PropTypes.element,
  stat2Description: PropTypes.element,
  stat3: PropTypes.element,
  stat4Description: PropTypes.element,
  stat2: PropTypes.element,
  stat1: PropTypes.element,
  content1: PropTypes.element,
  stat4: PropTypes.element,
}

export default Stats3
