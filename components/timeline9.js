import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Timeline9 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline9-max-width thq-section-max-width">
          <div className="timeline9-heading">
            <h2 className="timeline9-text10 thq-heading-2">
              {props.title1 ?? (
                <Fragment>
                  <span className="timeline9-text43">TeleportHQ Timeline</span>
                </Fragment>
              )}
            </h2>
            <span className="timeline9-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="timeline9-text57">
                    Check out our journey and key milestones below
                  </span>
                </Fragment>
              )}
            </span>
            <div className="timeline9-container11">
              <button type="button" className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="timeline9-text56">Primary action</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button type="button" className="thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="timeline9-text36">Seconday action</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="timeline9-timeline-container">
            <div className="timeline9-step1">
              <div className="timeline9-container12">
                <div className="timeline9-container13"></div>
                <div className="timeline9-progress01"></div>
              </div>
              <div className="timeline9-container14">
                <h3 className="thq-heading-3">
                  {props.card1Date ?? (
                    <Fragment>
                      <span className="timeline9-text44">January 2015</span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline9-text15 thq-heading-3">
                  {props.card1Heading ?? (
                    <Fragment>
                      <span className="timeline9-text45">Company Founded</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card1Content ?? (
                    <Fragment>
                      <span className="timeline9-text55">
                        TeleportHQ was founded with a vision to revolutionize
                        web development and design processes.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline9-container15">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card1Action1 ?? (
                        <Fragment>
                          <span className="timeline9-text52">Read More</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card1Action2 ?? (
                        <Fragment>
                          <span className="timeline9-text35">Join Us</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <img
                  alt={props.card1ImageAlt}
                  src={props.card1ImageSrc}
                  className="timeline9-image1 thq-img-ratio-1-1"
                />
              </div>
            </div>
            <div className="timeline9-step2">
              <div className="timeline9-container16">
                <div className="timeline9-container17"></div>
                <div className="timeline9-progress02"></div>
              </div>
              <div className="timeline9-container18">
                <h3 className="thq-heading-3">
                  {props.card2Date ?? (
                    <Fragment>
                      <span className="timeline9-text34">March 2016</span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline9-text20 thq-heading-3">
                  {props.card2Heading ?? (
                    <Fragment>
                      <span className="timeline9-text37">Product Launch</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card2Content ?? (
                    <Fragment>
                      <span className="timeline9-text48">
                        TeleportHQ launched its innovative web development
                        platform, offering cutting-edge solutions to users.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline9-container19">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card2Action1 ?? (
                        <Fragment>
                          <span className="timeline9-text53">
                            Explore Features
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card2Action2 ?? (
                        <Fragment>
                          <span className="timeline9-text41">
                            Get Started Now
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <img
                  alt={props.card2ImageAlt}
                  src={props.card2ImageSrc}
                  className="timeline9-image2 thq-img-ratio-1-1"
                />
              </div>
            </div>
            <div className="timeline9-step3">
              <div className="timeline9-container20">
                <div className="timeline9-container21"></div>
                <div className="timeline9-progress03"></div>
              </div>
              <div className="timeline9-container22">
                <h3 className="thq-heading-3">
                  {props.card3Date ?? (
                    <Fragment>
                      <span className="timeline9-text46">June 2017</span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline9-text25 thq-heading-3">
                  {props.card3Heading ?? (
                    <Fragment>
                      <span className="timeline9-text50">Team Expansion</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card3Content ?? (
                    <Fragment>
                      <span className="timeline9-text51">
                        TeleportHQ expanded its team with talented individuals
                        dedicated to driving the company&apos;s mission forward.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline9-container23">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card3Action1 ?? (
                        <Fragment>
                          <span className="timeline9-text54">
                            Meet the Team
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card3Action2 ?? (
                        <Fragment>
                          <span className="timeline9-text39">
                            Join Our Team
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <img
                  alt={props.card3ImageAlt}
                  src={props.card3ImageSrc}
                  className="timeline9-image3 thq-img-ratio-1-1"
                />
              </div>
            </div>
            <div className="timeline9-step4">
              <div className="timeline9-container24">
                <div className="timeline9-container25"></div>
                <div className="timeline9-progress04"></div>
              </div>
              <div className="timeline9-container26">
                <h3 className="thq-heading-3">
                  {props.card4Date ?? (
                    <Fragment>
                      <span className="timeline9-text47">August 2019</span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="timeline9-text30 thq-heading-3">
                  {props.card4Heading ?? (
                    <Fragment>
                      <span className="timeline9-text38">
                        Global Recognition
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card4Content ?? (
                    <Fragment>
                      <span className="timeline9-text49">
                        TeleportHQ received international recognition for its
                        contributions to the web development industry.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline9-container27">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card4Action1 ?? (
                        <Fragment>
                          <span className="timeline9-text42">View Awards</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card4Action2 ?? (
                        <Fragment>
                          <span className="timeline9-text40">Learn More</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <img
                  alt={props.card4ImageAlt}
                  src={props.card4ImageSrc}
                  className="timeline9-image4 thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .timeline9-max-width {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline9-heading {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline9-text10 {
            text-align: left;
          }
          .timeline9-text11 {
            text-align: left;
          }
          .timeline9-container11 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline9-timeline-container {
            width: 70%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline9-step1 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline9-container12 {
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
          .timeline9-container13 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline9-progress01 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline9-container14 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline9-text15 {
            text-align: left;
          }
          .timeline9-container15 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline9-image1 {
            height: auto;
          }
          .timeline9-step2 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline9-container16 {
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
          .timeline9-container17 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline9-progress02 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline9-container18 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline9-text20 {
            text-align: left;
          }
          .timeline9-container19 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline9-image2 {
            height: auto;
          }
          .timeline9-step3 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline9-container20 {
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
          .timeline9-container21 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline9-progress03 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline9-container22 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline9-text25 {
            text-align: left;
          }
          .timeline9-container23 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline9-image3 {
            height: auto;
          }
          .timeline9-step4 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline9-container24 {
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
          .timeline9-container25 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline9-progress04 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline9-container26 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline9-text30 {
            text-align: left;
          }
          .timeline9-container27 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline9-image4 {
            height: auto;
          }
          .timeline9-text34 {
            display: inline-block;
          }
          .timeline9-text35 {
            display: inline-block;
          }
          .timeline9-text36 {
            display: inline-block;
          }
          .timeline9-text37 {
            display: inline-block;
          }
          .timeline9-text38 {
            display: inline-block;
          }
          .timeline9-text39 {
            display: inline-block;
          }
          .timeline9-text40 {
            display: inline-block;
          }
          .timeline9-text41 {
            display: inline-block;
          }
          .timeline9-text42 {
            display: inline-block;
          }
          .timeline9-text43 {
            display: inline-block;
          }
          .timeline9-text44 {
            display: inline-block;
          }
          .timeline9-text45 {
            display: inline-block;
          }
          .timeline9-text46 {
            display: inline-block;
          }
          .timeline9-text47 {
            display: inline-block;
          }
          .timeline9-text48 {
            display: inline-block;
          }
          .timeline9-text49 {
            display: inline-block;
          }
          .timeline9-text50 {
            display: inline-block;
          }
          .timeline9-text51 {
            display: inline-block;
          }
          .timeline9-text52 {
            display: inline-block;
          }
          .timeline9-text53 {
            display: inline-block;
          }
          .timeline9-text54 {
            display: inline-block;
          }
          .timeline9-text55 {
            display: inline-block;
          }
          .timeline9-text56 {
            display: inline-block;
          }
          .timeline9-text57 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Timeline9.defaultProps = {
  card2Date: undefined,
  card1Action2: undefined,
  card3ImageSrc:
    'https://images.unsplash.com/photo-1707929592069-d3a638d86b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjY4MzQ0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: undefined,
  card4ImageSrc:
    'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjY4MzQ0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  card2Heading: undefined,
  card4Heading: undefined,
  card3Action2: undefined,
  card4Action2: undefined,
  card4ImageAlt: 'image',
  card2Action2: undefined,
  card4Action1: undefined,
  card1ImageSrc:
    'https://images.unsplash.com/photo-1606652865364-3abedcf878cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjY4MzQ0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  title1: undefined,
  card1Date: undefined,
  card1Heading: undefined,
  card3ImageAlt: 'image',
  card3Date: undefined,
  card4Date: undefined,
  card2Content: undefined,
  card4Content: undefined,
  card3Heading: undefined,
  card3Content: undefined,
  card1Action1: undefined,
  card1ImageAlt: 'image',
  card2Action1: undefined,
  card2ImageAlt: 'image',
  card3Action1: undefined,
  card2ImageSrc:
    'https://images.unsplash.com/photo-1713946598424-815b1dc09901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjY4MzQ0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  card1Content: undefined,
  action1: undefined,
  content1: undefined,
}

Timeline9.propTypes = {
  card2Date: PropTypes.element,
  card1Action2: PropTypes.element,
  card3ImageSrc: PropTypes.string,
  action2: PropTypes.element,
  card4ImageSrc: PropTypes.string,
  card2Heading: PropTypes.element,
  card4Heading: PropTypes.element,
  card3Action2: PropTypes.element,
  card4Action2: PropTypes.element,
  card4ImageAlt: PropTypes.string,
  card2Action2: PropTypes.element,
  card4Action1: PropTypes.element,
  card1ImageSrc: PropTypes.string,
  title1: PropTypes.element,
  card1Date: PropTypes.element,
  card1Heading: PropTypes.element,
  card3ImageAlt: PropTypes.string,
  card3Date: PropTypes.element,
  card4Date: PropTypes.element,
  card2Content: PropTypes.element,
  card4Content: PropTypes.element,
  card3Heading: PropTypes.element,
  card3Content: PropTypes.element,
  card1Action1: PropTypes.element,
  card1ImageAlt: PropTypes.string,
  card2Action1: PropTypes.element,
  card2ImageAlt: PropTypes.string,
  card3Action1: PropTypes.element,
  card2ImageSrc: PropTypes.string,
  card1Content: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
}

export default Timeline9
