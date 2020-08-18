import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'component-treeview';
  abrirTreeview: boolean = false;
  result: boolean = false;
  treeDt: string;

  public treeData = [
    {'ID': 1, 'NAME': 'ROOT_1'}, {'ID': 2, 'NAME': 'ROOT_2'},
    {'ID': 3, 'NAME': 'ROOT_3', 'PARENT_ID': 2},
    {'ID': 4, 'NAME': 'ROOT_4', 'PARENT_ID': 3},
    {'ID': 5, 'NAME': 'ROOT_5', 'PARENT_ID': 4},
    {'ID': 6, 'NAME': 'ROOT_6', 'PARENT_ID': 7}, 
    {'ID': 7, 'NAME': 'ROOT_7'},
    {'ID': 8, 'NAME': 'ROOT_8', 'PARENT_ID': 7},
    {'ID': 9, 'NAME': 'ROOT_9', 'PARENT_ID': 7},
    {'ID': 10, 'NAME': 'ROOT_10', 'PARENT_ID': 7},
    {'ID': 11, 'NAME': 'ROOT_11', 'PARENT_ID': 7},
    {'ID': 12, 'NAME': 'ROOT_12', 'PARENT_ID': 7},
    {'ID': 13, 'NAME': 'ROOT_13'},
    {'ID': 14, 'NAME': 'ROOT_14'},
    {'ID': 15, 'NAME': 'ROOT_15', 'PARENT_ID': 4},
    {'ID': 16, 'NAME': 'ROOT_16', 'PARENT_ID': 4},
    {'ID': 17, 'NAME': 'ROOT_17', 'PARENT_ID': 16},
    {'ID': 18, 'NAME': 'ROOT_18', 'PARENT_ID': 16},
    {'ID': 19, 'NAME': 'ROOT_19', 'PARENT_ID': 18},
    {'ID': 20, 'NAME': 'ROOT_20', 'PARENT_ID': 2},
    {'ID': 21, 'NAME': 'ROOT_21', 'PARENT_ID': 2},
    {'ID': 22, 'NAME': 'ROOT_22', 'PARENT_ID': 3},
    {'ID': 23, 'NAME': 'ROOT_23', 'PARENT_ID': 3},
    {'ID': 24, 'NAME': 'ROOT_24', 'PARENT_ID': 3},
    {'ID': 25, 'NAME': 'ROOT_25', 'PARENT_ID': 4},
    {'ID': 26, 'NAME': 'ROOT_26', 'PARENT_ID': 18}
  ];

  public collapseAll: boolean;
  public selectAll: boolean;

  open() {
    if(!this.abrirTreeview) {
      this.abrirTreeview = true;
    } else {
      this.abrirTreeview = false;
    }
  }

  click(node: any){
    console.log(node);
  }

  onChange(data){
    console.log(data);
  }

  searchInList() {
    let data = this.treeData;
    let search = this.treeDt;

    if (search == '') {
      data = this.treeData;
      this.result = false;
    } else {
      if (!search) {
        return;
      } else {
        search = search.toLowerCase();
      }

      data = this.treeData.filter(e => 
        e.NAME.toLowerCase().indexOf(search) != -1
      );

      if(data.length == 0) {
        this.result = true;
      }
      
    }
  }
}
