
document.addEventListener('DOMContentLoaded', () => {
    const questionData = {
        
        sortable1: {
            correctAnswer: 0.0,
            correctMessage: "Congratulations!",
            incorrectMessage: "False."
        },
    
        sortable2: {
            correctAnswer: 0.0,
            correctMessage: "Congratulations!",
            incorrectMessage: "False."
        },
    
        sortable3: {
            correctAnswer: 1.0,
            correctMessage: "Congratulations!",
            incorrectMessage: "False."
        },
    
        sortable4: {
            correctAnswer: 2.0,
            correctMessage: "Congratulations!",
            incorrectMessage: "False."
        },
    
        sortable5: {
            correctAnswer: 0.0,
            correctMessage: "Congratulations!",
            incorrectMessage: "False."
        },
    
        sortable6: {
            correctAnswer: 1.0,
            correctMessage: "Congratulations!",
            incorrectMessage: "False."
        },
    
        sortable7: {
            correctAnswer: 0.0,
            correctMessage: "Congratulations!",
            incorrectMessage: "False."
        },
    
        sortable8: {
            correctAnswer: 2.0,
            correctMessage: "Congratulations!",
            incorrectMessage: "False."
        },
    
        sortable9: {
            correctAnswer: 3.0,
            correctMessage: "Congratulations!",
            incorrectMessage: "False."
        },
    
        sortable10: {
            correctAnswer: 1.0,
            correctMessage: "Congratulations!",
            incorrectMessage: "False."
        },
    
    };

    const questions = document.querySelectorAll('.sortable');
    
    questions.forEach((sortable) => {
        const resultElement = document.getElementById(`result${sortable.id.match(/\d+$/)[0]}`);
        const books = sortable.querySelectorAll('.bookfull');
        const questionId = sortable.id;
        const questionInfo = questionData[questionId];

        books.forEach(book => {
            book.addEventListener('click', () => {
                books.forEach(b => b.classList.remove('true', 'false'));
                const userAnswer = parseInt(book.getAttribute('data-answer'));

                if (userAnswer === questionInfo.correctAnswer) {
                    book.classList.add('true');
                    resultElement.textContent = questionInfo.correctMessage;
                } else {
                    book.classList.add('false');
                    resultElement.textContent = questionInfo.incorrectMessage;
                }
            });
        });
    });
});
