let data = [
  { title: "Sales Manager", status: "live" },
  { title: "Managing Officer", status: "On Hold" },
  { title: "PHP Developer", status: "Expired" },
  { title: "Scrum Manager", status: "live" },
  { title: "CTO", status: "On Hold" },
  { title: "Project Manager", status: "live" },
  { title: "Sql developer", status: "Deleted" },
  { title: "Junior Web Developer", status: "Recently Added" },
  { title: "Front end Developer", status: "Recently Added" },
  { title: "Junior full stack Developer", status: "Recently Added" },
  { title: "Junior Web Developer", status: "deleted" },
];

let sorted = {};

// sorting data from array of objects based on status and pushing sorted data into sorted Object of Array.
// TODO: test
// function sortData(data) {
// for (let i = 0; i < data.length; i++) {
//   if (data[i].status === "live") {
//     sorted.live.push(data[i].title);
//   } else if (data[i].status === "On Hold") {
//     sorted.expired.push(data[i].title);
//   } else if (data[i].status === "Expired") {
//     sorted.onHold.push(data[i].title);
//   } else if (!sorted.hasOwnProperty(sorted[data[i].status])) {
//     sorted[data[i].status] = [];
//   }
// }
function sortData(data) {
  for (let i = 0; i < data.length; i++) {
    if (!(data[i].status in sorted)) {
      sorted[data[i].status] = [];
    }
    sorted[data[i].status].push(data[i].title);
  }
}

// creates table rows and inserts
// function createTable(sorted) {
//   for (let key in sorted) {
//     if (sorted.hasOwnProperty(key)) {
//       createHTML(key, sorted[key], sorted);
//     }
//   }
// }
let tableHeadRow = document.getElementById("theadrow");
const tableBodyElement = document.getElementById("tableBody");

let tableHead = "";
let tableBody = "";

function createHTML(sorted) {
  Object.keys(sorted).forEach((key) => {
    let s = sorted[key];
    tableHead += `<th scope="col-sm-4">${key}</th>`;

    tableBody += `<td>${sorted[key]}</td>`;
  });

  tableHeadRow.innerHTML = tableHead;
  tableBodyElement.innerHTML = tableBody.replace(/,/g, "</br>");
}

sortData(data);

createHTML(sorted);
