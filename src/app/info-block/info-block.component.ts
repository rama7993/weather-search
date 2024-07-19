import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.css'],
})
export class InfoBlockComponent implements OnInit {
  @Input() label!: string;
  @Input() value!: number | string;
  @Input() imageSrc!: string;

  constructor() {}

  ngOnInit(): void {}
}
