import checkHealth from '../app.js';

test.each([
    [{name: 'Маг', health: 90}, 'healthy'],
    [{name: 'Человек-паук', health: 70}, 'healthy'],
    [{name: 'Шрек', health: 50}, 'wounded'],
    [{name: 'Винни-Пух', health: 25}, 'wounded'],
    [{name: 'Крош', health: 10}, 'critical'],
    [{}, 'Некоректные данные'],
])('should check health of person',(person, expected) => {
    const result = checkHealth(person)
    expect(result).toBe(expected);
});