
import { Component } from '@angular/core';

 

@Component({

  selector: 'app-student',

  templateUrl: './student.component.html',

  styleUrls: ['./student.component.css']

})

export class StudentComponent {

 

  Mark: number=0;

 

  studentList: any[] = [

    { Name:'Name 1 ', Email:'email@gmail.com ', Mark: 55},

    { Name:'Name 2 ', Email:'Email2@gmail.com', Mark: 30},

   
 

   

  ];

 

  getMarkColor(Mark: number): string {

    return Mark < 50 ? 'red-text' : 'green-text';

  }

 

  getPassFailStatus(Mark: number): string {

    return Mark >= 50 ? 'PASS' : 'FAIL';

}

getStyle(): any {

  // Your custom logic to determine the style object

  // For example, let's apply a blue background color and white text color:

  return {

    'background-color': "hsl(194, 54%, 71%)",

    

    'padding': '10px',

    'text-align': 'center',
    'border-radius': '10px',

  };

}

}

 