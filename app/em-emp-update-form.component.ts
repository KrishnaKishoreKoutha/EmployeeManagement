import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { EmployeeService } from './employee.service';

@Component({
  selector: 'em-emp-update-form',
  templateUrl: 'app/em-emp-update-form.component.html',
  styleUrls: []
})
export class EmployeeUpdateFormComponent {
  empUpdateForm;
  showAlert=false;
  statusText='';
  alertType='';
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService) {}
  
  ngOnInit() {
    this.empUpdateForm = this.formBuilder.group({
      id: this.formBuilder.control(''),
      title: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      department: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ]))
    });
  }
	searchEmployee(employee) {
		this.employeeService.search(employee.id)
			.subscribe(employee => {
		        this.empUpdateForm = this.formBuilder.group({
					id: this.formBuilder.control(employee.id),
					title: this.formBuilder.control(employee.title, Validators.compose([
			        Validators.required,
			        Validators.pattern('[\\w\\-\\s\\/]+')
			      ])),
				      name: this.formBuilder.control(employee.name, Validators.compose([
				        Validators.required,
				        Validators.pattern('[\\w\\-\\s\\/]+')
			      ])),
				      department: this.formBuilder.control(employee.department, Validators.compose([
				        Validators.required,
				        Validators.pattern('[\\w\\-\\s\\/]+')
			      ]))
				});
				
	        },
				 error =>{
				 	   this.showAlert=true;
						this.statusText="Employee with ID-"+employee.id+" doesn't exist!";
						this.alertType="alert-danger";
					 	this.newForm();
	            });
		
	}
	resetForm(o) {
		this.empUpdateForm = this.formBuilder.group({
			id: this.formBuilder.control(o.id),
			title: this.formBuilder.control('', Validators.compose([
	        Validators.required,
	        Validators.pattern('[\\w\\-\\s\\/]+')
	      ])),
	      name: this.formBuilder.control('', Validators.compose([
	        Validators.required,
	        Validators.pattern('[\\w\\-\\s\\/]+')
	      ])),
	      department: this.formBuilder.control('', Validators.compose([
	        Validators.required,
	        Validators.pattern('[\\w\\-\\s\\/]+')
	      ]))
		});
	}
	newForm() {
		this.empUpdateForm = this.formBuilder.group({
			id: this.formBuilder.control(''),
			title: this.formBuilder.control('', Validators.compose([
	        Validators.required,
	        Validators.pattern('[\\w\\-\\s\\/]+')
	      ])),
	      name: this.formBuilder.control('', Validators.compose([
	        Validators.required,
	        Validators.pattern('[\\w\\-\\s\\/]+')
	      ])),
	      department: this.formBuilder.control('', Validators.compose([
	        Validators.required,
	        Validators.pattern('[\\w\\-\\s\\/]+')
	      ]))
		});
	}
	onSubmit(employee) {
		this.employeeService.save(employee) .subscribe(
            (r) => {if(r.status===200){
            					this.showAlert=true;
            					this.statusText="Successfully updated the Employee with ID: "+employee.id;
            					this.alertType="alert-success";
            				 	}
            				 	this.newForm();
            				 }
          );
  	} 
  
}
