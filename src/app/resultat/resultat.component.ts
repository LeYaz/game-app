import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  @Input() point: number;
  @Input() total: number;
  @Output() recommencerEvent = new EventEmitter<boolean>();
  
  recommencer:boolean = false;


  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  Menu(){
    this.router.navigate(['/quiz'], {relativeTo: this.route});
  }

  Recommencer(){
    this.recommencer = true;
    this.recommencerEvent.emit(this.recommencer);
  }

}
