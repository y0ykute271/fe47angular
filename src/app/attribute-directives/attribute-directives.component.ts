import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {
  isActive: boolean = true
  url: string = "data:image/jpeg;base64,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"
  message: string = "Hello"

  constructor() { }

  ngOnInit(): void {
  }

}
