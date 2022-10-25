class Car {
	constructor(model, price) {
		this.model = model
		this.price = price
	}
}

class CarFactory {
	constructor() {
		this.cars = []
	}

	create(model, price) {
		const candidate = this.getCar(model)
		if (candidate) {
			return candidate
		}
		const newCar = new Car(model, price)
		this.cars.push(newCar)
		return newCar
	}

	getCar(model) {
		return this.cars.find(car => car.model === model)
	}
}

const carFactory = new CarFactory()

const bmwX3 = carFactory.create('bmw', 10000)
console.log(bmwX3)

const lada = carFactory.create('lada', 5000)
console.log(lada)

const bmwX6 = carFactory.create('bmw', 15000)
console.log(bmwX6)