var rng = document.getElementById('r1');
var tableObj = document.createElement('table');
tableObj.style.width = '40%';
function fun() {
  n = rng.value;
  var mainrow = '<tr><th> </th>';
  for (var i = 1; i < n; i++) {
    mainrow += '<th>' + i + '</th>';
  }
  mainrow += '</tr>';
  var tableHTML = mainrow;
  for (var i = 1; i < n; i++){
    row = '<tr><th>' + i + '</th>';
    for (var j = 1; j < n; j++) {
      row += '<td>' + (i*j).toString(n) + '</td>';
    }
    row += '</tr>';
    tableHTML += row;
  }
  tableObj.innerHTML = tableHTML;
  if (n != 2 && n != 3 && n != 10) {
    var table = tableObj.createCaption().innerHTML = "<b>Таблица умножения " + n + "-ричной системы счисления</b>";
  } else {
    var table = tableObj.createCaption().innerHTML = "<b>Таблица умножения " + n + "-ичной системы счисления</b>";
  }
  document.body.appendChild(tableObj);
}
fun();
//document.ready()
cbx.onclick = function() {
  if(document.body.className != "Change") {
    document.body.classList.add("Change");
    document.body.classList.remove("Unchange");
    tableObj.caption.style.color = "white";
    tableObj.style.borderColor = "rgb(51,54,57)";
    for (var i = 0; i < tableObj.rows.length; i++) {
      var table = tableObj.rows[i].cells;
      for (var j = 0; j < table.length; j++) {
        table[j].classList.add("Change");
        table[j].classList.remove("Unchange");
        table[j].onmouseleave = function() {
          this.classList.add("Change");
          this.classList.remove("Unchange");
        }
      }
    }
  } else {
    document.body.classList.add("Unchange");
    document.body.classList.remove("Change");
    tableObj.caption.style.color = "black";
    tableObj.style.borderColor = "white";
    for (var i = 0; i < tableObj.rows.length; i++) {
      var table = tableObj.rows[i].cells;
      for (var j = 0; j < table.length; j++) {
        table[j].style.borderColor = "white";
        if (i > 0 && j >0) {
          table[j].classList.add("Unchange");
          table[j].classList.remove("Change");
          table[j].onmouseenter = function() {
            this.classList.add("Change");
            this.classList.remove("Unchange");
          }
          table[j].onmouseleave = function() {
            this.classList.add("Unchange");
            this.classList.remove("Change");
          }
        }
      }
    }
  }
}
