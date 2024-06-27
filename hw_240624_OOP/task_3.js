// Задача: Пользователи и Премиум-пользователи
// Создайте систему классов для управления пользователями и премиум-пользователями с различными функциями.

// Требования к классу User
// Свойства класса User:
// username (строка): Имя пользователя.
// email (строка): Электронная почта пользователя.
// isLoggedIn (логическое значение): Флаг, указывающий, что пользователь вошел в систему. Изначально false.
// Методы класса User:
// login(): Метод должен установить isLoggedIn в true и возвращать строку "User <имя пользователя> logged in".
// logout(): Метод должен установить isLoggedIn в false и возвращать строку "User <имя пользователя> logged out".
// updateEmail(newEmail): Метод должен обновить email пользователя на newEmail и возвращать строку "User <имя пользователя> updated email to <новый email>".
class User{
    constructor(username, email, isLoggedIn){
        this.username = username
        this.email = email
        isLoggedIn = false
    }

    login(){
       this.isLoggedIn = true 
       return `User ${this.username} logged in`
    }
    logout(){
        this.isLoggedIn = false
        return `User ${this.username} logged out`
    }
    updateEmail(newEmail){
        this.email = newEmail
        return `User ${this.username}> updated email to ${this.newEmail}`

    }
}

// Требования к классу PremiumUser
// Свойства класса PremiumUser:
// Должен наследовать все свойства класса User.
// subscriptionEndDate (объект Date): Дата окончания подписки премиум-пользователя.
// Методы класса PremiumUser:
// Должен наследовать все методы класса User.
// accessPremiumContent(): Метод должен возвращать строку "Accessing premium content for user <имя пользователя>".
// extendSubscription(days): Метод должен принимать количество дней (days), добавлять эти дни к subscriptionEndDate и возвращать строку "Subscription extended by <days> days".
// viewSubscriptionStatus(): Метод должен возвращать строку "Subscription for user <имя пользователя> ends on <дата окончания подписки>".

class PremiumUser extends User{
    constructor(username, email, subscriptionEndDate){
        super(username, email)
        this.subscriptionEndDate = new Date(subscriptionEndDate)
    }
    accessPremiumContent(){
        return `Accessing premium content for user ${this.username}`

    }
    extendSubscription(days){
        this.subscriptionEndDate.setDate(this.subscriptionEndDate.getDate() + days) 
        return `Subscription extended by ${days} days`
    }
    viewSubscriptionStatus(){
        return`Subscription for user ${this.username} ends on ${this.subscriptionEndDate.toDateString()}`

    }
}

const user = new User('Mark Dali', 'dali@gmail.com')
console.log(user.login());
console.log(user.updateEmail('mark_dali@gmail.com'));
console.log(user.logout());

console.log('=================');
const premiumUser = new PremiumUser('Maksym Vasyliev', 'maxLeon@gmail.com', '2024-06-27')
console.log(premiumUser.login());
console.log(premiumUser.accessPremiumContent());
console.log(premiumUser.viewSubscriptionStatus());
console.log(premiumUser.extendSubscription(120))
console.log(premiumUser.viewSubscriptionStatus())

