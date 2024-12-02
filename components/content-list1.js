import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const ContentList1 = (props) => {
  return (
    <>
      <div
        id={props.contentList1Id}
        className={`content-list1-container thq-section-padding ${props.rootClassName} `}
      >
        <div className="content-list1-max-width thq-section-max-width">
          <div className="content-list1-content thq-flex-column">
            <ul className="content-list1-ul thq-flex-column">
              <li className="list-item thq-flex-column">
                <h2 className="content-list1-heading1 thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="content-list1-text65">
                        PROJECTS/SKILLS
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="thq-body-small">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="content-list1-text10">
                        <span className="content-list1-text11">
                          • Windows Server:
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="content-list1-text12">
                          Windows server upgrades from 2012 to 2019/2022,
                          including migrating and configuring roles such as
                          Active Directory, PS Scripting, File Server (SMB),
                          DNS, DHCP, Terminal (RDS), DFS, group policies
                          (GPO)and Azure AD Connect.
                        </span>
                        <br className="content-list1-text13"></br>
                        <br className="content-list1-text14"></br>
                        <span className="content-list1-text15">
                          • Virtualization:
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="content-list1-text16">
                          Created and managed Hyper-V with failover cluster
                          nodes, VMs, SET. Configured and managed VMware ESXi
                          hosts (over 15 hosts and 650 VMs) and VCSA with
                          clustering. VMware migration from vSphere 5.5 to 6.7
                          and then to 7.
                        </span>
                        <span className="content-list1-text17">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br className="content-list1-text18"></br>
                        <br className="content-list1-text19"></br>
                        <span className="content-list1-text20">
                          • Firewall:
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span>
                          Setup new and upgraded firewalls such as Paloalto,
                          FortiGate, SonicWall. Created firewall policies,
                          NAT/PAT policies, LACP, BGP, SD-WAN, DHCP, LDAP/SAML
                          SSO, security profiles, site-to-site VPN tunnels,
                          L2TP, IPSec and SSLVPN for clients.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="content-list1-text22">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br className="content-list1-text23"></br>
                        <br className="content-list1-text24"></br>
                        <span className="content-list1-text25">
                          • Networking:
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="content-list1-text26">
                          Configured managed switches, SNMP, VLANs, tags, port
                          mirroring and trunk/access ports. Worked with various
                          vendors such as Aruba, UniFi, Cisco, configured WiFi
                          channels for APs to avoid conflicts, speed &amp;
                          performance issues.
                        </span>
                        <span className="content-list1-text27">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br className="content-list1-text28"></br>
                        <br className="content-list1-text29"></br>
                        <span className="content-list1-text30">
                          • Cloud:
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="content-list1-text31">
                          Worked with Azure storage, VMs, RBAC, ExpressRoute,
                          Sentinel, Application integration (API), Microsoft
                          Graph, vNet. Migrated and managed Exchange Online,
                          Entra admin with B2B cross-tenant synchronization and
                          collaboration.
                        </span>
                        <br className="content-list1-text32"></br>
                        <br className="content-list1-text33"></br>
                        <span className="content-list1-text34">
                          • Cloud Security:
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="content-list1-text35">
                          Implemented cloud security policies for MFA
                          enforcement and Passwordless security key, configured
                          geo-blocked policies and travel policies.
                        </span>
                        <br className="content-list1-text36"></br>
                        <br className="content-list1-text37"></br>
                        <span className="content-list1-text38">
                          • MDM/Intune:
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="content-list1-text39">
                          ABM, SCCM, Defender, EDR/XDR and managed policies.
                          Handled Intune project of over 1000 devices,
                          configured Configuration &amp; Compliance policies
                        </span>
                        <br className="content-list1-text40"></br>
                        <br className="content-list1-text41"></br>
                        <span className="content-list1-text42">
                          • SSO:
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="content-list1-text43">
                          Setup SAML authentication from Entra IdP to
                          authenticate FortiGate VPN users.
                        </span>
                        <br className="content-list1-text44"></br>
                        <br className="content-list1-text45"></br>
                        <span className="content-list1-text46">
                          • Teams Migration:
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="content-list1-text47">
                          Microsoft Teams Migration for over 300 users from
                          RingCentral, and 3CX, including setting up
                          auto-attendant, service accounts and call queues.
                        </span>
                        <span className="content-list1-text48">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br className="content-list1-text49"></br>
                        <br className="content-list1-text50"></br>
                        <span className="content-list1-text51">
                          • SharePoint Migration:
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="content-list1-text52">
                          SharePoint migration from Dropbox and on-prem file
                          servers, managed highly complex SharePoint environment
                          with complex user permissions for each site for over
                          800 sites, automated tasks through Entra queries.
                        </span>
                        <span className="content-list1-text53">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br className="content-list1-text54"></br>
                        <br className="content-list1-text55"></br>
                        <span className="content-list1-text56">
                          • Email defense:
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="content-list1-text57">
                          Setup and configured email defense such as Proofpoint,
                          Barracuda.
                        </span>
                        <span className="content-list1-text58">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br className="content-list1-text59"></br>
                        <br className="content-list1-text60"></br>
                        <span className="content-list1-text61">
                          • M365 Migration:
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="content-list1-text62">
                          Handled projects solely for email migration from IMAP
                          (cPanel), Gmail (Google Workspace), and Cutover
                          Migration from on-prem Exchange Server.
                        </span>
                        <br className="content-list1-text63"></br>
                        <br className="content-list1-text64"></br>
                      </span>
                    </Fragment>
                  )}
                </p>
              </li>
              <li className="list-item"></li>
              <li className="list-item"></li>
              <li className="list-item"></li>
              <li className="list-item"></li>
              <li className="list-item"></li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content-list1-container {
            width: 100%;
            height: 1023px;
            display: flex;
            position: relative;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            border-top-width: 2px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 2px;
          }
          .content-list1-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list1-content {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list1-ul {
            align-items: flex-start;
          }
          .content-list1-heading1 {
            width: 1396px;
            height: 68px;
            align-self: flex-start;
            font-style: normal;
            text-align: center;
            font-family: 'Times New Roman';
            font-weight: 700;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            letter-spacing: 8px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .content-list1-text10 {
            display: inline-block;
            font-family: 'Times New Roman';
            font-weight: 400;
          }
          .content-list1-text11 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text12 {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .content-list1-text13 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text14 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text15 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text16 {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .content-list1-text17 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text18 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text19 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text20 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text22 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text23 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text24 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text25 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text26 {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .content-list1-text27 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text28 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text29 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text30 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text31 {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .content-list1-text32 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text33 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text34 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text35 {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .content-list1-text36 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text37 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text38 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text39 {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .content-list1-text40 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text41 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text42 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text43 {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .content-list1-text44 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text45 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text46 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text47 {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .content-list1-text48 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text49 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text50 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text51 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text52 {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .content-list1-text53 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text54 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text55 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text56 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text57 {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .content-list1-text58 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text59 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text60 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text61 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text62 {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .content-list1-text63 {
            font-size: 18px;
            font-weight: 700;
          }
          .content-list1-text64 {
            font-weight: 700;
          }
          .content-list1-text65 {
            display: inline-block;
            letter-spacing: 8px;
          }
        `}
      </style>
    </>
  )
}

ContentList1.defaultProps = {
  content1: undefined,
  rootClassName: '',
  contentList1Id: '',
  heading1: undefined,
}

ContentList1.propTypes = {
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  contentList1Id: PropTypes.string,
  heading1: PropTypes.element,
}

export default ContentList1
