document.addEventListener("DOMContentLoaded", function () {
    generateTable();

    var selectedColor = ""; // Колір для використання при кліку

    // Генерація таблиці
    function generateTable() {
        var table = document.getElementById("myTable");

        for (var i = 1; i <= 6; i++) {
            var row = table.insertRow();
            for (var j = 1; j <= 6; j++) {
                var cell = row.insertCell();
                cell.innerHTML = (i - 1) * 6 + j;
                cell.addEventListener("mouseover", handleMouseOver);
                cell.addEventListener("click", handleClick);
                cell.addEventListener("dblclick", handleDoubleClick);
            }
        }
    }

    // Обробник події для наведення на клітинку
    function handleMouseOver(event) {
        var cellValue = parseInt(event.target.innerHTML);
        if (cellValue === 9) {
            event.target.style.backgroundColor = getRandomColor();
        }
    }

    // Обробник події для кліку на клітинку
    function handleClick(event) {
        var cellValue = parseInt(event.target.innerHTML);
        if (cellValue === 9) {
            selectedColor = document.getElementById("colorPicker").value;
            event.target.style.backgroundColor = selectedColor;
        }
    }

    // Обробник події для подвійного кліку на клітинку
    function handleDoubleClick(event) {
        var columnIndex = event.target.cellIndex;
        var rowIndex = event.target.parentNode.rowIndex;
        var rows = document.getElementById("myTable").rows;

        for (var i = rowIndex; i < rows.length; i += 2) {
            var cell = rows[i].cells[columnIndex];
            cell.style.backgroundColor = selectedColor;
        }
    }

    // Генерація випадкового кольору
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});