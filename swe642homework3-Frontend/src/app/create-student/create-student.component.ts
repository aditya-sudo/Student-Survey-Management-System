import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';



@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  isRadioSelected: boolean = false; 
  constructor(private studentService : StudentService, private router : Router) {
  }


  ngOnInit(): void {
    this.student.sourceOfInterestOptions = {
      friends: 'Friends',
      relatives: 'Relatives',
      internet: 'Internet',
      television: 'Television',
      // Add more options as needed
    };
  }

  saveSurvey(){
    this.student.date = formatDate(this.student.date, 'yyyy-MM-dd', 'en-US');
    this.studentService.createStudentSurvey(this.student).subscribe( data=>{
      console.log(data);
      this.goToStudentList();
    },
    error=> console.log(error));
  }

  goToStudentList(){
      this.router.navigate(['/surveys']);
  }

  toggleCheckbox(key: string, event: any): void {
    this.student.likedOptions[key] = event.target.checked;
    console.log(this.student.likedOptions); 
  }

onRadioChange(event: any): void {
  this.isRadioSelected = !!event.target.value; // Update the flag based on selected value
}

  isAnyOptionSelected(): boolean {
    // Check if at least one checkbox in likedOptions is selected
    return Object.values(this.student.likedOptions || {}).some((selected) => selected);
  }
  
  onSubmit(form: any): void {
    // Check if the form is valid and all required fields are filled
    if (form.valid && this.isAnyOptionSelected() && this.student.sourceOfInterest) {
      console.log('Form Submitted Successfully', this.student);
  
      // Show success alert
      alert('Form Submitted Successfully!');
  
      // Log selected liked options
      const selectedLikedOptions = this.student.getSelectedLikedOptions();
      console.log('Selected liked options:', selectedLikedOptions);
  
      // Save the survey to the backend
      this.saveSurvey();
    } else {
      // Handle errors when form is invalid
      console.log('Form is invalid. Please correct the errors.');
  
      // Show specific error for the liked options
      if (!this.isAnyOptionSelected()) {
        alert('Please select at least one option for "What did you like most about the campus?"');
      }
  
      // Show specific error for the radio button selection
      if (!this.student.sourceOfInterest) {
        alert('Please select an option for "How did you hear about us."');
      }
  
      // Add additional error handling for general form issues
      alert('Please ensure all required fields are filled out correctly.');
    }
  }
  
  

}
