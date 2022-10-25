class MyMath {
	constructor(initialValue = 0) {
		this.sum = initialValue
	}

	square() {
		return this.sum ** 2
	}

	cube() {
		return this.sum ** 3
	}
 }

 class Command {
	constructor(subject) {
		this.subject = subject
		this.commandExecuted = []
	}

	execute(command) {
		this.commandExecuted.push(command)
		return this.subject[command]()
	}
 }

 const x = new Command(new MyMath(2))

 console.log(x.execute('square'))
 console.log(x.execute('cube'))
 console.log(x.commandExecuted)