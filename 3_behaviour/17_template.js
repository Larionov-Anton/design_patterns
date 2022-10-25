class Employee {
	constructor(name, salary) {
		this.name = name
		this.salary = salary
	}

	responsibilities() {}

	work() {
		return `${this.name} выполняет ${this.responsibilities()}`
	}

	getPaid() {
		return `${this.name} имеет ЗП ${this.salary}`
	}
}

class Developer extends Employee {
	constructor(name, salary) {
		super(name, salary)
	}

	responsibilities() {
		return 'процесс создания программ'
	}
}

class Tester extends Employee {
	constructor(name, salary) {
		super(name, salary)
	}

	responsibilities() {
		return 'тестирование программ'
	}
}

const developer = new Developer('Anton', 30000 )
console.log(developer.work())
console.log(developer.getPaid())

const tester = new Tester('Vlad', 20000)
console.log(tester.work())
console.log(tester.getPaid())