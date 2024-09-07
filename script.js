// Цвета для категорий
const colors = ["#FFA726", "#3F51B5", "#00ACC1", "#8E24AA", "#F44336"];

// Функция для выбора случайного вопроса
function getRandomQuestion(categoryIndex) {
    // Выбираем случайный вопрос из нужной категории
    const randomIndex = Math.floor(Math.random() * questions[categoryIndex].length);
    const selectedQuestion = questions[categoryIndex][randomIndex];

    // Выводим выбранный вопрос на экран с цветной иконкой
    const questionOutput = document.getElementById("questionOutput");
    questionOutput.innerHTML = `<span class="icon" style="background-color: ${colors[categoryIndex]}"></span>${selectedQuestion}`;

    // Добавляем вопрос в историю с цветной иконкой
    const history = document.getElementById("questionHistory");
    const historyItem = document.createElement("li");
    historyItem.innerHTML = `<span class="icon" style="background-color: ${colors[categoryIndex]}"></span>${selectedQuestion}`;
    history.appendChild(historyItem);

    // Автоматическая прокрутка вниз
    history.scrollTop = 9999;//history.scrollHeight;
}
