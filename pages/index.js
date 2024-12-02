import React, { Fragment } from 'react'
import Head from 'next/head'

import Header26 from '../components/header26'
import Banner1 from '../components/banner1'
import ContentList11 from '../components/content-list11'
import Timeline4 from '../components/timeline4'
import Timeline7 from '../components/timeline7'
import Features4 from '../components/features4'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Milan Parmar</title>
          <meta property="og:title" content="Milan Parmar" />
        </Head>
        <header className="home-container2">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <a
                  href="#Timeline4"
                  className="home-link11 thq-body-small thq-link"
                >
                  EXPERIENCE
                </a>
                <a
                  href="#Timeline7"
                  className="home-link21 thq-body-small thq-link"
                >
                  EDUCATION
                </a>
                <a
                  href="#Features4"
                  className="home-link31 thq-body-small thq-link"
                >
                  <span>CERTIFICATIONS</span>
                  <br></br>
                </a>
                <a
                  href="#ContentList1"
                  className="home-link41 thq-body-small thq-link"
                >
                  PROJECTS/SKILLS
                </a>
                <a
                  href="#Banner1"
                  className="home-link51 thq-body-small thq-link"
                >
                  <span>BIO</span>
                  <br></br>
                </a>
              </nav>
              <div className="home-buttons1">
                <a
                  href="mailto:parmar.milan13@gmail.com?subject=Web Inquiry"
                  className="home-action1 thq-button-animated thq-button-filled"
                >
                  <span>Email</span>
                </a>
                <a
                  href="tel:+1 (226) 349-2570"
                  className="home-action2 thq-button-outline thq-button-animated"
                >
                  <span>Call</span>
                </a>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon1">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-top">
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <a
                href="#Banner1"
                className="home-link12 thq-body-small thq-link"
              >
                BIO
              </a>
              <a
                href="#ContentList11"
                className="home-link22 thq-body-small thq-link"
              >
                PROJECTS/SKILLS
              </a>
              <div className="home-container3">
                <a
                  href="#Timeline4"
                  className="home-link32 thq-body-small thq-link"
                >
                  EXPERIENCE
                </a>
              </div>
              <a
                href="#Timeline7"
                className="home-link42 thq-body-small thq-link"
              >
                EDUCATION
              </a>
              <a
                href="#Features4"
                className="home-link52 thq-body-small thq-link"
              >
                CERTIFICATIONS
              </a>
              <div className="home-buttons2"></div>
            </div>
          </header>
        </header>
        <Header26 rootClassName="header26root-class-name"></Header26>
        <Banner1
          content1={
            <Fragment>
              <span className="home-text106">
                Experienced Systems Administrator/Engineer with 10 years of
                experience in managing servers, networks, virtualization, cloud
                migrations, and backups in large and medium size enterprises.
                Expert skills to manage M365 Admin Centers such as Teams, M365,
                SharePoint, Exchange Online, Entra and Defender. Specialized in
                handling various firewalls and VPN including site-to-site tunnel
                (IPSec) and SSL-VPN (Cisco Meraki, Paloalto, FortiGate), L2/L3
                Switches, VoIP and access points. Demonstrated expertise in the
                Azure environment, Applications integration, Azure AD (Entra).
                Additionally, I am highly skilled in configuring, monitoring,
                and managing virtual environments such as Azure, Citrix, VMWare,
                and Hyper-V. Possesses advanced knowledge in security
                applications, including TrendMicro, Defender, Proofpoint,
                Barracuda, and AppRiver.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text107">Hello! I&apos;m Milan</span>
            </Fragment>
          }
          banner1Id="Banner1"
          rootClassName="banner1root-class-name"
        ></Banner1>
        <ContentList11
          content1={
            <Fragment>
              <span className="home-text108">
                <span>
                  • Windows Server: Windows server upgrades from 2012 to
                  2019/2022, including migrating and configuring roles such as
                  Active Directory, PS Scripting, File Server (SMB), DNS, DHCP,
                  Terminal (RDS), DFS, group policies (GPO)and Azure AD Connect.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Virtualization: Created and managed Hyper-V with failover
                  cluster nodes, VMs, SET. Configured and managed VMware ESXi
                  hosts (over 15 hosts and 650 VMs) and VCSA with clustering.
                  VMware migration from vSphere 5.5 to 6.7 and then to 7.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Firewall: Setup new and upgraded firewalls such as Paloalto,
                  FortiGate, SonicWall. Created firewall policies, NAT/PAT
                  policies, LACP, BGP, SD-WAN, DHCP, LDAP/SAML SSO, security
                  profiles, site-to-site VPN tunnels, L2TP, IPSec and SSLVPN for
                  clients.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Networking: Configured managed switches, SNMP, VLANs, tags,
                  port mirroring and trunk/access ports. Worked with various
                  vendors such as Aruba, UniFi, Cisco, configured WiFi channels
                  for APs to avoid conflicts, speed &amp; performance issues.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Cloud: Worked with Azure storage, VMs, RBAC, ExpressRoute,
                  Sentinel, Application integration (API), Microsoft Graph,
                  vNet. Migrated and managed Exchange Online, Entra admin with
                  B2B cross-tenant synchronization and collaboration.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Cloud Security: Implemented cloud security policies for MFA
                  enforcement and Passwordless security key, configured
                  geo-blocked policies and travel policies.
                </span>
                <br></br>
                <br></br>
                <span>
                  • MDM/Intune: ABM, SCCM, Defender, EDR/XDR and managed
                  policies. Handled Intune project of over 1000 devices,
                  configured Configuration &amp; Compliance policies
                </span>
                <br></br>
                <br></br>
                <span>
                  • SSO: Setup SAML authentication from Entra IdP to
                  authenticate FortiGate VPN users.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Teams Migration: Microsoft Teams Migration for over 300
                  users from RingCentral, and 3CX, including setting up
                  auto-attendant, service accounts and call queues.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • SharePoint Migration: SharePoint migration from Dropbox and
                  on-prem file servers, managed highly complex SharePoint
                  environment with complex user permissions for each site for
                  over 800 sites, automated tasks through Entra queries.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Email defense: Setup and configured email defense such as
                  Proofpoint, Barracuda.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • M365 Migration: Handled projects solely for email migration
                  from IMAP (cPanel), Gmail (Google Workspace), and Cutover
                  Migration from on-prem Exchange Server.
                </span>
                <br></br>
                <br></br>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text145">PROJECTS/SKILLS</span>
            </Fragment>
          }
          rootClassName="content-list11root-class-name1"
          contentList1Id="ContentList1"
        ></ContentList11>
        <Timeline4
          date13={
            <Fragment>
              <span className="home-text146">
                07/24-10/24, Yukon Hospitals Corporation (contract)
              </span>
            </Fragment>
          }
          date14={
            <Fragment>
              <span className="home-text147">
                07/17-11/21, CareIT Computer Services (MSP)
              </span>
            </Fragment>
          }
          date23={
            <Fragment>
              <span className="home-text148">
                10/23-06/24, Cloud9 Solutions (MSP) 
              </span>
            </Fragment>
          }
          date24={
            <Fragment>
              <span className="home-text149">
                05/15-06/17, Gorilla IT Services (MSP)
              </span>
            </Fragment>
          }
          date33={
            <Fragment>
              <span className="home-text150">
                05/22-08/23, Third Octet Inc (MSP)
              </span>
            </Fragment>
          }
          date43={
            <Fragment>
              <span className="home-text151">
                12/21-04/23, Infinus Technology, BMC Networks (MSP)
              </span>
            </Fragment>
          }
          title13={
            <Fragment>
              <span className="home-text152">
                <span>EXPERIENCE</span>
                <br></br>
              </span>
            </Fragment>
          }
          timeline4Id="Timeline4"
          card1Content3={
            <Fragment>
              <span className="home-text155">
                <span>
                  • Delivered Tier 3/4 configuration and support for Yukon
                  Hospitals&apos; Cisco ecosystem across three locations
                  including VoIP, CUCM, CMX, UCS, VMware, and Microsoft 365.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Spearheaded the storage migration project from legacy EMC
                  Isilon systems, ensuring seamless data transition.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Led the MS365 Intune and Defender migration project for over
                  1000 devices using hybrid Azure AD join and GPO, enhancing
                  security and management capabilities.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Managed and optimized a virtual infrastructure of over 600
                  VMs on VMware, spanning 15+ hosts, ensuring high availability
                  and performance.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Configured and administered Windows servers, including AD
                  users and GPOs.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Oversaw M365 license management for 1,000+ accounts,
                  ensuring compliance and effective use of Exchange Online.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Executed advanced networking configurations, including STP,
                  VLANs, Catalyst core switches and failover with HSRP, to
                  ensure network reliability and cybersecurity.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Collaborated on a large-scale AP replacement project with
                  WLC, Prime Infrastructure upgrade, deploying over 180 access
                  points to improve coverage.
                </span>
                <br></br>
                <br></br>
              </span>
            </Fragment>
          }
          card1Content4={
            <Fragment>
              <span className="home-text180">
                <span>
                  • Used and managed virtualization software such as VMware, and
                  HyperV
                </span>
                <br></br>
                <br></br>
                <span>
                  • Worked on exchange tasks, desktop deployments, imaging, and
                  account creations.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Windows Server Administration of DHCP, AD, DNS, SMTP, Print,
                  IIS, RDS, Domain Controller, Group Policies, VOIP, TCP/IP, SMB
                  and VPN.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Deliver technical support for Windows 10/8.1/7 Server
                  2019/2016/2012/2008.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Configured monitoring and Administration of firewalls
                  (Sophos, Fortinet, SonicWall), including firmware upgrades,
                  content blocking, port forwarding.
                </span>
                <br></br>
                <br></br>
                <span>
                  • MFA implementation, O365 account setup, creating policies
                  and troubleshot.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Setup Azure AD and configured the on prem domain sync with
                  Azure ad sync.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • M365, SharePoint and Citrix end user support including
                  master image.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Setup SharePoint online with permissions, created and modify
                  subsites, and pages.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Firewall and backup solutions such as Sophos, SonicWall,
                  Veeam and QNAP
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Network configuration, troubleshooting, upgrade, LAN setup,
                  virus removal and boost up as well as after service IT
                  support.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          card1Heading3={
            <Fragment>
              <span className="home-text213">
                <span>IT Infrastrucure Engineer/Network Analyst</span>
                <br></br>
              </span>
            </Fragment>
          }
          card1Heading4={
            <Fragment>
              <span className="home-text216">IT Specialist</span>
            </Fragment>
          }
          card2Content3={
            <Fragment>
              <span className="home-text217">
                <span>
                  • Provide support to escalated L2/L3 tickets, IT
                  Infrastructure &amp; Operations.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Been active team player, clear communicator with
                  team/clients, and working for 3 teams at the same time proving
                  multi-tasking skills and dedication to work.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Azure cloud management including VMs, Storage, monitor
                  services, vNet etc.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Plan and design IT infrastructures for clients including
                  firewall, switches, and servers.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Extensive support for M365 products such as Teams Admin
                  Center, Exchange Online, M365 Admin Center, SharePoint,
                  Defender, Endpoint manager (Intune) and Entra.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Created and assign security policies (DLP &amp; DR) and
                  rules in Intune, EAC and Defender
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Upgraded and provided support with setup and security
                  polices for various firewall brands such as Palo Alto
                  Networks, FortiGate, Cisco Meraki and SonicWall.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Site-to-site VPN tunnel, and SSL-VPN setup using SAML for
                  SSO authentication.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Monitor, manage and maintain Windows servers, VMWare, and
                  Hyper-V.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Advanced knowledge of PowerShell scripts to automate tasks
                  and M365 queries.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Handled various MS migration projects such as Teams
                  Migration &amp; M365 Migration.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Used RMM tools such as ConnectWise, ScreenConnect, Nable,
                  Autotask and ITGlue
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          card2Content4={
            <Fragment>
              <span className="home-text253">
                <span>
                  • Hardware and software IT support for cell phones, computers,
                  printers, Wi-Fi and
                </span>
                <br></br>
                <br></br>
                <span>
                  other electronics devices including installation,
                  configuration, and troubleshooting.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Managed Windows server, diagnose and troubleshoot active
                  directory.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Created and managed VLANs and performed day-to-day
                  administration tasks on LAN and WAN, also performed switch and
                  firewall upgrades.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Monitoring network hardware operations to ensure proper
                  operation.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Set up hardware and software optimal configuration to meet
                  network performance.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Managed a retail store of 5 employees cell phone and
                  computer parts and repairs.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Demonstrated time management, multitasking skills with
                  documentation skills.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Highly appreciated by several customers for the fast,
                  trustworthy &amp; accurate service
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>• Windows Server management, LDAP, and Azure VDI.</span>
                <br></br>
              </span>
            </Fragment>
          }
          card2Heading3={
            <Fragment>
              <span className="home-text283">
                L2/L3 IT Systems Administrator (Systems Engineer)
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          card2Heading4={
            <Fragment>
              <span className="home-text284">
                Manager, IT Support Technician
              </span>
            </Fragment>
          }
          card3Content3={
            <Fragment>
              <span className="home-text285">
                <span>
                  • Provide IT support to various clients including Accounting,
                  Law firms, manufacturing.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Manage and maintain Firewall appliances such as Cisco Meraki
                  and SonicWall.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Plan and design network infrastructures for clients,
                  supported Google workspace.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Managed Cisco Switches, Cisco Unified Communications
                  Manager, VoIP and ISE.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Coordinating, implementing, and communicating any system
                  changes that are to be made such as pushing an image to
                  production server and Application update.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Configured and managed EMC storage, UCS server and HP
                  Nimble.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Email defense gateways such as Barracuda and Microsoft
                  Defender
                </span>
                <br></br>
                <br></br>
                <span>
                  • IPSec, Site-to-site VPN setup, maintain and troubleshoot for
                  various clients.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Monitor, manage and maintain Windows servers, VMWare and
                  HyperV.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Manage and maintain Office 365, Microsoft 365, Azure AD and
                  on-prem ADDS.
                </span>
                <br></br>
                <br></br>
                <span>• Working experience with ConnectWise RMM and tools</span>
                <br></br>
                <br></br>
                <span>
                  • Cloud migration from on-prem servers and Exchange Servers
                  such as Office 365.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Automate tasks using PowerShell scripts, batch files and RMM
                  tools
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          card3Heading3={
            <Fragment>
              <span className="home-text324">Systems Administrator</span>
            </Fragment>
          }
          card4Content3={
            <Fragment>
              <span className="home-text325">
                <span>
                  • Provided Tier 2/3 IT support and handled various IT
                  Infrastructure projects.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Create and maintain Firewall policies/rules and remote
                  desktops (RDP)
                </span>
                <br></br>
                <br></br>
                <span>
                  • Implemented SSO using ADFS and Azure, streamlining access
                  management, set up MFA and geo-blocking, enhancing security
                  and reduced unauthorized access by 50%
                </span>
                <br></br>
                <br></br>
                <span>
                  • Manage and maintain Office 365, Microsoft 365, and Azure AD
                  and on-prem ADDS.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Manage DNS records, DNS zones and domain services for
                  websites.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Working experience with ConnectWise RMM, ScreenConnect and
                  Manage tools.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Creating and maintaining group policies, shared drives, and
                  domain services
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  • Manage and troubleshoot print servers, SharePoint, and
                  shared printers.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Setup SharePoint online with permissions, created and modify
                  subsites, and pages.
                </span>
                <br></br>
                <br></br>
                <span>
                  • Email server’s setup and troubleshooting including Exchange
                  Online, on-prem Exchange server and cPanel.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          card4Heading3={
            <Fragment>
              <span className="home-text355">Sr Systems Administrator </span>
            </Fragment>
          }
          rootClassName="timeline4root-class-name"
        ></Timeline4>
        <Timeline7
          date1={
            <Fragment>
              <span className="home-text356">2013-2015</span>
            </Fragment>
          }
          date2={
            <Fragment>
              <span className="home-text357">2009-2013</span>
            </Fragment>
          }
          title1={
            <Fragment>
              <span className="home-text358">EDUCATION</span>
            </Fragment>
          }
          timeline7Id="Timeline7"
          card1Content={
            <Fragment>
              <span className="home-text359">
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
          }
          card1Heading={
            <Fragment>
              <span className="home-text369">
                Information Technology Professional, Post Graduate
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          card2Content={
            <Fragment>
              <span className="home-text370">
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
          }
          card2Heading={
            <Fragment>
              <span className="home-text375">
                Electronic &amp; Communication Engineering, Bachelor of
                Technology
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          rootClassName="timeline7root-class-name"
        ></Timeline7>
        <Features4
          features4Id="Features4"
          sectionTitle={
            <Fragment>
              <span className="home-text376">CERTIFICATIONS</span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="home-text377">
                Microsoft 365 Certified: Administrator Expert
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text378">
                <span>
                    Microsoft Certified:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Azure Administrator
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text382">
                {' '}
                Microsoft 365 Certified: Teams Administrator
              </span>
            </Fragment>
          }
          feature4Title={
            <Fragment>
              <span className="home-text383">
                 Fortinet Certified: Associate in Cybersecurity
              </span>
            </Fragment>
          }
          rootClassName="features4root-class-name"
          feature1Title1={
            <Fragment>
              <span className="home-text384">
                Microsoft Certified Professional
              </span>
            </Fragment>
          }
          feature2Title1={
            <Fragment>
              <span className="home-text385">
                <br></br>
                <span>
                  Certified Server Virtualization with Windows Server Hyper-V
                  &amp; System Center (SCCM)
                </span>
              </span>
            </Fragment>
          }
          feature3Title1={
            <Fragment>
              <span className="home-text388">
                <br></br>
                <span>Microsoft Certified: Windows Server Administrator</span>
              </span>
            </Fragment>
          }
          feature4Title1={
            <Fragment>
              <span className="home-text391">
                <br></br>
                <span>CompTIA Certified: CompTIA Project+</span>
              </span>
            </Fragment>
          }
        ></Features4>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-container2 {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link11 {
            text-decoration: none;
          }
          .home-link21 {
            text-decoration: none;
          }
          .home-link31 {
            text-decoration: none;
          }
          .home-link41 {
            text-decoration: none;
          }
          .home-link51 {
            text-decoration: none;
          }
          .home-buttons1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-action1 {
            display: flex;
            border-color: #146dc7;
            flex-direction: row;
            text-decoration: none;
            background-color: #1f8fda;
          }
          .home-action2 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            display: flex;
            border-color: #028318;
            flex-direction: row;
            text-decoration: none;
            background-color: #0c8309;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon1 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: absolute;
            transform: translateY(-100%);
            transition: 0.5s;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-link12 {
            text-decoration: none;
          }
          .home-link22 {
            text-decoration: none;
          }
          .home-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-link32 {
            text-decoration: none;
          }
          .home-link42 {
            text-decoration: none;
          }
          .home-link52 {
            text-decoration: none;
          }
          .home-buttons2 {
            gap: var(--dl-space-space-twounits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
          }
          .home-text106 {
            color: rgb(17, 17, 105);
            display: inline-block;
          }
          .home-text107 {
            display: inline-block;
          }
          .home-text108 {
            display: inline-block;
            font-family: 'Times New Roman';
          }
          .home-text145 {
            display: inline-block;
            letter-spacing: 8px;
          }
          .home-text146 {
            display: inline-block;
          }
          .home-text147 {
            display: inline-block;
          }
          .home-text148 {
            display: inline-block;
          }
          .home-text149 {
            display: inline-block;
          }
          .home-text150 {
            display: inline-block;
          }
          .home-text151 {
            display: inline-block;
          }
          .home-text152 {
            display: inline-block;
          }
          .home-text155 {
            display: inline-block;
            font-size: 16px;
            font-family: 'Times New Roman';
            font-weight: 400;
            line-height: 1;
            text-transform: none;
            text-decoration: none;
          }
          .home-text180 {
            display: inline-block;
            font-size: 16px;
            font-family: 'Times New Roman';
            line-height: 1;
          }
          .home-text213 {
            display: inline-block;
          }
          .home-text216 {
            display: inline-block;
          }
          .home-text217 {
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 400;
            line-height: 1;
          }
          .home-text253 {
            display: inline-block;
            font-size: 16px;
            font-family: 'Times New Roman';
            line-height: 1;
          }
          .home-text283 {
            display: inline-block;
          }
          .home-text284 {
            display: inline-block;
          }
          .home-text285 {
            display: inline-block;
            font-size: 16px;
            font-family: 'Times New Roman';
            line-height: 1;
          }
          .home-text324 {
            display: inline-block;
          }
          .home-text325 {
            display: inline-block;
            font-size: 16px;
            font-family: 'Times New Roman';
            line-height: 1;
          }
          .home-text355 {
            display: inline-block;
          }
          .home-text356 {
            display: inline-block;
          }
          .home-text357 {
            display: inline-block;
          }
          .home-text358 {
            display: inline-block;
          }
          .home-text359 {
            display: inline-block;
          }
          .home-text369 {
            display: inline-block;
          }
          .home-text370 {
            display: inline-block;
          }
          .home-text375 {
            display: inline-block;
          }
          .home-text376 {
            display: inline-block;
          }
          .home-text377 {
            display: inline-block;
          }
          .home-text378 {
            display: inline-block;
          }
          .home-text382 {
            display: inline-block;
          }
          .home-text383 {
            display: inline-block;
          }
          .home-text384 {
            display: inline-block;
          }
          .home-text385 {
            display: inline-block;
          }
          .home-text388 {
            display: inline-block;
          }
          .home-text391 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .home-text217 {
              font-family: Times New Roman;
            }
            .home-text285 {
              font-family: Times New Roman;
            }
          }
          @media (max-width: 479px) {
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-text108 {
              font-family: Times New Roman;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
