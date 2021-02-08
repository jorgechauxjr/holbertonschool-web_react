interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Betty",
  lastName: "Holberton",
  age: 44,
  location: "USA",
}
const student2: Student = {
  firstName: "Jhon",
  lastName: "Parker",
  age: 52,
  location: "Canada",
}
// Create array o type Student
const studentsList = [student1, student2];
type studentsList = Array<Student>;

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((theStudent: Student) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = theStudent.firstName;
  cellLocation.textContent = theStudent.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
