import React from 'react'

import PropTypes from 'prop-types'

const Text1 = (props) => {
  return (
    <>
      <div className={`text1-container ${props.rootClassName} `}>
        <p className="text1-text10 thq-body-large">
          <br className="text1-text11"></br>
          <span className="text1-text12">Milan Parmar</span>
          <br className="text1-text13"></br>
          <span className="text1-text14">
            IT Infrastructure and Systems Engineer
          </span>
          <br className="text1-text15"></br>
          <br className="text1-text16"></br>
          <span className="text1-text17">Phone:</span>
          <br className="text1-text18"></br>
          <span className="text1-text19">226-346-2570</span>
          <br className="text1-text20"></br>
          <br className="text1-text21"></br>
          <span className="text1-text22">Email:</span>
          <br className="text1-text23"></br>
          <span className="text1-text24">parmar.milan13@gmail.com</span>
          <br className="text1-text25"></br>
          <br className="text1-text26"></br>
          <span className="text1-text27">Address:</span>
          <br className="text1-text28"></br>
          <span className="text1-text29">Cloverdale, BC.</span>
          <br className="text1-text30"></br>
          <br className="text1-text31"></br>
        </p>
      </div>
      <style jsx>
        {`
          .text1-container {
            height: 594px;
            display: flex;
            position: relative;
          }
          .text1-text10 {
            width: 630px;
            height: 596px;
            display: block;
            font-size: 30px;
            align-self: stretch;
            text-align: left;
            transition: 0.3s;
            font-family: 'Times New Roman';
            font-weight: 800;
            padding-left: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-secondary1);
          }

          .text1-text11 {
            font-style: normal;
            font-family: 'Times New Roman';
            text-transform: capitalize;
          }
          .text1-text12 {
            font-style: normal;
            font-family: 'Times New Roman';
            text-transform: capitalize;
          }
          .text1-text13 {
            font-style: normal;
          }
          .text1-text14 {
            font-style: normal;
            font-family: 'Times New Roman';
          }
          .text1-text15 {
            font-style: normal;
            font-family: 'Times New Roman';
          }
          .text1-text16 {
            font-style: normal;
            font-family: 'Times New Roman';
          }
          .text1-text17 {
            font-style: normal;
            font-family: 'Times New Roman';
          }
          .text1-text18 {
            font-style: normal;
            font-family: 'Times New Roman';
          }
          .text1-text19 {
            font-family: 'Times New Roman';
            font-weight: 400;
          }
          .text1-text20 {
            font-style: normal;
            font-family: 'Times New Roman';
          }
          .text1-text21 {
            font-style: normal;
            font-family: 'Times New Roman';
          }
          .text1-text22 {
            font-style: normal;
            font-family: 'Times New Roman';
          }
          .text1-text23 {
            font-style: normal;
            font-family: 'Times New Roman';
          }
          .text1-text24 {
            font-family: 'Times New Roman';
            font-weight: 400;
          }
          .text1-text25 {
            font-style: normal;
            font-family: 'Times New Roman';
          }
          .text1-text26 {
            font-style: normal;
            font-family: 'Times New Roman';
          }
          .text1-text27 {
            font-style: normal;
            font-family: 'Times New Roman';
          }
          .text1-text28 {
            font-style: normal;
            font-family: 'Times New Roman';
          }
          .text1-text29 {
            font-family: 'Times New Roman';
            font-weight: 400;
          }
          .text1-text30 {
            font-style: normal;
          }
          .text1-text31 {
            font-style: normal;
          }
          .text1root-class-name {
            left: -42px;
            bottom: -18px;
            display: flex;
            position: static;
            align-self: flex-end;
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          @media (max-width: 1600px) {
            .text1root-class-name {
              top: 50px;
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              right: 233px;
              margin-right: 0px;
              padding-right: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 1200px) {
            .text1root-class-name {
              top: 21px;
              left: -37px;
            }
          }
          @media (max-width: 479px) {
            .text1root-class-name {
              width: 450px;
              align-self: center;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Text1.defaultProps = {
  rootClassName: '',
}

Text1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text1
