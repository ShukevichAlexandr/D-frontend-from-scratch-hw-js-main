// Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое



function calculateAverage(a, b) { 
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Введено не число');
    }
    return (a + b) / 2;
}

