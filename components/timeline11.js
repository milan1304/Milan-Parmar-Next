import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Timeline11 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline11-max-width thq-section-max-width">
          <div className="timeline11-container11">
            <h2 className="timeline11-text10 thq-heading-2">
              {props.title1 ?? (
                <Fragment>
                  <span className="timeline11-text33">Company Founded</span>
                </Fragment>
              )}
            </h2>
            <span className="timeline11-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="timeline11-text37">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </span>
                </Fragment>
              )}
            </span>
            <div className="timeline11-container12">
              <button type="button" className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="timeline11-text32">Primary action</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button type="button" className="thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="timeline11-text29">Seconday action</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="timeline11-timeline-container">
            <div className="timeline11-step1">
              <div className="timeline11-container13">
                <div className="timeline11-container14"></div>
                <div className="timeline11-progress01"></div>
              </div>
              <div className="timeline11-container15">
                <h3 className="thq-heading-3">
                  {props.card1Date ?? (
                    <Fragment>
                      <span className="timeline11-text31">January 2010</span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline11-text15 thq-heading-3">
                  {props.card1Heading ?? (
                    <Fragment>
                      <span className="timeline11-text39">
                        Inception of teleportHQ
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card1Content ?? (
                    <Fragment>
                      <span className="timeline11-text27">
                        teleportHQ was founded with a vision to revolutionize
                        web development and design processes.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="timeline11-step2">
              <div className="timeline11-container16">
                <div className="timeline11-container17"></div>
                <div className="timeline11-progress02"></div>
              </div>
              <div className="timeline11-container18">
                <h3 className="thq-heading-3">
                  {props.card2Date ?? (
                    <Fragment>
                      <span className="timeline11-text40">12/10/2023</span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline11-text18 thq-heading-3">
                  {props.card2Heading ?? (
                    <Fragment>
                      <span className="timeline11-text26">
                        Second timeline event
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="timeline11-text19 thq-body-small">
                  {props.card2Content ?? (
                    <Fragment>
                      <span className="timeline11-text35">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="timeline11-step3">
              <div className="timeline11-container19">
                <div className="timeline11-container20"></div>
                <div className="timeline11-progress03"></div>
              </div>
              <div className="timeline11-container21">
                <h3 className="thq-heading-3">
                  {props.card3Date ?? (
                    <Fragment>
                      <span className="timeline11-text30">25/01/2024</span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline11-text21 thq-heading-3">
                  {props.card3Heading ?? (
                    <Fragment>
                      <span className="timeline11-text38">
                        Third timeline event
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card3Content ?? (
                    <Fragment>
                      <span className="timeline11-text36">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="timeline11-step4">
              <div className="timeline11-container22">
                <div className="timeline11-container23"></div>
                <div className="timeline11-progress04"></div>
              </div>
              <div className="timeline11-container24">
                <h3 className="thq-heading-3">
                  {props.card4Date ?? (
                    <Fragment>
                      <span className="timeline11-text28">04/07/2024</span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline11-text24 thq-heading-3">
                  {props.card4Heading ?? (
                    <Fragment>
                      <span className="timeline11-text41">
                        Fourth timeline event
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="timeline11-text25 thq-body-small">
                  {props.card4Content ?? (
                    <Fragment>
                      <span className="timeline11-text34">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .timeline11-max-width {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline11-container11 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .timeline11-text10 {
            text-align: center;
          }
          .timeline11-text11 {
            text-align: center;
          }
          .timeline11-container12 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline11-timeline-container {
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline11-step1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .timeline11-container13 {
            flex: 1;
            left: 0;
            right: 0;
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline11-container14 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-progress01 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container15 {
            gap: var(--dl-space-space-unit);
            width: 50%;
            display: flex;
            align-items: flex-start;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline11-text15 {
            text-align: left;
          }
          .timeline11-step2 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline11-container16 {
            flex: 1;
            left: 0;
            right: 0;
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline11-container17 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-progress02 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container18 {
            gap: var(--dl-space-space-unit);
            width: 50%;
            display: flex;
            align-items: flex-end;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline11-text18 {
            text-align: right;
          }
          .timeline11-text19 {
            text-align: right;
          }
          .timeline11-step3 {
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .timeline11-container19 {
            flex: 1;
            left: 0;
            right: 0;
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline11-container20 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-progress03 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container21 {
            gap: var(--dl-space-space-unit);
            width: 50%;
            display: flex;
            align-items: flex-start;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline11-text21 {
            text-align: left;
          }
          .timeline11-step4 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline11-container22 {
            flex: 1;
            left: 0;
            right: 0;
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline11-container23 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-progress04 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container24 {
            gap: var(--dl-space-space-unit);
            width: 50%;
            display: flex;
            align-items: flex-end;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline11-text24 {
            text-align: right;
          }
          .timeline11-text25 {
            text-align: right;
          }
          .timeline11-text26 {
            display: inline-block;
          }
          .timeline11-text27 {
            display: inline-block;
          }
          .timeline11-text28 {
            display: inline-block;
          }
          .timeline11-text29 {
            display: inline-block;
          }
          .timeline11-text30 {
            display: inline-block;
          }
          .timeline11-text31 {
            display: inline-block;
          }
          .timeline11-text32 {
            display: inline-block;
          }
          .timeline11-text33 {
            display: inline-block;
          }
          .timeline11-text34 {
            display: inline-block;
          }
          .timeline11-text35 {
            display: inline-block;
          }
          .timeline11-text36 {
            display: inline-block;
          }
          .timeline11-text37 {
            display: inline-block;
          }
          .timeline11-text38 {
            display: inline-block;
          }
          .timeline11-text39 {
            display: inline-block;
          }
          .timeline11-text40 {
            display: inline-block;
          }
          .timeline11-text41 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Timeline11.defaultProps = {
  card2Heading: undefined,
  card1Content: undefined,
  card4Date: undefined,
  action2: undefined,
  card3Date: undefined,
  card1Date: undefined,
  action1: undefined,
  title1: undefined,
  card4Content: undefined,
  card2Content: undefined,
  card3Content: undefined,
  content1: undefined,
  card3Heading: undefined,
  card1Heading: undefined,
  card2Date: undefined,
  card4Heading: undefined,
}

Timeline11.propTypes = {
  card2Heading: PropTypes.element,
  card1Content: PropTypes.element,
  card4Date: PropTypes.element,
  action2: PropTypes.element,
  card3Date: PropTypes.element,
  card1Date: PropTypes.element,
  action1: PropTypes.element,
  title1: PropTypes.element,
  card4Content: PropTypes.element,
  card2Content: PropTypes.element,
  card3Content: PropTypes.element,
  content1: PropTypes.element,
  card3Heading: PropTypes.element,
  card1Heading: PropTypes.element,
  card2Date: PropTypes.element,
  card4Heading: PropTypes.element,
}

export default Timeline11
