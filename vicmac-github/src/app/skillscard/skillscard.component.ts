import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillscard',
  templateUrl: './skillscard.component.html',
  styleUrls: ['./skillscard.component.css']
})
export class SkillscardComponent implements OnInit {

  constructor() { }

  mainSkills = [
    'Java',
    'Kotlin',
    'Android',
    'Android Architecture Components',
    'Material Design',
    'Firebase',
    'Spring Boot',
    'Mybatis',
    'Gradle',
    'Cryptography',
    'Git',
  ];

  secSkills = [
    'Docker',
    'AWS Lambda',
    'AWS Fargate',
    'AWS CloudFormation',
    'AWS Secrets Manager',
    'Node.js',
  ];

  mehSkills = [
    'Angular',
    'Python',
  ];


  ngOnInit(): void {
  }

}
