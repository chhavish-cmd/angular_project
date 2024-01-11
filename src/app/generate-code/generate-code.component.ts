import { CommonModule } from '@angular/common';
import { Element } from './../element';
import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';





@Component({
  selector: 'app-generate-code',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatButtonModule],
  templateUrl: './generate-code.component.html',
  styleUrl: './generate-code.component.css'
})
export class GenerateCodeComponent {
  @Input() elements:Element[]=[];

  rowMyHtml:string = "<form>\n";
  rowHtml: string = "";
  tempHtml : string = "";

  viewForm(): void{
    const generatedHtml = this.handleGenerateForm();
    
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(generatedHtml);
    } else {
      alert('Unable to open a new window. Please check your browser settings.');
    }

  }
  handleGenerateForm():any{

    this.rowMyHtml='<html><body><form>'
    this.elements.forEach((element, i) => {
      if(element.elementType==="text" || element.elementType==="email" || element.elementType ==="password"){
        
        this.tempHtml = `<label  style="margin-left: 10px; ">${element.elementName} ${element.required==true?'*':''}</label>\n`
        this.tempHtml += `<input style="margin: 5px; padding: 5px;" type=${element.elementType} ${element.required==true?'required':''}></input> \n <br>\n`;
      }
      else if(element.elementType ==="dropdown"){
       
        this.tempHtml = `<label  style="margin-left: 10px; ">${element.elementName} ${element.required==true?'*':''}</label>\n`
        this.tempHtml += '<select>';
        element.elementOptions.forEach((ele:any)=>{
          this.tempHtml += `<option>${ele}</option>`;
        })
        this.tempHtml += `</select>\n<br>\n`
      }
      this.rowMyHtml += this.tempHtml;

    });
    this.rowMyHtml += `  <button style="margin: 20px; type="submit" value="Submit">Submit</button>\n`;
    this.rowMyHtml += '</form></body></html>'
    this.rowHtml = this.rowMyHtml;
    return this.rowHtml;

  }

}
