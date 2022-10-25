//* Старый синтаксис функций конструкторов для обьектов

/*
function Server(name, ip) {
	this.name = name
	this.ip = ip
}

Server.prototype.getUrl = function() {
	return `https://${this.ip}:80`
}
*/

//* Новый синтаксис на основе классов

class Server {
	constructor (name, ip) {
		this.name = name
		this.ip = ip
	}

	getUrl() {
		return `https://${this.ip}:80`
	}
}

const aws = new Server('aws', '40:40:50:12' )

console.log(aws.getUrl())