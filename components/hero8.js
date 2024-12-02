import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Hero8 = (props) => {
  return (
    <>
      <div className="hero8-header26 thq-section-padding">
        <div className="hero8-max-width thq-flex-column thq-section-max-width">
          <div className="hero8-column">
            <div className="hero8-content">
              <h1 className="hero8-text1 thq-heading-1">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="hero8-text6">
                      Catchy and impactful hero headline
                    </span>
                  </Fragment>
                )}
              </h1>
              <p className="hero8-text2 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="hero8-text5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="hero8-actions">
                <button className="thq-button-filled">
                  <span className="thq-body-small">
                    {props.action1 ?? (
                      <Fragment>
                        <span className="hero8-text8">Main action</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button className="thq-button-outline">
                  <span className="thq-body-small">
                    {props.action2 ?? (
                      <Fragment>
                        <span className="hero8-text7">Secondary action</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero8-header26 {
            gap: var(--dl-space-space-twounits);
          }
          .hero8-max-width {
            align-self: center;
          }
          .hero8-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero8-content {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero8-text1 {
            text-align: center;
          }
          .hero8-text2 {
            text-align: center;
          }
          .hero8-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero8-text5 {
            display: inline-block;
          }
          .hero8-text6 {
            display: inline-block;
          }
          .hero8-text7 {
            display: inline-block;
          }
          .hero8-text8 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Hero8.defaultProps = {
  content1: undefined,
  heading1: undefined,
  action2: undefined,
  action1: undefined,
}

Hero8.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  action2: PropTypes.element,
  action1: PropTypes.element,
}

export default Hero8
