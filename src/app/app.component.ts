import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { jsPDF } from 'jspdf';
import {myFontData} from './font';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  myfont : string = myFontData;
  title = 'pdftest';
  createPDF(): void {
    const doc = new jsPDF();
    
    // Example of adding a font directly (this should be your actual Base64 string)
    const fontBase64 = this.myfont;
    doc.addFileToVFS('NotoSansTC-VariableFont_wght-normal.ttf', fontBase64);
    doc.addFont('NotoSansTC-VariableFont_wght-normal.ttf',
    'NotoSansTC-VariableFont_wght',
    'normal');
    doc.setFont('NotoSansTC-VariableFont_wght');

  doc.text('測試',10,10);
  // 保存 PDF 文件
  doc.save('todolist.pdf');


  }
}
