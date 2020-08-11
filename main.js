let data = [
  { title: "Sales Manager", status: "live" },
  { title: "Managing Officer", status: "On Hold" },
  { title: "PHP Developer", status: "Expired" },
  { title: "Scrum Manager", status: "live" },
  { title: "CTO", status: "On Hold" },
  { title: "Project Manager", status: "live" },
  { title: "Sql developer", status: "Deleted" },
  { title: "Junior Web Developer", status: "Recently Added" },
  { title: "front end Developer", status: "Recently Added" },
  { title: "Junior full stack Developer", status: "Recently Added" },
  { title: "Junior Web Developer", status: "deleted" },
];

let sorted = {};

let tableBody = document.querySelector("#tableBody");

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
function createTableRow(live, onHold, Expired) {
  let tr = `<tr id="firstRow">
              <td id="live">${live}</td>
              <td id="hold">${onHold}</td>
              <td id="expired">${Expired}</td>
            </tr>`;
  tableBody.innerHTML = tr;
}

function populate(sorted) {
  for (let i = 0; i < sorted.live.length; i++) {
    createTableRow(sorted.live, sorted.onHold, sorted.expired);
  }
}

sortData(data);
// populate(sorted);
