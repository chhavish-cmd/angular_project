import { ListItemComponent } from './../my-comp/list-item/list-item.component';
import { Component, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {FormBuilder,FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Element } from '../element';
import { GenerateCodeComponent } from '../generate-code/generate-code.component';



// interface Element{
//   elementName:string,
//   elementType: string,
//   required: boolean
// }

/** @title Simple form field */
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  standalone: true,
  imports: [MatFormFieldModule,
    MatButtonModule,
     MatInputModule,
      MatSelectModule,
      MatRadioModule,
      FormsModule,
      GenerateCodeComponent,
      ReactiveFormsModule,
      MatRadioModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      CommonModule,
      ListItemComponent,
    ],
})
export class AddTodoComponent {
  control: FormControl = new FormControl('');

  flag: boolean= false;

  form!: FormGroup;
  elements:Element[]=[];
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });
  ngOnInit(){
    this.form= this._formBuilder.group({
      elementName: ['',[Validators.required, Validators.maxLength(20)]],
      elementType: ['',[Validators.required]],
      elementOptions:[''],
      required:[true,[Validators.required]]
    })
  }

  constructor(private _formBuilder: FormBuilder) {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  onSubmit(){
    if(this.form.valid){
      const newElement: Element={
        elementName: this.form.value.elementName,
        elementType: this.form.value.elementType,
        required: this.form.value.required,
        elementOptions: this.newOptions
      };
      this.elements.push(newElement);
      this.form.reset();
      console.log(newElement);
    }
  }
  newOptions:string[]=[];
  addOptions(){
    this.newOptions.push(this.form.value.elementOptions);
   
  }



  optionsFlag:boolean=false;
  showOptions(){
    this.newOptions=[];
    if(this.form.value.elementType==='dropdown')
    this.optionsFlag=true;
    else
    this.optionsFlag=false;

  }
  generateCode(elements: Element[]){

    this.flag=true;
    console.log(elements);
  }

}
