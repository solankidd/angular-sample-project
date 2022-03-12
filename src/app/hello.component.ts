import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  styles: [`h1 { font-family: Lato; }`],
  templateUrl: './hello.component.html',
 changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent implements OnInit  {
  @Input() name: string;
  count: number = 10;
  changeDet(){
   // alert(this.count)
    return ++this.count;  
  }

  ngOnInit():void {
    debugger
    setTimeout(()=>{
      this.count = 1000
    }, 3000)
  }
}
