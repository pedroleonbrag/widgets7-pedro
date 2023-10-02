import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, Injector, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';

// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import * as am5 from '@amcharts/amcharts5';
// import * as am5xy from '@amcharts/amcharts5/xy';
// import * as am5percent from "@amcharts/amcharts5/percent";
import { GridStack, GridStackWidget, GridStackOptions } from 'gridstack';
import { SimpleComponent } from '../simple/simple.component';
import { ComponentPortal } from '@angular/cdk/portal';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, AfterViewInit {

  @ViewChild('username') input: ElementRef<HTMLDivElement>;

  @ViewChild("myNameElem") myNameElem: ViewContainerRef;
  //@ViewChild("ble") ble: ElementRef;

  @ViewChildren('ble', { read: ViewContainerRef }) divs: QueryList<ViewContainerRef>
  @ViewChild('pepe2', { read: ViewContainerRef }) entry: ViewContainerRef;

  portal: ComponentPortal<any>;

  widgets: { tile: any; portal: ComponentPortal<any> }[] = [
    { tile: { w: 5, h: 5 }, portal: undefined },
    { tile: { w: 3, h: 5 }, portal: undefined },
    { tile: { w: 3, h: 5 }, portal: undefined },
    // { tile: { w: 3, h: 5 }, portal: undefined },
    // { tile: { w: 3, h: 5 }, portal: undefined },
    // { tile: { w: 3, h: 5 }, portal: undefined },
    // { tile: { w: 3, h: 5 }, portal: undefined },
    // { tile: { w: 3, h: 5 }, portal: undefined }
  ];


  //public items2: any[] = [{w:2, h:3}, {w:4, h:2}, {w:2, h:2}];
  public items2: any[] = [{ w: 3, h: 4 }, { w: 3, h: 4 }];

  public items: GridStackWidget[] = [
    { x: 0, y: 0, w: 9, h: 6, content: '<div #username ></div>', id: 'lala' },
    { x: 9, y: 0, w: 3, h: 3, content: '1' },
    { x: 9, y: 3, w: 3, h: 3, content: '2' },
  ];
  private grid!: GridStack;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.grid = GridStack.init({
      cellHeight: 70,
    });

  }

  public add() {
    this.grid.addWidget({ w: 3, content: 'new content', id: 'pepe' });
  }
  public delete() {
    this.grid.removeWidget(this.grid.engine.nodes[0].el!);
  }
  public change() {
    this.grid.update(this.grid.engine.nodes[0].el!, { w: 1 });
  }

  createComponent(message) {
    //this.entry.clear();

    // const divArray = this.divs.toArray();
    // if (divArray.length > 0) {
    //   const firstDivRef = divArray[1];
    //   console.log(firstDivRef);
    //   const factory = this.resolver.resolveComponentFactory(SimpleComponent);
    //   const componentRef = firstDivRef.createComponent(factory);
    //   componentRef.instance.message = message;
    // }

    const widgetPortal1 = new ComponentPortal(SimpleComponent, null, Injector.create({
      providers: [
        { provide: 'id', useValue: this.generateRandomString() }
      ]
    }));
    const widgetPortal2 = new ComponentPortal(SimpleComponent, null, Injector.create({
      providers: [
        { provide: 'id', useValue: this.generateRandomString() }
      ]
    }));
    const widgetPortal3 = new ComponentPortal(SimpleComponent, null, Injector.create({
      providers: [
        { provide: 'id', useValue: this.generateRandomString() }
      ]
    }));
    // const widgetPortal4 = new ComponentPortal(SimpleComponent, null, Injector.create({
    //   providers: [
    //     { provide: 'id', useValue: this.generateRandomString() }
    //   ]
    // }));

    // const widgetPortal5 = new ComponentPortal(SimpleComponent, null, Injector.create({
    //   providers: [
    //     { provide: 'id', useValue: this.generateRandomString() }
    //   ]
    // }));
    // const widgetPortal6 = new ComponentPortal(SimpleComponent, null, Injector.create({
    //   providers: [
    //     { provide: 'id', useValue: this.generateRandomString() }
    //   ]
    // }));
    // const widgetPortal7 = new ComponentPortal(SimpleComponent, null, Injector.create({
    //   providers: [
    //     { provide: 'id', useValue: this.generateRandomString() }
    //   ]
    // }));
    // const widgetPortal8 = new ComponentPortal(SimpleComponent, null, Injector.create({
    //   providers: [
    //     { provide: 'id', useValue: this.generateRandomString() }
    //   ]
    // }));

    this.widgets[0].portal = widgetPortal1;
    this.widgets[1].portal = widgetPortal2;
    this.widgets[2].portal = widgetPortal3;
    // this.widgets[3].portal = widgetPortal4;
    // this.widgets[4].portal = widgetPortal5;
    // this.widgets[5].portal = widgetPortal6;
    // this.widgets[6].portal = widgetPortal7;
    // this.widgets[7].portal = widgetPortal8;


  }

  generateRandomString() : string {
    const length = 6; // You can specify the length of the random string you want
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

}
