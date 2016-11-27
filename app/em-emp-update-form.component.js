System.register(['@angular/core', '@angular/forms', './employee.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, forms_1, employee_service_1;
    var EmployeeUpdateFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            }],
        execute: function() {
            EmployeeUpdateFormComponent = (function () {
                function EmployeeUpdateFormComponent(formBuilder, employeeService) {
                    this.formBuilder = formBuilder;
                    this.employeeService = employeeService;
                    this.showAlert = false;
                    this.statusText = '';
                    this.alertType = '';
                }
                EmployeeUpdateFormComponent.prototype.ngOnInit = function () {
                    this.empUpdateForm = this.formBuilder.group({
                        id: this.formBuilder.control(''),
                        title: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        name: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        department: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ]))
                    });
                };
                EmployeeUpdateFormComponent.prototype.searchEmployee = function (employee) {
                    var _this = this;
                    this.employeeService.search(employee.id)
                        .subscribe(function (employee) {
                        _this.empUpdateForm = _this.formBuilder.group({
                            id: _this.formBuilder.control(employee.id),
                            title: _this.formBuilder.control(employee.title, forms_1.Validators.compose([
                                forms_1.Validators.required,
                                forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                            ])),
                            name: _this.formBuilder.control(employee.name, forms_1.Validators.compose([
                                forms_1.Validators.required,
                                forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                            ])),
                            department: _this.formBuilder.control(employee.department, forms_1.Validators.compose([
                                forms_1.Validators.required,
                                forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                            ]))
                        });
                    }, function (error) {
                        _this.showAlert = true;
                        _this.statusText = "Employee with ID-" + employee.id + " doesn't exist!";
                        _this.alertType = "alert-danger";
                        _this.newForm();
                    });
                };
                EmployeeUpdateFormComponent.prototype.resetForm = function (o) {
                    this.empUpdateForm = this.formBuilder.group({
                        id: this.formBuilder.control(o.id),
                        title: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        name: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        department: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ]))
                    });
                };
                EmployeeUpdateFormComponent.prototype.newForm = function () {
                    this.empUpdateForm = this.formBuilder.group({
                        id: this.formBuilder.control(''),
                        title: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        name: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        department: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ]))
                    });
                };
                EmployeeUpdateFormComponent.prototype.onSubmit = function (employee) {
                    var _this = this;
                    this.employeeService.save(employee).subscribe(function (r) {
                        if (r.status === 200) {
                            _this.showAlert = true;
                            _this.statusText = "Successfully updated the Employee with ID: " + employee.id;
                            _this.alertType = "alert-success";
                        }
                        _this.newForm();
                    });
                };
                EmployeeUpdateFormComponent = __decorate([
                    core_1.Component({
                        selector: 'em-emp-update-form',
                        templateUrl: 'app/em-emp-update-form.component.html',
                        styleUrls: []
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, employee_service_1.EmployeeService])
                ], EmployeeUpdateFormComponent);
                return EmployeeUpdateFormComponent;
            }());
            exports_1("EmployeeUpdateFormComponent", EmployeeUpdateFormComponent);
        }
    }
});
//# sourceMappingURL=em-emp-update-form.component.js.map