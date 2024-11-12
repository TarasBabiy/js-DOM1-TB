function calculate(operation) {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const errorElement = document.getElementById("error");
    const resultElement = document.getElementById("resultValue");

    // Очищуємо попереднє повідомлення про помилку
    errorElement.textContent = "";

    // Перевірка на порожні поля або некоректне введення
    if (number1 === "" || number2 === "") {
        errorElement.textContent = "Будь ласка, введіть обидва числа.";
        return;
    }

    if (isNaN(number1) || isNaN(number2)) {
        errorElement.textContent = "Введіть тільки числові значення.";
        return;
    }

    // Перетворення введених значень на числа
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let result;

    // Виконання обчислення залежно від обраної операції
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                errorElement.textContent = "Ділення на нуль неможливе!";
                return;
            }
            result = num1 / num2;
            break;
        default:
            errorElement.textContent = "Невідома операція.";
            return;
    }

    // Заокруглення результату до двох знаків після коми
    resultElement.textContent = result.toFixed(2);
}
