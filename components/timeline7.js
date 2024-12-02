import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Timeline7 = (props) => {
  return (
    <>
      <div
        id={props.timeline7Id}
        className={`timeline7-container10 thq-section-padding ${props.rootClassName} `}
      >
        <div className="timeline7-max-width thq-section-max-width">
          <div className="timeline7-container11">
            <h2 className="timeline7-text10 thq-heading-2">
              {props.title1 ?? (
                <Fragment>
                  <span className="timeline7-text35">EDUCATION</span>
                </Fragment>
              )}
            </h2>
            <div className="timeline7-container12"></div>
          </div>
          <div className="timeline7-timeline-container">
            <div className="timeline7-step1">
              <div className="timeline7-container13">
                <div className="timeline7-container14"></div>
                <div className="timeline7-progress01"></div>
              </div>
              <animate-on-reveal
                animation="pulse"
                duration="500ms"
                delay="0s"
                direction="normal"
                easing="ease-in"
                iteration="1"
              >
                <div
                  data-thq-animate-on-reveal="true"
                  className="timeline7-container15"
                >
                  <h3 className="thq-heading-3">
                    {props.date1 ?? (
                      <Fragment>
                        <span className="timeline7-text36">2013-2015</span>
                      </Fragment>
                    )}
                  </h3>
                  <h3 className="timeline7-text12 thq-heading-3">
                    {props.card1Heading ?? (
                      <Fragment>
                        <span className="timeline7-text17">
                          Information Technology Professional, Post Graduate
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.card1Content ?? (
                      <Fragment>
                        <span className="timeline7-text23">
                          <span>
                            ICTC National IT Post Graduate Certificate
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            Lambton College of Applied Arts and Technology,
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <br></br>
                          <span>Sarnia, ON</span>
                          <br></br>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="timeline7-container16"></div>
                </div>
              </animate-on-reveal>
            </div>
            <div className="timeline7-step2">
              <div className="timeline7-container17">
                <div className="timeline7-container18"></div>
                <div className="timeline7-progress02"></div>
              </div>
              <animate-on-reveal
                animation="pulse"
                duration="500ms"
                delay="0s"
                direction="normal"
                easing="ease-in"
                iteration="1"
              >
                <div
                  data-thq-animate-on-reveal="true"
                  className="timeline7-container19"
                >
                  <h3 className="thq-heading-3">
                    {props.date2 ?? (
                      <Fragment>
                        <span className="timeline7-text33">2009-2013</span>
                      </Fragment>
                    )}
                  </h3>
                  <h3 className="timeline7-text15 thq-heading-3">
                    {props.card2Heading ?? (
                      <Fragment>
                        <span className="timeline7-text34">
                          Electronic &amp; Communication Engineering, Bachelor
                          of Technology
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.card2Content ?? (
                      <Fragment>
                        <span className="timeline7-text18">
                          <span>
                            Charotar University of Science and Technology,
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            GU, India
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="timeline7-container20"></div>
                </div>
              </animate-on-reveal>
            </div>
            <div className="timeline7-step3">
              <div className="timeline7-container21">
                <div className="timeline7-container22"></div>
                <div className="timeline7-progress03"></div>
              </div>
            </div>
            <div className="timeline7-step4">
              <div className="timeline7-container23">
                <div className="timeline7-container24"></div>
                <div className="timeline7-progress04"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .timeline7-container10 {
            height: 995px;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            border-top-width: 0px;
            border-bottom-width: 2px;
          }
          .timeline7-max-width {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 670px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline7-container11 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 94px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .timeline7-text10 {
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            letter-spacing: 8px;
          }
          .timeline7-container12 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline7-timeline-container {
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline7-step1 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline7-container13 {
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
          .timeline7-container14 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline7-progress01 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline7-container15 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline7-text12 {
            text-align: left;
          }
          .timeline7-container16 {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .timeline7-step2 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline7-container17 {
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
          .timeline7-container18 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline7-progress02 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline7-container19 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline7-text15 {
            text-align: left;
          }
          .timeline7-container20 {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .timeline7-step3 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline7-container21 {
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
          .timeline7-container22 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline7-progress03 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline7-step4 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline7-container23 {
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
          .timeline7-container24 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline7-progress04 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline7-text17 {
            display: inline-block;
          }
          .timeline7-text18 {
            display: inline-block;
          }
          .timeline7-text23 {
            display: inline-block;
          }
          .timeline7-text33 {
            display: inline-block;
          }
          .timeline7-text34 {
            display: inline-block;
          }
          .timeline7-text35 {
            display: inline-block;
          }
          .timeline7-text36 {
            display: inline-block;
          }
          .timeline7root-class-name {
            height: 900;
          }
          @media (max-width: 1600px) {
            .timeline7-text10 {
              align-self: center;
              font-style: normal;
              font-weight: 700;
              letter-spacing: 8px;
            }
            .timeline7-container15 {
              animation-name: slideInRight;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .timeline7-container19 {
              animation-name: slideInRight;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
          }
          @media (max-width: 479px) {
            .timeline7-container10 {
              display: flex;
              padding: var(--dl-space-space-twounits);
              flex-wrap: wrap;
              align-items: center;
              justify-content: flex-start;
              border-left-width: 0px;
              border-right-width: 0px;
            }
            .timeline7root-class-name {
              width: 100%;
              height: var(--dl-size-size-maxwidth);
              overflow: scroll;
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

Timeline7.defaultProps = {
  card1Heading: undefined,
  rootClassName: '',
  card2Content: undefined,
  card1Content: undefined,
  date2: undefined,
  card2Heading: undefined,
  title1: undefined,
  timeline7Id: '',
  date1: undefined,
}

Timeline7.propTypes = {
  card1Heading: PropTypes.element,
  rootClassName: PropTypes.string,
  card2Content: PropTypes.element,
  card1Content: PropTypes.element,
  date2: PropTypes.element,
  card2Heading: PropTypes.element,
  title1: PropTypes.element,
  timeline7Id: PropTypes.string,
  date1: PropTypes.element,
}

export default Timeline7
