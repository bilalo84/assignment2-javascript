var nameInput = document.getElementById("bookmarkName");
var urlInput = document.getElementById("bookmarkURL");
var weblist = [];

if (localStorage.getItem("Listweb") != null) {
  weblist = JSON.parse(localStorage.getItem("Listweb"));
  showSit();
}

function addNew() {
  if (urlCheck() == true) {
    var website = {
      name: nameInput.value,
      urlsit: urlInput.value,
    };

    weblist.push(website);
    localStorage.setItem("Listweb", JSON.stringify(weblist));
    showSit();
  } else {
    window.alert("Enter Invlid Data : url Example google.com dont use th http://www.");
  }
}

function showSit() {
  var sittable = "";

  for (var i = 0; i < weblist.length; i++) {
    sittable =
      sittable +
      `
        <tr>
        <td>` +
      i +
      `</td>
        <td>` +
      weblist[i].name +
      `</td>
        <td><button onclick="visitSite(` +
      i +
      `)" class="btn btn-success"><i class="fa-solid fa-eye pe-2"></i>Visit</button></td>
        <td><button onclick="deleteSite(` +
      i +
      `)" class="btn btn-danger"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
        </tr>
        `;
  }

  document.getElementById("tbody").innerHTML = sittable;
}

function deleteSite(x) {
  weblist.splice(x, 1);
  localStorage.setItem("Listweb", JSON.stringify(weblist));
  showSit();
  console.log(x);
}

function visitSite(y) {
  var url = "http://www." + weblist[y].urlsit;
  window.open(url);
}

function urlCheck() {
  const regexEl = /^[a-z0-9\-\.]{3,}\.[a-z]{2,3}$/;

  if (regexEl.test(urlInput.value) == true) {
    urlInput.classList.remove("is-invalid");
    urlInput.classList.add("is-valid");
    return true;
  } else {
    urlInput.classList.remove("is-valid");
    urlInput.classList.add("is-invalid");
    return false;
  }
}
