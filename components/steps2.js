import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Steps2 = (props) => {
  return (
    <>
      <div className="steps2-container10 thq-section-padding">
        <div className="steps2-max-width thq-section-max-width">
          <div className="steps2-container11 thq-grid-2">
            <div className="steps2-section-header1">
              <h2 className="thq-heading-2">
                Discover the Power of Our Products
              </h2>
              <p className="thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <div className="steps2-actions1">
                <button className="thq-button-animated thq-button-filled">
                  <span className="thq-body-small">Main action</span>
                </button>
              </div>
            </div>
            <div className="steps2-container12">
              <div className="steps2-container13 thq-card">
                <h2 className="thq-heading-2">
                  {props.step1Title ?? (
                    <Fragment>
                      <span className="steps2-text44">
                        Assessment of IT Infrastructure
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text14 thq-body-small">
                  {props.step1Description ?? (
                    <Fragment>
                      <span className="steps2-text55">
                        Evaluate current IT setup, identify strengths and
                        weaknesses, and propose improvements for enhanced
                        performance and security.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text15 thq-heading-3">01</label>
              </div>
              <div className="steps2-container14 thq-card">
                <h2 className="thq-heading-2">
                  {props.step2Title ?? (
                    <Fragment>
                      <span className="steps2-text53">
                        Implementation of Cloud Services
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text17 thq-body-small">
                  {props.step2Description ?? (
                    <Fragment>
                      <span className="steps2-text41">
                        Deploy and configure cloud services such as Azure and
                        Office 365 to optimize resources and enable scalability.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text18 thq-heading-3">02</label>
              </div>
              <div className="steps2-container15 thq-card">
                <h2 className="thq-heading-2">
                  {props.step3Title ?? (
                    <Fragment>
                      <span className="steps2-text49">
                        Network Administration
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text20 thq-body-small">
                  {props.step3Description ?? (
                    <Fragment>
                      <span className="steps2-text48">
                        Manage network infrastructure, ensure smooth operations,
                        troubleshoot connectivity issues, and implement
                        necessary upgrades.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text21 thq-heading-3">03</label>
              </div>
              <div className="steps2-container16 thq-card">
                <h2 className="thq-heading-2">
                  {props.step4Title ?? (
                    <Fragment>
                      <span className="steps2-text43">
                        Security Policy Implementation
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text23 thq-body-small">
                  {props.step4Description ?? (
                    <Fragment>
                      <span className="steps2-text46">
                        Develop and enforce security policies to safeguard data,
                        systems, and networks from potential cyber threats.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text24 thq-heading-3">04</label>
              </div>
            </div>
          </div>
        </div>
        <div className="steps2-container17 thq-grid-2">
          <div className="steps2-section-header2">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps2-actions2">
              <button className="thq-button-animated thq-button-filled">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps2-container18">
            <div className="steps2-container19 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title1 ?? (
                  <Fragment>
                    <span className="steps2-text40">
                      Assessment of IT Infrastructure
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text29 thq-body-small">
                {props.step1Description1 ?? (
                  <Fragment>
                    <span className="steps2-text45">
                      Evaluate current IT setup, identify strengths and
                      weaknesses, and propose improvements for enhanced
                      performance and security.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text30 thq-heading-3">01</label>
            </div>
            <div className="steps2-container20 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title1 ?? (
                  <Fragment>
                    <span className="steps2-text50">
                      Implementation of Cloud Services
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text32 thq-body-small">
                {props.step2Description1 ?? (
                  <Fragment>
                    <span className="steps2-text42">
                      Deploy and configure cloud services such as Azure and
                      Office 365 to optimize resources and enable scalability.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text33 thq-heading-3">02</label>
            </div>
            <div className="steps2-container21 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title1 ?? (
                  <Fragment>
                    <span className="steps2-text54">
                      Network Administration
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text35 thq-body-small">
                {props.step3Description1 ?? (
                  <Fragment>
                    <span className="steps2-text52">
                      Manage network infrastructure, ensure smooth operations,
                      troubleshoot connectivity issues, and implement necessary
                      upgrades.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text36 thq-heading-3">03</label>
            </div>
            <div className="steps2-container22 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title1 ?? (
                  <Fragment>
                    <span className="steps2-text51">
                      Security Policy Implementation
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text38 thq-body-small">
                {props.step4Description1 ?? (
                  <Fragment>
                    <span className="steps2-text47">
                      Develop and enforce security policies to safeguard data,
                      systems, and networks from potential cyber threats.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text39 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps2-container10 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps2-max-width {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps2-container11 {
            align-items: start;
          }
          .steps2-section-header1 {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps2-actions1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .steps2-container12 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps2-container13 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text14 {
            text-align: center;
          }
          .steps2-text15 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container14 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text17 {
            text-align: center;
          }
          .steps2-text18 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container15 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text20 {
            text-align: center;
          }
          .steps2-text21 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container16 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text23 {
            text-align: center;
          }
          .steps2-text24 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container17 {
            align-items: start;
          }
          .steps2-section-header2 {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps2-actions2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .steps2-container18 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps2-container19 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text29 {
            text-align: center;
          }
          .steps2-text30 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container20 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text32 {
            text-align: center;
          }
          .steps2-text33 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container21 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text35 {
            text-align: center;
          }
          .steps2-text36 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container22 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text38 {
            text-align: center;
          }
          .steps2-text39 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-text40 {
            display: inline-block;
          }
          .steps2-text41 {
            display: inline-block;
          }
          .steps2-text42 {
            display: inline-block;
          }
          .steps2-text43 {
            display: inline-block;
          }
          .steps2-text44 {
            display: inline-block;
          }
          .steps2-text45 {
            display: inline-block;
          }
          .steps2-text46 {
            display: inline-block;
          }
          .steps2-text47 {
            display: inline-block;
          }
          .steps2-text48 {
            display: inline-block;
          }
          .steps2-text49 {
            display: inline-block;
          }
          .steps2-text50 {
            display: inline-block;
          }
          .steps2-text51 {
            display: inline-block;
          }
          .steps2-text52 {
            display: inline-block;
          }
          .steps2-text53 {
            display: inline-block;
          }
          .steps2-text54 {
            display: inline-block;
          }
          .steps2-text55 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Steps2.defaultProps = {
  step1Title1: undefined,
  step2Description: undefined,
  step2Description1: undefined,
  step4Title: undefined,
  step1Title: undefined,
  step1Description1: undefined,
  step4Description: undefined,
  step4Description1: undefined,
  step3Description: undefined,
  step3Title: undefined,
  step2Title1: undefined,
  step4Title1: undefined,
  step3Description1: undefined,
  step2Title: undefined,
  step3Title1: undefined,
  step1Description: undefined,
}

Steps2.propTypes = {
  step1Title1: PropTypes.element,
  step2Description: PropTypes.element,
  step2Description1: PropTypes.element,
  step4Title: PropTypes.element,
  step1Title: PropTypes.element,
  step1Description1: PropTypes.element,
  step4Description: PropTypes.element,
  step4Description1: PropTypes.element,
  step3Description: PropTypes.element,
  step3Title: PropTypes.element,
  step2Title1: PropTypes.element,
  step4Title1: PropTypes.element,
  step3Description1: PropTypes.element,
  step2Title: PropTypes.element,
  step3Title1: PropTypes.element,
  step1Description: PropTypes.element,
}

export default Steps2
