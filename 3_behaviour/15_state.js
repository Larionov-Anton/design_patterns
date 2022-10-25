class Light {
	constructor(light) {
		this.light = light
	}
}

class RedLight extends Light {
	constructor() {
		super('red')
	}

	sign() {
		return 'СТОП'
	}
}

class YellowLight extends Light {
	constructor() {
		super('yellow')
	}

	sign() {
		return 'ГОТОВЬСЯ'
	}
}

class GreenLight extends Light {
	constructor() {
		super('green')
	}

	sign() {
		return 'ПОЕХАЛИ'
	}
}

class TrafficLight {
	constructor() {
		this.state = [
			new RedLight(),
			new YellowLight(),
			new GreenLight
		]
		this.current = this.state[0]
	}

	change() {
		const total = this.state.length
		let index = this.state.findIndex(light => light === this.current)

		if (index + 1 < total) {
			this.current = this.state[index + 1]
		} else {
			this.curent = this.state[0]
		}
	}

	sign() {
		return this.current.sign()
	}
}

const traffic = new TrafficLight()
console.log(traffic.sign())

traffic.change()
console.log(traffic.sign())

traffic.change()
console.log(traffic.sign())