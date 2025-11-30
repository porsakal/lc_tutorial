// Tek bir kontrol fonksiyonu
function checkOrder(sortableId, correctOrder, resultId) {
    var items = document.querySelectorAll(`#${sortableId} li`);
    var currentOrder = Array.from(items).map(item => item.querySelector('.book').textContent.trim());

    var correctCount = currentOrder.filter((item, index) => item === correctOrder[index]).length;
    
    var resultElement = document.getElementById(resultId);
    resultElement.textContent = correctCount === correctOrder.length 
        ? "Congratulations!" 
        : `${correctCount} of them is correct`;
}

// Koyu renk dizisi
const darkColors = ['#3B3B98', '#6F1E51', '#1B1464', '#2C3A47', '#4A235A'];

// Rasgele renk atama fonksiyonu (tekrarlayan renkleri engeller)
function applyRandomBackgroundColors(sortableId) {
    var items = document.querySelectorAll(`#${sortableId} li`);
    var usedColors = [];

    items.forEach(li => {
        let randomColor;

        // Aynı renkten birden fazla olmaması için döngü
        do {
            randomColor = darkColors[Math.floor(Math.random() * darkColors.length)];
        } while (usedColors.includes(randomColor));

        usedColors.push(randomColor); // Kullanılan renkleri takip et
        li.style.backgroundColor = randomColor;
    });
}

// Sortable ayarları
new Sortable(document.getElementById('sortable'), { animation: 150, direction: 'horizontal' });
new Sortable(document.getElementById('sortable2'), { animation: 150, direction: 'horizontal' });
new Sortable(document.getElementById('sortable3'), { animation: 150, direction: 'horizontal' });
new Sortable(document.getElementById('sortable4'), { animation: 150, direction: 'horizontal' });
new Sortable(document.getElementById('sortable5'), { animation: 150, direction: 'horizontal' });
new Sortable(document.getElementById('sortable6'), { animation: 150, direction: 'horizontal' });
new Sortable(document.getElementById('sortable7'), { animation: 150, direction: 'horizontal' });
new Sortable(document.getElementById('sortable8'), { animation: 150, direction: 'horizontal' });
new Sortable(document.getElementById('sortable9'), { animation: 150, direction: 'horizontal' });
new Sortable(document.getElementById('sortable10'), { animation: 150, direction: 'horizontal' });

// Rasgele renkleri her listeye uygula
applyRandomBackgroundColors('sortable');
applyRandomBackgroundColors('sortable2');
applyRandomBackgroundColors('sortable3');
applyRandomBackgroundColors('sortable4');
applyRandomBackgroundColors('sortable5');
applyRandomBackgroundColors('sortable6');
applyRandomBackgroundColors('sortable7');
applyRandomBackgroundColors('sortable8');
applyRandomBackgroundColors('sortable9');
applyRandomBackgroundColors('sortable10');

// Kontrol butonları için genel çağrılar
function checkOrder1() {
    checkOrder('sortable', ['4', '5', '1', '3', '2'], 'result1');
}
function checkOrder2() {
    checkOrder('sortable2', ['5', '4', '2', '1', '3'], 'result2');
}
function checkOrder3() {
    checkOrder('sortable3', ['2', '5', '4', '1', '3'], 'result3');
}
function checkOrder4() {
    checkOrder('sortable4', ['5', '3', '4', '2', '1'], 'result4');
}
function checkOrder5() {
    checkOrder('sortable5', ['4', '5', '3', '2', '1'], 'result5');
}
function checkOrder6() {
    checkOrder('sortable6', ['3', '1', '2', '4', '5'], 'result6');
}
function checkOrder7() {
    checkOrder('sortable7', ['4', '1', '3', '5', '2'], 'result7');
}
function checkOrder8() {
    checkOrder('sortable8', ['2', '1', '5', '3', '4'], 'result8');
}
function checkOrder9() {
    checkOrder('sortable9', ['5', '4', '3', '2', '1'], 'result9');
}
function checkOrder10() {
    checkOrder('sortable10', ['3', '2', '5', '4', '1'], 'result10');
}