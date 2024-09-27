export default function checkHealth (person) {
    if(person.health > 50) {
        return 'healthy';
    }
    if(person.health <= 50 && person.health >= 15) {
        return 'wounded';
    }
    if(person.health < 15 && person.health > 0) {
        return 'critical';
    } 
    return 'Некоректные данные';
}
