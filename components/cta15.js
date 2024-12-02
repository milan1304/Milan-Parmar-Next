import React from 'react'

import PropTypes from 'prop-types'

const CTA15 = (props) => {
  return (
    <>
      <div
        className={`cta15-container thq-section-padding ${props.rootClassName} `}
      >
        <div className="cta15-max-width thq-section-max-width">
          <div className="cta15-column">
            <div className="cta15-content"></div>
            <div className="cta15-actions"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta15-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta15-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            z-index: 100;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .cta15-column {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            flex-direction: column;
          }
          .cta15-content {
            gap: var(--dl-space-space-oneandhalfunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta15-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
          }
          .cta15root-class-name {
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

CTA15.defaultProps = {
  rootClassName: '',
}

CTA15.propTypes = {
  rootClassName: PropTypes.string,
}

export default CTA15
