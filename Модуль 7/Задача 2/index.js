let heights = [150, 160, 170, 180];

function displayHeights(filteredHeights) {
    const heightList = document.getElementById('heightList');
    heightList.innerHTML = ''; 

    const heightsToDisplay = filteredHeights || heights;

    heightsToDisplay.forEach(height => {
        const listItem = document.createElement('li');
        listItem.textContent = `${height} см`;
        heightList.appendChild(listItem);
    });
}

function addHeight() {
    const newHeight = prompt('Введите рост ученика (в см):');
    
    if (newHeight === null || newHeight.trim() === '') {
        alert('Рост не введён!');
        return;
    }

    const parsedHeight = parseInt(newHeight);
    
    if (!isNaN(parsedHeight) && parsedHeight > 0) {
        heights.push(parsedHeight);
        displayHeights();
    } else {
        alert('Пожалуйста, введите корректное число.');
    }
}


function filterHeights() {
    const minHeightInput = prompt("Введите минимальный рост для фильтрации (в см):");
    const minHeight = parseInt(minHeightInput, 10);

    if (!isNaN(minHeight) && minHeight >= 0) {
        const filteredHeights = heights.filter(height => height >= minHeight);
        if (filteredHeights.length > 0) {
            displayHeights(filteredHeights);
        } else {
            alert("Нет значений, соответствующих критериям фильтрации.");
            displayHeights(); 
        }
    } else {
        alert("Пожалуйста, введите корректное число.");
        displayHeights();
    }
}

document.getElementById('addHeightBtn').addEventListener('click', addHeight);
document.getElementById('filterButton').addEventListener('click', filterHeights);

displayHeights();
