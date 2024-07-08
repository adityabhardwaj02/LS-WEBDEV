function checkAnswer(button, status) {
    const feedback = document.querySelector('.feedback');
    if (status === 'correct') {
        feedback.textContent = 'Correct!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Incorrect!';
        feedback.style.color = 'red';
    }
}
