import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Testimonial6 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial6-max-width thq-section-max-width">
          <div
            data-thq="slider"
            data-loop="true"
            data-autoplay="true"
            data-navigation="true"
            data-pagination="true"
            className="testimonial6-slider1 swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="testimonial6-slider-slide1 swiper-slide"
              >
                <div className="testimonial6-card1">
                  <img
                    alt={props.company1LogoAlt}
                    src={props.company1LogoSrc}
                    className="testimonial6-logo1"
                  />
                  <span className="testimonial6-text10 thq-body-large">
                    {props.review1 ?? (
                      <Fragment>
                        <span className="testimonial6-text49">
                          Choose from our variety of pricing plans, including
                          Basic, Business, and Enterprise subscriptions, each
                          offering a range of features. Start today!
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="testimonial6-avatar1">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial6-avatar-image1 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial6-avatar-content1">
                      <span className="testimonial6-text11 thq-body-small">
                        {props.author1Name ?? (
                          <Fragment>
                            <span className="testimonial6-text42">
                              Author Name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.author1Position ?? (
                          <Fragment>
                            <span className="testimonial6-text50">
                              Position, Company name
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="testimonial6-card2">
                  <img
                    alt={props.company2LogoAlt}
                    src={props.company2LogoSrc}
                    className="testimonial6-logo2"
                  />
                  <p className="testimonial6-text13 thq-body-large">
                    {props.review2 ?? (
                      <Fragment>
                        <span className="testimonial6-text47">
                          Choose from our variety of pricing plans, including
                          Basic, Business, and Enterprise subscriptions, each
                          offering a range of features. Start today!
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="testimonial6-avatar2">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial6-avatar-image2 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial6-avatar-content2">
                      <span className="testimonial6-text14 thq-body-small">
                        {props.author2Name ?? (
                          <Fragment>
                            <span className="testimonial6-text48">
                              Author Name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.author2Position ?? (
                          <Fragment>
                            <span className="testimonial6-text45">
                              Position, Company name
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="testimonial6-slider-slide2 swiper-slide"
              >
                <div className="testimonial6-card3">
                  <img
                    alt={props.company3LogoAlt}
                    src={props.company3LogoSrc}
                    className="testimonial6-logo3"
                  />
                  <span className="testimonial6-text16 thq-body-large">
                    {props.review3 ?? (
                      <Fragment>
                        <span className="testimonial6-text43">
                          Choose from our variety of pricing plans, including
                          Basic, Business, and Enterprise subscriptions, each
                          offering a range of features. Start today!
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="testimonial6-avatar3">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial6-avatar-image3 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial6-avatar-content3">
                      <span className="testimonial6-text17 thq-body-small">
                        {props.author3Name ?? (
                          <Fragment>
                            <span className="testimonial6-text41">
                              Author Name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.author3Position ?? (
                          <Fragment>
                            <span className="testimonial6-text44">
                              Position, Company name
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="testimonial6-card4">
                  <img
                    alt={props.company4LogoAlt}
                    src={props.company4LogoSrc}
                    className="testimonial6-logo4"
                  />
                  <p className="testimonial6-text19 thq-body-large">
                    {props.review4 ?? (
                      <Fragment>
                        <span className="testimonial6-text51">
                          Choose from our variety of pricing plans, including
                          Basic, Business, and Enterprise subscriptions, each
                          offering a range of features. Start today!
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="testimonial6-avatar4">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial6-avatar-image4 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial6-avatar-content4">
                      <span className="testimonial6-text20 thq-body-small">
                        {props.author4Name ?? (
                          <Fragment>
                            <span className="testimonial6-text40">
                              Author Name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.author4Position ?? (
                          <Fragment>
                            <span className="testimonial6-text46">
                              Position, Company name
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="testimonial6-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="swiper-button-next"
            ></div>
          </div>
          <div
            data-thq="slider"
            data-loop="true"
            data-autoplay="true"
            data-navigation="true"
            data-pagination="true"
            className="testimonial6-slider2 swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="testimonial6-slider-slide3 swiper-slide"
              >
                <div className="testimonial6-card5">
                  <img
                    alt={props.company1LogoAlt}
                    src={props.company1LogoSrc}
                    className="testimonial6-logo5"
                  />
                  <span className="testimonial6-text22 thq-body-large">
                    Choose from our variety of pricing plans, including Basic,
                    Business, and Enterprise subscriptions, each offering a
                    range of features. Start today!
                  </span>
                  <div className="testimonial6-avatar5">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial6-avatar-image5 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial6-avatar-content5">
                      <span className="testimonial6-text23 thq-body-small">
                        <span>Author Name</span>
                        {props.author1Name ?? (
                          <Fragment>
                            <span className="testimonial6-text42">
                              Author Name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        Position, Company name
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="testimonial6-slider-slide4 swiper-slide"
              >
                <div className="testimonial6-card6">
                  <img
                    alt={props.company2LogoAlt}
                    src={props.company2LogoSrc}
                    className="testimonial6-logo6"
                  />
                  <p className="testimonial6-text26 thq-body-large">
                    Choose from our variety of pricing plans, including Basic,
                    Business, and Enterprise subscriptions, each offering a
                    range of features. Start today!
                  </p>
                  <div className="testimonial6-avatar6">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial6-avatar-image6 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial6-avatar-content6">
                      <span className="testimonial6-text27 thq-body-small">
                        <span>Author Name</span>
                        {props.author2Name ?? (
                          <Fragment>
                            <span className="testimonial6-text48">
                              Author Name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        Position, Company name
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="testimonial6-slider-slide5 swiper-slide"
              >
                <div className="testimonial6-card7">
                  <img
                    alt={props.company3LogoAlt}
                    src={props.company3LogoSrc}
                    className="testimonial6-logo7"
                  />
                  <span className="testimonial6-text30 thq-body-large">
                    Choose from our variety of pricing plans, including Basic,
                    Business, and Enterprise subscriptions, each offering a
                    range of features. Start today!
                  </span>
                  <div className="testimonial6-avatar7">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial6-avatar-image7 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial6-avatar-content7">
                      <span className="testimonial6-text31 thq-body-small">
                        <span>Author Name</span>
                        {props.author3Name ?? (
                          <Fragment>
                            <span className="testimonial6-text41">
                              Author Name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        <span>Position, Company name</span>
                        {props.author3Position ?? (
                          <Fragment>
                            <span className="testimonial6-text44">
                              Position, Company name
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="testimonial6-slider-slide6 swiper-slide"
              >
                <div className="testimonial6-card8">
                  <img
                    alt={props.company4LogoAlt}
                    src={props.company4LogoSrc}
                    className="testimonial6-logo8"
                  />
                  <span className="testimonial6-text35 thq-body-large">
                    Choose from our variety of pricing plans, including Basic,
                    Business, and Enterprise subscriptions, each offering a
                    range of features. Start today!
                  </span>
                  <div className="testimonial6-avatar8">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial6-avatar-image8 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial6-avatar-content8">
                      <span className="testimonial6-text36 thq-body-small">
                        <span>Author Name</span>
                        {props.author4Name ?? (
                          <Fragment>
                            <span className="testimonial6-text40">
                              Author Name
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        <span>Position, Company name</span>
                        {props.author4Position ?? (
                          <Fragment>
                            <span className="testimonial6-text46">
                              Position, Company name
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="testimonial6-slider-pagination2 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="swiper-button-next"
            ></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial6-max-width {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial6-slider1 {
            width: 100%;
            display: inline-block;
            position: relative;
          }
          .testimonial6-slider-slide1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial6-card1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-logo1 {
            height: 2rem;
          }
          .testimonial6-text10 {
            text-align: center;
          }
          .testimonial6-avatar1 {
            gap: var(--dl-space-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial6-avatar-image1 {
            width: 56px;
            height: 56px;
          }
          .testimonial6-avatar-content1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-text11 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial6-card2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-logo2 {
            height: 2rem;
          }
          .testimonial6-text13 {
            text-align: center;
          }
          .testimonial6-avatar2 {
            gap: var(--dl-space-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial6-avatar-image2 {
            width: 56px;
            height: 56px;
          }
          .testimonial6-avatar-content2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-text14 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial6-slider-slide2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial6-card3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-logo3 {
            height: 2rem;
          }
          .testimonial6-text16 {
            text-align: center;
          }
          .testimonial6-avatar3 {
            gap: var(--dl-space-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial6-avatar-image3 {
            width: 56px;
            height: 56px;
          }
          .testimonial6-avatar-content3 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-text17 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial6-card4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-logo4 {
            height: 2rem;
          }
          .testimonial6-text19 {
            text-align: center;
          }
          .testimonial6-avatar4 {
            gap: var(--dl-space-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial6-avatar-image4 {
            width: 56px;
            height: 56px;
          }
          .testimonial6-avatar-content4 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-text20 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial6-slider-pagination1 {
            display: block;
          }
          .testimonial6-slider2 {
            width: 100%;
            display: none;
            position: relative;
            align-self: center;
          }
          .testimonial6-slider-slide3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial6-card5 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-logo5 {
            height: 2rem;
          }
          .testimonial6-text22 {
            text-align: center;
          }
          .testimonial6-avatar5 {
            gap: var(--dl-space-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial6-avatar-image5 {
            width: 56px;
            height: 56px;
          }
          .testimonial6-avatar-content5 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-text23 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial6-slider-slide4 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial6-card6 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-logo6 {
            height: 2rem;
          }
          .testimonial6-text26 {
            text-align: center;
          }
          .testimonial6-avatar6 {
            gap: var(--dl-space-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial6-avatar-image6 {
            width: 56px;
            height: 56px;
          }
          .testimonial6-avatar-content6 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-text27 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial6-slider-slide5 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial6-card7 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-logo7 {
            height: 2rem;
          }
          .testimonial6-text30 {
            text-align: center;
          }
          .testimonial6-avatar7 {
            gap: var(--dl-space-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial6-avatar-image7 {
            width: 56px;
            height: 56px;
          }
          .testimonial6-avatar-content7 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-text31 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial6-slider-slide6 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial6-card8 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-logo8 {
            height: 2rem;
          }
          .testimonial6-text35 {
            text-align: center;
          }
          .testimonial6-avatar8 {
            gap: var(--dl-space-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial6-avatar-image8 {
            width: 56px;
            height: 56px;
          }
          .testimonial6-avatar-content8 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-text36 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial6-slider-pagination2 {
            display: block;
          }
          .testimonial6-text40 {
            display: inline-block;
          }
          .testimonial6-text41 {
            display: inline-block;
          }
          .testimonial6-text42 {
            display: inline-block;
          }
          .testimonial6-text43 {
            display: inline-block;
          }
          .testimonial6-text44 {
            display: inline-block;
          }
          .testimonial6-text45 {
            display: inline-block;
          }
          .testimonial6-text46 {
            display: inline-block;
          }
          .testimonial6-text47 {
            display: inline-block;
          }
          .testimonial6-text48 {
            display: inline-block;
          }
          .testimonial6-text49 {
            display: inline-block;
          }
          .testimonial6-text50 {
            display: inline-block;
          }
          .testimonial6-text51 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Testimonial6.defaultProps = {
  author1Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=300',
  author4Name: undefined,
  company2LogoAlt: 'Company Logo',
  company4LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author3Name: undefined,
  author1Name: undefined,
  author4Alt: 'Author Avatar',
  company1LogoAlt: 'Company Logo',
  author4Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=300',
  review3: undefined,
  author2Alt: 'Author Avatar',
  author3Position: undefined,
  author1Alt: 'Author Avatar',
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author2Position: undefined,
  author3Alt: 'Author Avatar',
  author4Position: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=300',
  company4LogoAlt: 'Company Logo',
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  review2: undefined,
  company3LogoAlt: 'Company Logo',
  company3LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author3Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=300',
  author2Name: undefined,
  review1: undefined,
  author1Position: undefined,
  review4: undefined,
}

Testimonial6.propTypes = {
  author1Src: PropTypes.string,
  author4Name: PropTypes.element,
  company2LogoAlt: PropTypes.string,
  company4LogoSrc: PropTypes.string,
  author3Name: PropTypes.element,
  author1Name: PropTypes.element,
  author4Alt: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  author4Src: PropTypes.string,
  review3: PropTypes.element,
  author2Alt: PropTypes.string,
  author3Position: PropTypes.element,
  author1Alt: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  author2Position: PropTypes.element,
  author3Alt: PropTypes.string,
  author4Position: PropTypes.element,
  author2Src: PropTypes.string,
  company4LogoAlt: PropTypes.string,
  company2LogoSrc: PropTypes.string,
  review2: PropTypes.element,
  company3LogoAlt: PropTypes.string,
  company3LogoSrc: PropTypes.string,
  author3Src: PropTypes.string,
  author2Name: PropTypes.element,
  review1: PropTypes.element,
  author1Position: PropTypes.element,
  review4: PropTypes.element,
}

export default Testimonial6
