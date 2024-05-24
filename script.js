function generateTable() {
    // Get user input values
    var startNum = document.getElementById("startNum").value;
    var endNum = document.getElementById("endNum").value;
  
    // Validate user input
    if (startNum < 2 || startNum > 10 || endNum < 2 || endNum > 10) {
      alert("Please enter numbers between 2 and 10");
      return; // Exit function if invalid input
    }
  
    // Create table container element
    var tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = ""; // Clear previous table
  
    // Create multiplication table
    var table = document.createElement("table");
    table.border = 1;
  
    // Create table header row
    var headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th></th>"; // Empty cell for multiplication symbol
    for (var i = startNum; i <= endNum; i++) {
      var headerCell = document.createElement("th");
      headerCell.textContent = i;
      headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);
  
    // Generate table body rows
    for (var i = startNum; i <= endNum; i++) {
      var row = document.createElement("tr");
      var cell = document.createElement("td");
      cell.textContent = i;
      row.appendChild(cell);
  
      for (var j = startNum; j <= endNum; j++) {
        var cell = document.createElement("td");
        cell.textContent = i * j;
        row.appendChild(cell);
      }
  
      table.appendChild(row);
    }
  
    // Append table to container
    tableContainer.appendChild(table); 
  }
  