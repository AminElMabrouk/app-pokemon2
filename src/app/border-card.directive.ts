import { Directive ,ElementRef,HostListener,Input,} from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  private initialColor : string = '#f5f5f5';
  private defaultColor : string = 'blue';
  private defaultHeight : number = 180;

  constructor(private el : ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }
  @Input('appBorderCard') borderColor:string;
  
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }
  private setBorder(color:string){
    let border='solid 4px '+color;
    this.el.nativeElement.style.border=border;
  }
  private setHeight(height:number){
    this.el.nativeElement.style.height=height+"px";
  }

}
