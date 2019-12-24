import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directive",
  templateUrl: "./directive.component.html",
  styleUrls: ["./directive.component.css"]
})
export class DirectiveComponent implements OnInit {
  // languages = ["java", "python", "nodejs", "angular"]; // STRUCTURAL DIRECTIVE

  users = [
    {
      u_id: 1,
      u_photo:
        "https://cdn.pixabay.com/photo/2015/08/03/05/44/dragon-872933__340.jpg",
      u_name: "dragon",
      u_age: 20,
      u_designation: "MEAN stack developer",
      u_salary: 50000,
      u_location: "Bengaluru",
      u_company: "jspiders",
      u_gender: "Male",
      u_doj: new Date("18/12/2019"),
      u_education: "B.E"
    },
    {
      u_id: 2,
      u_photo:
        "https://cdn.pixabay.com/photo/2017/04/13/13/18/wolf-2227541__340.jpg",
      u_name: "sachin",
      u_age: 20,
      u_designation: "MEAN stack developer",
      u_salary: 50000,
      u_location: "Bengaluru",
      u_company: "jspiders",
      u_gender: "Male",
      u_doj: new Date("18/12/2019"),
      u_education: "B.E"
    },
    {
      u_id: 3,
      u_photo:
        "https://cdn.pixabay.com/photo/2019/12/20/07/27/forest-4707812__340.jpg",
      u_name: "sachin",
      u_designation: "MEAN stack developer",
      u_salary: 50000,
      u_location: "Bengaluru",
      u_company: "jspiders",
      u_gender: "Male",
      u_doj: new Date("18/12/2019"),
      u_education: "B.E"
    },
    {
      u_id: 4,
      u_photo:
        "https://cdn.pixabay.com/photo/2017/04/13/13/18/wolf-2227541__340.jpg",
      u_name: "sachin",
      u_age: 20,
      u_designation: "MEAN stack developer",
      u_salary: 50000,
      u_location: "Bengaluru",
      u_company: "jspiders",
      u_gender: "Male",
      u_doj: new Date("18/12/2019"),
      u_education: "B.E"
    }
  ];

  addNewUser() {
    this.users.push({
      u_id: 4,
      u_photo:
        "https://cdn.pixabay.com/photo/2019/12/20/13/21/dinosaur-4708418__340.png",
      u_name: "sachin",
      u_age: 20,
      u_designation: "MEAN stack developer",
      u_salary: 50000,
      u_location: "Bengaluru",
      u_company: "jspiders",
      u_gender: "Male",
      u_doj: new Date("18/12/2019"),
      u_education: "B.E"
    });
  }
  removeUser(user) {
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }

  constructor() {}

  ngOnInit() {}
}
