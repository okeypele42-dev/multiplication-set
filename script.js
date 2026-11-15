function generateTable() {
    const sizeInput = document.getElementById('gridSize').value;
    const table = document.getElementById('multiplicationTable');


    table.innerHTML = "";

    const size = parseInt(sizeInput) || 10;


    if (size < 1 || size > 25) {
        alert("Please enter a table size size between 1 and 25.");
        return;
    }


    const headerRow = document.createElement('tr');
    const emptyCorner = document.createElement('th');
    emptyCorner.textContent = "×";
    headerRow.appendChild(emptyCorner);

    for (let i = 1; i <= size; i++) {
        const th = document.createElement('th');
        th.textContent = i;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);


    for (let row = 1; row <= size; row++) {
        const tr = document.createElement('tr');


        const rowHeader = document.createElement('td');
        rowHeader.className = "header-cell";
        rowHeader.textContent = row;
        tr.appendChild(rowHeader);

        for (let col = 1; col <= size; col++) {
            const td = document.createElement('td');
            td.textContent = row * col;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}


generateTable();
