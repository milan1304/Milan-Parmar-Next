import React from 'react'

import PropTypes from 'prop-types'

import Text1 from './text1'

const Header26 = (props) => {
  return (
    <>
      <div
        className={`header26-header26 thq-section-padding ${props.rootClassName} `}
      >
        <div className="header26-container1">
          <div>
            <div className="header26-container3"></div>
          </div>
          <Text1 rootClassName="text1root-class-name"></Text1>
        </div>
        <div className="header26-container4"></div>
        <div className="header26-max-width thq-flex-column thq-section-max-width">
          <div className="header26-column">
            <div className="header26-container5">
              <div className="header26-container6">
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="header26-image"
                />
                <div className="header26-container7"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .header26-header26 {
            gap: var(--dl-space-space-twounits);
            width: 1187px;
            height: 1012px;
            position: relative;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
          }
          .header26-container1 {
            width: 1920px;
            height: 972px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/unsplash-image.jpeg');
          }
          .header26-container3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .header26-container4 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .header26-max-width {
            align-self: center;
          }
          .header26-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .header26-container5 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .header26-container6 {
            width: 100%;
            height: 612px;
            display: none;
            align-items: flex-start;
            background-size: cover;
            background-image: url('/unsplash-image.jpeg');
          }
          .header26-image {
            width: 200px;
            object-fit: cover;
          }
          .header26-container7 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
            background-size: cover;
            background-image: url('/unsplash-image.jpeg');
          }
          .header26root-class-name {
            height: 1100px;
            position: static;
          }
          @media (max-width: 1600px) {
            .header26-container1 {
              width: 1600px;
            }
            .header26root-class-name {
              width: auto;
            }
          }
          @media (max-width: 1200px) {
            .header26-container1 {
              width: 1200px;
            }
            .header26root-class-name {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .header26-container1 {
              width: 479px;
            }
            .header26root-class-name {
              overflow: hidden;
              position: static;
            }
          }
        `}
      </style>
    </>
  )
}

Header26.defaultProps = {
  imageAlt: 'image',
  imageSrc: '/unsplash-image.jpeg',
  rootClassName: '',
}

Header26.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Header26
