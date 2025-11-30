function makeSortable(id) {
    new Sortable(document.getElementById(id), {
        animation: 150,
        group: 'shared',
        filter: '.locked',
        onEnd: function (evt) {
            console.log(evt);
        }
    });
}
makeSortable('sortable1');
makeSortable('kitap1-1');
makeSortable('sortable2');
makeSortable('kitap2-1');
makeSortable('sortable3');
makeSortable('kitap3-1');
makeSortable('sortable4');
makeSortable('kitap4-1');
makeSortable('sortable5');
makeSortable('kitap5-1');
makeSortable('sortable6');
makeSortable('kitap6-1');
makeSortable('sortable7');
makeSortable('kitap7-1');
makeSortable('sortable8');
makeSortable('kitap8-1');
makeSortable('sortable9');
makeSortable('kitap9-1');
makeSortable('sortable10');
makeSortable('kitap10-1');

const correctOrders = {1: ["1", "2", "X", "3", "4"], 2: ["X", "1", "2", "3", "4"], 3: ["1", "2", "X", "3", "4"], 4: ["1", "X", "2", "3", "4"], 5: ["1", "2", "3", "X", "4"], 6: ["X", "1", "2", "3", "4"], 7: ["1", "X", "2", "3", "4"], 8: ["1", "2", "3", "X", "4"], 9: ["1", "2", "X", "3", "4"], 10: ["1", "2", "3", "4", "X"]}; 

function checkOrder(sortableId, resultId, questionNumber) {
    var items = document.querySelectorAll(`#${sortableId} li`);
    var currentOrder = Array.from(items).map(item => item.querySelector('.book').textContent.trim());

    if (JSON.stringify(currentOrder) === JSON.stringify(correctOrders[questionNumber])) {
        document.getElementById(resultId).textContent = "Congratulations!";
    } else {
        document.getElementById(resultId).textContent = "Wrong placement";
    }
}