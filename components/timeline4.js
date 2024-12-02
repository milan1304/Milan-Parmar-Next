import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import CTA15 from './cta15'

const Timeline4 = (props) => {
  return (
    <>
      <div
        id={props.timeline4Id}
        className={`timeline4-container10 thq-section-padding ${props.rootClassName} `}
      >
        <div className="timeline4-container11"></div>
        <div className="timeline4-max-width1 thq-section-max-width">
          <div className="timeline4-container12">
            <h2 className="timeline4-text100 thq-heading-2">
              {props.title13 ?? (
                <Fragment>
                  <span className="timeline4-text153">
                    <span>EXPERIENCE</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </h2>
            <div className="timeline4-container13"></div>
          </div>
          <CTA15 rootClassName="cta15root-class-name"></CTA15>
          <div className="timeline4-timeline-container1">
            <div className="timeline4-step11">
              <div className="timeline4-container14">
                <div className="timeline4-container15"></div>
                <div className="timeline4-progress01"></div>
              </div>
              <div className="timeline4-container16">
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
                    className="timeline4-container17"
                  >
                    <h3 className="timeline4-text101 thq-heading-3">
                      {props.date13 ?? (
                        <Fragment>
                          <span className="timeline4-text231">
                            07/24-10/24, Yukon Hospitals Corporation (contract)
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <h3 className="timeline4-text102 thq-heading-3">
                      {props.card1Heading3 ?? (
                        <Fragment>
                          <span className="timeline4-text265">
                            <span>
                              IT Infrastrucure Engineer/Network Analyst
                            </span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="timeline4-text103 thq-body-small">
                      {props.card1Content3 ?? (
                        <Fragment>
                          <span className="timeline4-text302">
                            <span>
                              • Delivered Tier 3/4 configuration and support for
                              Yukon Hospitals&apos; Cisco ecosystem across three
                              locations including VoIP, CUCM, CMX, UCS, VMware,
                              and Microsoft 365.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              • Spearheaded the storage migration project from
                              legacy EMC Isilon systems, ensuring seamless data
                              transition.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              • Led the MS365 Intune and Defender migration
                              project for over 1000 devices using hybrid Azure
                              AD join and GPO, enhancing security and management
                              capabilities.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              • Managed and optimized a virtual infrastructure
                              of over 600 VMs on VMware, spanning 15+ hosts,
                              ensuring high availability and performance.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              • Configured and administered Windows servers,
                              including AD users and GPOs.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              • Oversaw M365 license management for 1,000+
                              accounts, ensuring compliance and effective use of
                              Exchange Online.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              • Executed advanced networking configurations,
                              including STP, VLANs, Catalyst core switches and
                              failover with HSRP, to ensure network reliability
                              and cybersecurity.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              • Collaborated on a large-scale AP replacement
                              project with WLC, Prime Infrastructure upgrade,
                              deploying over 180 access points to improve
                              coverage.
                            </span>
                            <br></br>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <div className="timeline4-container18"></div>
                  </div>
                </animate-on-reveal>
              </div>
            </div>
            <div className="timeline4-step21">
              <div className="timeline4-container19">
                <div className="timeline4-container20"></div>
                <div className="timeline4-progress02"></div>
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
                  className="timeline4-container21"
                >
                  <h3 className="timeline4-text104 thq-heading-3">
                    {props.date23 ?? (
                      <Fragment>
                        <span className="timeline4-text264">
                          10/23-06/24, Cloud9 Solutions (MSP) 
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <h3 className="timeline4-text105 thq-heading-3">
                    {props.card2Heading3 ?? (
                      <Fragment>
                        <span className="timeline4-text150">
                          L2/L3 IT Systems Administrator (Systems Engineer)
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small timeline4-text106">
                    {props.card2Content3 ?? (
                      <Fragment>
                        <span className="timeline4-text156">
                          <span>
                            • Provide support to escalated L2/L3 tickets, IT
                            Infrastructure &amp; Operations.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Been active team player, clear communicator with
                            team/clients, and working for 3 teams at the same
                            time proving multi-tasking skills and dedication to
                            work.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Azure cloud management including VMs, Storage,
                            monitor services, vNet etc.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Plan and design IT infrastructures for clients
                            including firewall, switches, and servers.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Extensive support for M365 products such as Teams
                            Admin Center, Exchange Online, M365 Admin Center,
                            SharePoint, Defender, Endpoint manager (Intune) and
                            Entra.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Created and assign security policies (DLP &amp;
                            DR) and rules in Intune, EAC and Defender
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Upgraded and provided support with setup and
                            security polices for various firewall brands such as
                            Palo Alto Networks, FortiGate, Cisco Meraki and
                            SonicWall.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Site-to-site VPN tunnel, and SSL-VPN setup using
                            SAML for SSO authentication.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Monitor, manage and maintain Windows servers,
                            VMWare, and Hyper-V.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Advanced knowledge of PowerShell scripts to
                            automate tasks and M365 queries.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Handled various MS migration projects such as
                            Teams Migration &amp; M365 Migration.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Used RMM tools such as ConnectWise, ScreenConnect,
                            Nable, Autotask and ITGlue
                          </span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="timeline4-container22"></div>
                </div>
              </animate-on-reveal>
            </div>
            <div className="timeline4-step31">
              <div className="timeline4-container23">
                <div className="timeline4-container24"></div>
                <div className="timeline4-progress03"></div>
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
                  className="timeline4-container25"
                >
                  <h3 className="timeline4-text107 thq-heading-3">
                    {props.date33 ?? (
                      <Fragment>
                        <span className="timeline4-text328">
                          05/22-08/23, Third Octet Inc (MSP)
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <h3 className="timeline4-text108 thq-heading-3">
                    {props.card3Heading3 ?? (
                      <Fragment>
                        <span className="timeline4-text263">
                          Systems Administrator
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="timeline4-text109 thq-body-small">
                    {props.card3Content3 ?? (
                      <Fragment>
                        <span className="timeline4-text192">
                          <span>
                            • Provide IT support to various clients including
                            Accounting, Law firms, manufacturing.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Manage and maintain Firewall appliances such as
                            Cisco Meraki and SonicWall.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Plan and design network infrastructures for
                            clients, supported Google workspace.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Managed Cisco Switches, Cisco Unified
                            Communications Manager, VoIP and ISE.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Coordinating, implementing, and communicating any
                            system changes that are to be made such as pushing
                            an image to production server and Application
                            update.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Configured and managed EMC storage, UCS server and
                            HP Nimble.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Email defense gateways such as Barracuda and
                            Microsoft Defender
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • IPSec, Site-to-site VPN setup, maintain and
                            troubleshoot for various clients.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Monitor, manage and maintain Windows servers,
                            VMWare and HyperV.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Manage and maintain Office 365, Microsoft 365,
                            Azure AD and on-prem ADDS.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Working experience with ConnectWise RMM and tools
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Cloud migration from on-prem servers and Exchange
                            Servers such as Office 365.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Automate tasks using PowerShell scripts, batch
                            files and RMM tools
                          </span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="timeline4-container26"></div>
                </div>
              </animate-on-reveal>
            </div>
            <div className="timeline4-step41">
              <div className="timeline4-container27">
                <div className="timeline4-container28"></div>
                <div className="timeline4-progress04"></div>
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
                  className="timeline4-container29"
                >
                  <h3 className="timeline4-text110 thq-heading-3">
                    {props.date43 ?? (
                      <Fragment>
                        <span className="timeline4-text327">
                          12/21-04/23, Infinus Technology, BMC Networks (MSP)
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <h3 className="timeline4-text111 thq-heading-3">
                    {props.card4Heading3 ?? (
                      <Fragment>
                        <span className="timeline4-text262">
                          Sr Systems Administrator 
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small timeline4-text112">
                    {props.card4Content3 ?? (
                      <Fragment>
                        <span className="timeline4-text120">
                          <span>
                            • Provided Tier 2/3 IT support and handled various
                            IT Infrastructure projects.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Create and maintain Firewall policies/rules and
                            remote desktops (RDP)
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Implemented SSO using ADFS and Azure, streamlining
                            access management, set up MFA and geo-blocking,
                            enhancing security and reduced unauthorized access
                            by 50%
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Manage and maintain Office 365, Microsoft 365, and
                            Azure AD and on-prem ADDS.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Manage DNS records, DNS zones and domain services
                            for websites.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Working experience with ConnectWise RMM,
                            ScreenConnect and Manage tools.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Creating and maintaining group policies, shared
                            drives, and domain services
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Manage and troubleshoot print servers, SharePoint,
                            and shared printers.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Setup SharePoint online with permissions, created
                            and modify subsites, and pages.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            • Email server’s setup and troubleshooting including
                            Exchange Online, on-prem Exchange server and cPanel.
                          </span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="timeline4-container30"></div>
                </div>
              </animate-on-reveal>
            </div>
            <div className="timeline4-max-width2 thq-section-max-width">
              <div className="timeline4-timeline-container2">
                <div className="timeline4-step12">
                  <div className="timeline4-container31">
                    <div className="timeline4-container32"></div>
                    <div className="timeline4-progress05"></div>
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
                      className="timeline4-container33"
                    >
                      <h3 className="timeline4-text113 thq-heading-3">
                        {props.date14 ?? (
                          <Fragment>
                            <span className="timeline4-text152">
                              07/17-11/21, CareIT Computer Services (MSP)
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <h3 className="timeline4-text114 thq-heading-3">
                        {props.card1Heading4 ?? (
                          <Fragment>
                            <span className="timeline4-text301">
                              IT Specialist
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <span className="thq-body-small">
                        {props.card1Content4 ?? (
                          <Fragment>
                            <span className="timeline4-text268">
                              <span>
                                • Used and managed virtualization software such
                                as VMware, and HyperV
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • Worked on exchange tasks, desktop deployments,
                                imaging, and account creations.
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • Windows Server Administration of DHCP, AD,
                                DNS, SMTP, Print, IIS, RDS, Domain Controller,
                                Group Policies, VOIP, TCP/IP, SMB and VPN.
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • Deliver technical support for Windows 10/8.1/7
                                Server 2019/2016/2012/2008.
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • Configured monitoring and Administration of
                                firewalls (Sophos, Fortinet, SonicWall),
                                including firmware upgrades, content blocking,
                                port forwarding.
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • MFA implementation, O365 account setup,
                                creating policies and troubleshot.
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • Setup Azure AD and configured the on prem
                                domain sync with Azure ad sync.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • M365, SharePoint and Citrix end user support
                                including master image.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • Setup SharePoint online with permissions,
                                created and modify subsites, and pages.
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • Firewall and backup solutions such as Sophos,
                                SonicWall, Veeam and QNAP
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • Network configuration, troubleshooting,
                                upgrade, LAN setup, virus removal and boost up
                                as well as after service IT support.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <div className="timeline4-container34"></div>
                    </div>
                  </animate-on-reveal>
                </div>
                <div className="timeline4-step22">
                  <div className="timeline4-container35">
                    <div className="timeline4-container36"></div>
                    <div className="timeline4-progress06"></div>
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
                      className="timeline4-container37"
                    >
                      <h3 className="timeline4-text116 thq-heading-3">
                        {props.date24 ?? (
                          <Fragment>
                            <span className="timeline4-text119">
                              05/15-06/17, Gorilla IT Services (MSP)
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <h3 className="timeline4-text117 thq-heading-3">
                        {props.card2Heading4 ?? (
                          <Fragment>
                            <span className="timeline4-text151">
                              Manager, IT Support Technician
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <span className="thq-body-small">
                        {props.card2Content4 ?? (
                          <Fragment>
                            <span className="timeline4-text232">
                              <span>
                                • Hardware and software IT support for cell
                                phones, computers, printers, Wi-Fi and
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                other electronics devices including
                                installation, configuration, and
                                troubleshooting.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • Managed Windows server, diagnose and
                                troubleshoot active directory.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • Created and managed VLANs and performed
                                day-to-day administration tasks on LAN and WAN,
                                also performed switch and firewall upgrades.
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • Monitoring network hardware operations to
                                ensure proper operation.
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • Set up hardware and software optimal
                                configuration to meet network performance.
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • Managed a retail store of 5 employees cell
                                phone and computer parts and repairs.
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • Demonstrated time management, multitasking
                                skills with documentation skills.
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • Highly appreciated by several customers for
                                the fast, trustworthy &amp; accurate service
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <br></br>
                              <span>
                                • Windows Server management, LDAP, and Azure
                                VDI.
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <div className="timeline4-container38"></div>
                    </div>
                  </animate-on-reveal>
                </div>
                <div className="timeline4-step32">
                  <div className="timeline4-container39">
                    <div className="timeline4-container40"></div>
                    <div className="timeline4-progress07"></div>
                  </div>
                </div>
                <div className="timeline4-step42">
                  <div className="timeline4-container41">
                    <div className="timeline4-container42"></div>
                    <div className="timeline4-progress08"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .timeline4-container10 {
            height: 3242px;
            padding-top: var(--dl-space-space-fourunits);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            padding-bottom: var(--dl-space-space-fourunits);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 2px;
          }
          .timeline4-container11 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline4-max-width1 {
            width: 100%;
            height: 3136px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .timeline4-container12 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 96px;
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
          .timeline4-text100 {
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            letter-spacing: 8px;
          }
          .timeline4-container13 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline4-timeline-container1 {
            flex: 1;
            width: fit-content;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline4-step11 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline4-container14 {
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
          .timeline4-container15 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline4-progress01 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline4-container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .timeline4-container17 {
            width: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline4-text101 {
            font-style: normal;
            font-weight: 700;
          }
          .timeline4-text102 {
            font-style: italic;
            text-align: left;
            font-weight: 600;
            line-height: 2.5;
          }
          .timeline4-text103 {
            font-family: 'Times New Roman';
            animation-name: none;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .timeline4-container18 {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .timeline4-step21 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline4-container19 {
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
          .timeline4-container20 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline4-progress02 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline4-container21 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline4-text104 {
            font-style: normal;
            font-weight: 700;
          }
          .timeline4-text105 {
            font-style: italic;
            text-align: left;
            font-weight: 600;
          }
          .timeline4-container22 {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .timeline4-step31 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline4-container23 {
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
          .timeline4-container24 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline4-progress03 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline4-container25 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline4-text107 {
            font-style: normal;
            font-weight: 700;
          }
          .timeline4-text108 {
            font-style: italic;
            text-align: left;
            font-weight: 600;
          }
          .timeline4-text109 {
            animation-name: slideInRight;
            animation-delay: 0s;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .timeline4-container26 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline4-step41 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline4-container27 {
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
          .timeline4-container28 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline4-progress04 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline4-container29 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline4-text110 {
            font-style: normal;
            font-weight: 700;
          }
          .timeline4-text111 {
            font-style: italic;
            text-align: left;
            font-weight: 600;
          }
          .timeline4-container30 {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .timeline4-max-width2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            animation-name: none;
            flex-direction: column;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .timeline4-timeline-container2 {
            width: auto;
            height: 1112px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline4-step12 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline4-container31 {
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
          .timeline4-container32 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline4-progress05 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline4-container33 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline4-text113 {
            font-style: normal;
            font-weight: 700;
          }
          .timeline4-text114 {
            font-style: italic;
            text-align: left;
            font-weight: 600;
          }
          .timeline4-container34 {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .timeline4-step22 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline4-container35 {
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
          .timeline4-container36 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline4-progress06 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline4-container37 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline4-text116 {
            font-style: normal;
            font-weight: 700;
          }
          .timeline4-text117 {
            font-style: italic;
            text-align: left;
            font-weight: 600;
          }
          .timeline4-container38 {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .timeline4-step32 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline4-container39 {
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
          .timeline4-container40 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline4-progress07 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline4-step42 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline4-container41 {
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
          .timeline4-container42 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline4-progress08 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline4-text119 {
            display: inline-block;
          }
          .timeline4-text120 {
            display: inline-block;
            font-size: 16px;
            font-family: 'Times New Roman';
            line-height: 1;
          }
          .timeline4-text150 {
            display: inline-block;
          }
          .timeline4-text151 {
            display: inline-block;
          }
          .timeline4-text152 {
            display: inline-block;
          }
          .timeline4-text153 {
            display: inline-block;
          }
          .timeline4-text156 {
            display: inline-block;
            font-size: 16px;
            font-family: 'Times New Roman';
            font-weight: 400;
            line-height: 1;
            text-transform: none;
            text-decoration: none;
          }
          .timeline4-text192 {
            display: inline-block;
            font-size: 16px;
            font-family: 'Times New Roman';
            line-height: 1;
          }
          .timeline4-text231 {
            display: inline-block;
          }
          .timeline4-text232 {
            display: inline-block;
            font-size: 16px;
            font-family: 'Times New Roman';
          }
          .timeline4-text262 {
            display: inline-block;
          }
          .timeline4-text263 {
            display: inline-block;
          }
          .timeline4-text264 {
            display: inline-block;
          }
          .timeline4-text265 {
            display: inline-block;
          }
          .timeline4-text268 {
            display: inline-block;
            font-size: 16px;
            font-family: 'Times New Roman';
            line-height: 1;
          }
          .timeline4-text301 {
            display: inline-block;
          }
          .timeline4-text302 {
            display: inline-block;
            font-size: 16px;
            font-family: 'Times New Roman';
            font-weight: 400;
            line-height: 1;
            text-transform: none;
            text-decoration: none;
          }
          .timeline4-text327 {
            display: inline-block;
          }
          .timeline4-text328 {
            display: inline-block;
          }
          .timeline4root-class-name {
            height: 3120px;
          }
          @media (max-width: 1600px) {
            .timeline4-container10 {
              height: 3237px;
              padding-top: var(--dl-space-space-twounits);
              border-color: var(--dl-color-theme-neutral-dark);
              border-width: 1px;
              padding-bottom: var(--dl-space-space-twounits);
              border-top-width: 2px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 2px;
            }
            .timeline4-container12 {
              flex: 0;
              height: 293px;
              overflow: visible;
            }
            .timeline4-text100 {
              align-self: center;
              font-style: normal;
              font-weight: 700;
              letter-spacing: 8px;
            }
            .timeline4-timeline-container1 {
              width: 100%;
              height: 2747px;
              animation-name: none;
              animation-delay: 0s;
              animation-duration: 500ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-in;
            }
            .timeline4-container17 {
              animation-name: slideInLeft;
              animation-delay: 0ms;
              animation-duration: 500ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-in;
            }
            .timeline4-text103 {
              animation-name: none;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .timeline4-container21 {
              animation-name: slideInRight;
              animation-delay: 0s;
              animation-duration: 500ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .timeline4-text106 {
              animation-name: none;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .timeline4-container25 {
              animation-name: slideInRight;
              animation-delay: 0s;
              animation-duration: 500ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .timeline4-text109 {
              animation-name: none;
            }
            .timeline4-container29 {
              animation-name: slideInRight;
              animation-delay: 0s;
              animation-duration: 500ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .timeline4-text112 {
              animation-name: none;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .timeline4-max-width2 {
              height: 1053px;
            }
            .timeline4-timeline-container2 {
              height: 100%;
            }
            .timeline4-container33 {
              animation-name: slideInRight;
              animation-delay: 0s;
              animation-duration: 500ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .timeline4-container37 {
              animation-name: slideInRight;
              animation-delay: 0s;
              animation-duration: 500ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .timeline4-text156 {
              font-family: Times New Roman;
            }
            .timeline4-text192 {
              font-family: Times New Roman;
            }
            .timeline4root-class-name {
              height: auto;
              max-height: 3100px;
            }
          }
          @media (max-width: 1200px) {
            .timeline4-container10 {
              height: 3414px;
              margin-bottom: 0px;
            }
            .timeline4-container17 {
              width: 1030px;
            }
            .timeline4root-class-name {
              max-height: 3500px;
            }
          }
          @media (max-width: 479px) {
            .timeline4-container10 {
              width: 479px;
              height: 5981px;
              display: flex;
              flex-direction: column;
            }
            .timeline4-container17 {
              width: 331px;
              justify-content: flex-start;
            }
            .timeline4-text102 {
              line-height: 1.5;
            }
            .timeline4-text103 {
              width: auto;
            }
            .timeline4root-class-name {
              overflow: auto;
              align-self: center;
              max-height: 6500px;
            }
          }
        `}
      </style>
    </>
  )
}

Timeline4.defaultProps = {
  date24: undefined,
  card4Content3: undefined,
  card2Heading3: undefined,
  card2Heading4: undefined,
  date14: undefined,
  title13: undefined,
  card2Content3: undefined,
  card3Content3: undefined,
  date13: undefined,
  card2Content4: undefined,
  card4Heading3: undefined,
  rootClassName: '',
  card3Heading3: undefined,
  date23: undefined,
  card1Heading3: undefined,
  card1Content4: undefined,
  card1Heading4: undefined,
  timeline4Id: '',
  card1Content3: undefined,
  date43: undefined,
  date33: undefined,
}

Timeline4.propTypes = {
  date24: PropTypes.element,
  card4Content3: PropTypes.element,
  card2Heading3: PropTypes.element,
  card2Heading4: PropTypes.element,
  date14: PropTypes.element,
  title13: PropTypes.element,
  card2Content3: PropTypes.element,
  card3Content3: PropTypes.element,
  date13: PropTypes.element,
  card2Content4: PropTypes.element,
  card4Heading3: PropTypes.element,
  rootClassName: PropTypes.string,
  card3Heading3: PropTypes.element,
  date23: PropTypes.element,
  card1Heading3: PropTypes.element,
  card1Content4: PropTypes.element,
  card1Heading4: PropTypes.element,
  timeline4Id: PropTypes.string,
  card1Content3: PropTypes.element,
  date43: PropTypes.element,
  date33: PropTypes.element,
}

export default Timeline4
