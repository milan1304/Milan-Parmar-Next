import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Timeline41 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline41-max-width thq-section-max-width">
          <div className="timeline41-container11">
            <h2 className="thq-heading-2">
              {props.title1 ?? (
                <Fragment>
                  <span>Long heading going here</span>
                </Fragment>
              )}
            </h2>
            <span className="timeline41-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </span>
                </Fragment>
              )}
            </span>
            <div className="timeline41-container12">
              <button type="button" className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span>Primary action</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button type="button" className="thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span>Seconday action</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="timeline41-timeline-container">
            <div className="timeline41-step1">
              <div className="timeline41-container13">
                <div className="timeline41-container14"></div>
                <div className="timeline41-progress01"></div>
              </div>
              <div className="timeline41-container15">
                <h3 className="thq-heading-3">
                  {props.date1 ?? (
                    <Fragment>
                      <span>23/04/2023</span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline41-text15 thq-heading-3">
                  {props.card1Heading ?? (
                    <Fragment>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card1Content ?? (
                    <Fragment>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline41-container16">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card1Action1 ?? (
                        <Fragment>
                          <span>Primary action</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card1Action2 ?? (
                        <Fragment>
                          <span>Seconday action</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="timeline41-step2">
              <div className="timeline41-container17">
                <div className="timeline41-container18"></div>
                <div className="timeline41-progress02"></div>
              </div>
              <div className="timeline41-container19">
                <h3 className="thq-heading-3">
                  {props.date2 ?? (
                    <Fragment>
                      <span>23/04/2023</span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline41-text20 thq-heading-3">
                  {props.card2Heading ?? (
                    <Fragment>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card2Content ?? (
                    <Fragment>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline41-container20">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card2Action1 ?? (
                        <Fragment>
                          <span>Primary action</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card2Action2 ?? (
                        <Fragment>
                          <span>Seconday action</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="timeline41-step3">
              <div className="timeline41-container21">
                <div className="timeline41-container22"></div>
                <div className="timeline41-progress03"></div>
              </div>
              <div className="timeline41-container23">
                <h3 className="thq-heading-3">
                  {props.date3 ?? (
                    <Fragment>
                      <span>23/04/2023</span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline41-text25 thq-heading-3">
                  {props.card3Heading ?? (
                    <Fragment>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card3Content ?? (
                    <Fragment>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline41-container24">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card3Action1 ?? (
                        <Fragment>
                          <span>Primary action</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card3Action2 ?? (
                        <Fragment>
                          <span>Seconday action</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="timeline41-step4">
              <div className="timeline41-container25">
                <div className="timeline41-container26"></div>
                <div className="timeline41-progress04"></div>
              </div>
              <div className="timeline41-container27">
                <h3 className="thq-heading-3">
                  {props.date4 ?? (
                    <Fragment>
                      <span>23/04/2023</span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline41-text30 thq-heading-3">
                  {props.card4Heading ?? (
                    <Fragment>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card4Content ?? (
                    <Fragment>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline41-container28">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card4Action1 ?? (
                        <Fragment>
                          <span>Primary action</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card4Action2 ?? (
                        <Fragment>
                          <span>Seconday action</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .timeline41-max-width {
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline41-container11 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline41-text11 {
            text-align: left;
          }
          .timeline41-container12 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline41-timeline-container {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline41-step1 {
            display: flex;
            position: relative;
            justify-content: center;
          }
          .timeline41-container13 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline41-container14 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline41-progress01 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline41-container15 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline41-text15 {
            text-align: left;
          }
          .timeline41-container16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline41-step2 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline41-container17 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline41-container18 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline41-progress02 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline41-container19 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline41-text20 {
            text-align: left;
          }
          .timeline41-container20 {
            gap: var(--dl-space-space-unit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline41-step3 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline41-container21 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline41-container22 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline41-progress03 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline41-container23 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline41-text25 {
            text-align: left;
          }
          .timeline41-container24 {
            gap: var(--dl-space-space-unit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline41-step4 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline41-container25 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline41-container26 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline41-progress04 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline41-container27 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline41-text30 {
            text-align: left;
          }
          .timeline41-container28 {
            gap: var(--dl-space-space-unit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
        `}
      </style>
    </>
  )
}

Timeline41.defaultProps = {
  card1Content: undefined,
  card3Action2: undefined,
  action1: undefined,
  card4Action1: undefined,
  card4Content: undefined,
  card1Action1: undefined,
  date2: undefined,
  date4: undefined,
  card1Heading: undefined,
  content1: undefined,
  action2: undefined,
  card1Action2: undefined,
  title1: undefined,
  card2Content: undefined,
  card3Content: undefined,
  card2Action1: undefined,
  card3Heading: undefined,
  card3Action1: undefined,
  card2Heading: undefined,
  date3: undefined,
  card4Action2: undefined,
  card2Action2: undefined,
  card4Heading: undefined,
  date1: undefined,
}

Timeline41.propTypes = {
  card1Content: PropTypes.element,
  card3Action2: PropTypes.element,
  action1: PropTypes.element,
  card4Action1: PropTypes.element,
  card4Content: PropTypes.element,
  card1Action1: PropTypes.element,
  date2: PropTypes.element,
  date4: PropTypes.element,
  card1Heading: PropTypes.element,
  content1: PropTypes.element,
  action2: PropTypes.element,
  card1Action2: PropTypes.element,
  title1: PropTypes.element,
  card2Content: PropTypes.element,
  card3Content: PropTypes.element,
  card2Action1: PropTypes.element,
  card3Heading: PropTypes.element,
  card3Action1: PropTypes.element,
  card2Heading: PropTypes.element,
  date3: PropTypes.element,
  card4Action2: PropTypes.element,
  card2Action2: PropTypes.element,
  card4Heading: PropTypes.element,
  date1: PropTypes.element,
}

export default Timeline41
