import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';


interface CareerNode {
  name: string;
  timeframe: string;
  description?: string;
  workplaceImg?: string;
  responsibilities?: string[];
  children?: CareerNode[];
}

const TREE_DATA: CareerNode[] = [
  {
    name: 'Billpocket',
    timeframe : 'Jul 2013 - Present',
    workplaceImg : 'billpocket.png',
    children: [
      {
        name: 'Head of Engineering',
        timeframe : 'Dec 2018 - Present',
        description : 'Ensure business continuity and service reliability from a wider tech perspective.\n' +
          'Spearheading the R&D programs for new technology implementation (i.e. PCI SPoC "PIN on Glass") and hardware updates. Involved in the decision-making process for the product and new-feature rollout. Still coding for mobile apps (Android, mainly) and core backend.',
        responsibilities : [
          'Cloud infrastructure (IBM Cloud, AWS), reliability and redundancy design',
          'PCI DSS Certification process co-ownership',
          'Leading the team behind PCI SPoC (PIN-on-Glass) implementation',
          'Management and Mentorship for Tech Leaders on the Dev Team',
          'Feasibility analysis for new features and ideas',
          'Deployment of security-related training for all teams in the company',
          'Android (Java, Kotlin) feature design and implementation',
          'Broad implementation of Google\'s Firebase portfolio',
          'Core Backend (Java, Kotlin) extension and optimization'
        ],
      },
      {
        name: 'Tech Lead',
        timeframe: 'May 2017 - Jan 2019',
        description: 'Working with the whole dev team to orchestrate tech efforts enabling fast and reliable solutions to be deployed to our customers.\n' +
          'Still leading the mobile dev team. Responsible for the security of our cloud infrastructure, public-facing webapps and mobile apps, as well as all the data involved. Faced rapid project and market shifts to gain traction with some key clients such as Coca-Cola FEMSA, TSYS México, Government dependencies and more.',
        responsibilities: [
          'Worked along our sales, tech support and other key teams to understand needs and create adequate requirements for the dev team to work with',
          'Personally responsible for both Android and iOS platforms.',
          'Working directly on our payments gateway backend',
          'Certifications for current and future hardware (Mastercard MTIP, Visa ADVT, PROSA LACPI)',
          'UL Brand Test Tool configuration and usage for mPOS pre-certification processes',
          'Analysis of internal processes that could be enhanced/automated to increase operational efficiency',
          'Code quality assurance via pair-programming and code-reviews',
          'Heavy usage of code/project management tools (Bitbucket, Jira, Confluence)',
          'In charge of the design and implementation of security policies on user access and ID, password quality, secure data storage, cryptography and authentication/,digital signature schemes',
          'Responsible for PCI DSS observance and compliance on company\'s projects',
          'CentOS/Ubuntu servers configuration and hardening (lynis, rkhunter, tripwire, firewalld/iptables)',
          'IPSec VPN assessment, update and implementation (Strongswan, Libreswan)',
          'Vulnerability scan results triage and remediation proposal and implementation (Fortify on Demand, ZAP Tool)',
          'Evangelization on security-related topics to both technical and non-technical audiences inside the company.'
        ],
      },
      {
        name: 'Mobile Team Leader',
        timeframe : 'Oct 2013 - May 2017',
        description : 'Took over the development and maintenance of payment-processing mobile apps (Android, iOS) previously being developed by a third-party. Major UI and code refactoring to address bugs and errors, strengthening the app\'s and company\'s perception and trust from the consumers.',
        responsibilities : [
          'Android app development since October 2013 (Java, Eclipse, Android Studio, Gradle, Dynamic .dex classloading)',
          'iOS app development since July 2014 (Objective-C, Xcode, Testflight, Ad-Hoc Deployment, Integration with Cocoapods)',
          'Gained solid knowledge on symmetric (AES, 3DES) and asymmetric (RSA) cryptography and Key Management Schemes for the bank industry (DUKPT).',
          'Complete redesign and re-implementation of existing Android and iOS apps.',
          'Concept design and implementation of full stack solutions, working with back-end and front-end developers.',
          'Database and query design and optimization (MySQL) for APIs being consumed from mobile apps.',
          'Creation of integration mechanisms for third-party apps (design, documentation and implementation) to enable usage of our payment processing platform, working with other developer teams, local and overseas.',
          'Design and creation of ad-hoc software and mobile apps for internal usage'
        ],
      },
      {
        name: 'Backend Intern',
        timeframe : 'Jul 2013 - Oct 2013',
        description : 'Worked closely with the devs on the business\' core backend code to provide support, insights, and documentation.',
        responsibilities : [
          'Pair-programming of critical code for payment processing solution.',
          'Refactor and documentation of payment processing backend (Java, Spring, Apache Tomcat, Mybatis, MySQL).',
          'Ubuntu/CentOS Server configuration and administration.',
          'Database administration and design, query design and optimization (MySQL).',
          'Code review for third-party developed mobile apps (Android, iOS)',
          'Technical support to customers (phone)'
        ],
      },
    ]
  }, {
    name: 'SiSS',
    timeframe : 'Feb 2012 - Jul 2013',
    workplaceImg : 'siss.jpg',
    children: [
      {
        name: 'Software Developer',
        timeframe : 'Feb 2012 - Jul 2013',
        description : 'Development of internal management applications for Hospital Civil de Guadalajara (prescription issuing, bidding processes, provider penalization), using SWT and web-based apps using Eclipse RAP.',
        responsibilities: [
          'SQL Server database and query design and optimization',
          'Windows-installer creation using Nullsoft NSIS'
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-careercard',
  templateUrl: './careercard.component.html',
  styleUrls: ['./careercard.component.css']
})
export class CareercardComponent implements OnInit {

  constructor() {
  }

  @ViewChild(MatAccordion) accordion: MatAccordion;

  workExperience = TREE_DATA;


  ngOnInit(): void {
  }

}
