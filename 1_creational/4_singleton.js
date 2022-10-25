//* Единственный экземпляр класса 

class Database {
	constructor (data) {
		if (Database.exists) {
			return Database.instance
		}

		Database.instance = this
		Database.exists = true
		this.data = data
	}
}

const mongo = new Database('mongoDB')
console.log(mongo)

const mysql = new Database('MySQL')
console.log(mysql)

