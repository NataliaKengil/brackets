module.exports = function check(str, bracketsConfig) {
  
    const stack = [];
    const openBrackets = {};
    const closeBrackets = {};
  
    // Создаем объекты для соответствия открывающих и закрывающих скобок
    bracketsConfig.forEach(([open, close]) => {
        openBrackets[open] = close;       // Для поиска закрывающей по открывающей
        closeBrackets[close] = open;      // Для поиска открывающей по закрывающей
    });

    for (const char of str) {
        // Проверяем, является ли характер открывающей скобкой
        if (openBrackets[char]) {
            // Проверяем, является ли это открывающая совпадающей с закрывающей
            if (char === openBrackets[char] && stack[stack.length - 1] === char) {
                stack.pop(); // Если это открывающая скобка и в стеке есть такая же, то удаляем её
            } else {
                stack.push(char); // В противном случае добавляем 
            }
        } else if (closeBrackets[char]) {
            // Проверяем, является ли это закрывающей скобкой
            if (stack.pop() !== closeBrackets[char]) {
                return false; // Если не соответствует открывающей, возвращаем false
            }
        }
    }

    return stack.length === 0; 
}

