import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const ContentList12 = (props) => {
  return (
    <>
      <div className="content-list12-container thq-section-padding">
        <div className="content-list12-max-width thq-section-max-width">
          <div className="content-list12-content thq-flex-column">
            <ul className="content-list12-ul thq-flex-column">
              <li className="list-item thq-flex-column">
                <h2 className="content-list12-heading1 thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="content-list12-text19">
                        About Milan Parmar
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="thq-body-small">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="content-list12-text21">
                        Milan Parmar is an experienced IT Infrastructure and
                        Systems Engineer with a strong background in providing
                        IT support, managing cloud solutions, network
                        administration, and implementing security policies. He
                        specializes in Azure, Office 365, SharePoint, firewall
                        management, virtualization, and PowerShell scripts.
                      </span>
                    </Fragment>
                  )}
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3">
                  {props.heading2 ?? (
                    <Fragment>
                      <span className="content-list12-text17">
                        Services Offered
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="thq-body-small">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="content-list12-text18">
                        Milan Parmar offers a range of services including IT
                        support, cloud solution management, network
                        administration, security policy implementation, Azure
                        services, Office 365 management, SharePoint
                        customization, firewall management, virtualization
                        solutions, and PowerShell script development.
                      </span>
                    </Fragment>
                  )}
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3">
                  {props.heading3 ?? (
                    <Fragment>
                      <span className="content-list12-text20">Experience</span>
                    </Fragment>
                  )}
                </h3>
                <p className="thq-body-small">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="content-list12-text14">
                        Milan Parmar has extensive experience in the IT
                        industry, having worked on numerous projects related to
                        IT infrastructure, cloud solutions, network security,
                        and system administration. His hands-on experience with
                        Azure, Office 365, SharePoint, firewall management,
                        virtualization technologies, and PowerShell scripting
                        sets him apart as a skilled professional in the field.
                      </span>
                    </Fragment>
                  )}
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3">
                  {props.heading4 ?? (
                    <Fragment>
                      <span className="content-list12-text15">Skills</span>
                    </Fragment>
                  )}
                </h3>
                <p className="thq-body-small">
                  {props.content4 ?? (
                    <Fragment>
                      <span className="content-list12-text16">
                        Milan Parmar possesses a diverse skill set that includes
                        proficiency in Azure services, Office 365 management,
                        SharePoint customization, firewall management,
                        virtualization technologies such as VMware and Hyper-V,
                        and PowerShell scripting for automation and task
                        simplification.
                      </span>
                    </Fragment>
                  )}
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3">
                  {props.heading5 ?? (
                    <Fragment>
                      <span className="content-list12-text11">Portfolio</span>
                    </Fragment>
                  )}
                </h3>
                <p className="thq-body-small">
                  {props.content5 ?? (
                    <Fragment>
                      <span className="content-list12-text10">
                        Explore Milan Parmar&apos;s portfolio to see examples of
                        his work in IT support, cloud solution management,
                        network administration, security policy implementation,
                        Azure projects, Office 365 deployments, SharePoint
                        customization tasks, firewall configurations,
                        virtualization setups, and PowerShell script
                        development.
                      </span>
                    </Fragment>
                  )}
                </p>
              </li>
              <li className="list-item">
                <h3 className="thq-heading-3">
                  {props.heading6 ?? (
                    <Fragment>
                      <span className="content-list12-text13">
                        Contact Milan Parmar
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="thq-body-small">
                  {props.content6 ?? (
                    <Fragment>
                      <span className="content-list12-text12">
                        Get in touch with Milan Parmar for your IT
                        infrastructure needs. Whether you require IT support,
                        cloud solutions management, network administration
                        services, security policy implementation guidance, Azure
                        expertise, Office 365 assistance, SharePoint
                        customization help, firewall management support,
                        virtualization solutions advice or PowerShell script
                        development assistance - Milan Parmar is here to help.
                      </span>
                    </Fragment>
                  )}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content-list12-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .content-list12-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list12-content {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list12-ul {
            align-items: flex-start;
          }
          .content-list12-heading1 {
            align-self: flex-start;
          }
          .content-list12-text10 {
            display: inline-block;
          }
          .content-list12-text11 {
            display: inline-block;
          }
          .content-list12-text12 {
            display: inline-block;
          }
          .content-list12-text13 {
            display: inline-block;
          }
          .content-list12-text14 {
            display: inline-block;
          }
          .content-list12-text15 {
            display: inline-block;
          }
          .content-list12-text16 {
            display: inline-block;
          }
          .content-list12-text17 {
            display: inline-block;
          }
          .content-list12-text18 {
            display: inline-block;
          }
          .content-list12-text19 {
            display: inline-block;
          }
          .content-list12-text20 {
            display: inline-block;
          }
          .content-list12-text21 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

ContentList12.defaultProps = {
  content5: undefined,
  heading5: undefined,
  content6: undefined,
  heading6: undefined,
  content3: undefined,
  heading4: undefined,
  content4: undefined,
  heading2: undefined,
  content2: undefined,
  heading1: undefined,
  heading3: undefined,
  content1: undefined,
}

ContentList12.propTypes = {
  content5: PropTypes.element,
  heading5: PropTypes.element,
  content6: PropTypes.element,
  heading6: PropTypes.element,
  content3: PropTypes.element,
  heading4: PropTypes.element,
  content4: PropTypes.element,
  heading2: PropTypes.element,
  content2: PropTypes.element,
  heading1: PropTypes.element,
  heading3: PropTypes.element,
  content1: PropTypes.element,
}

export default ContentList12
