class Complaints {
	constructor() {
		this.complaints = []
	}

	reply() {}

	add(complaints) {
		this.complaints.push(complaints)
		return this.reply(complaints)
	}
}

class ProductComplaints extends Complaints{
	reply({id, customer, details}) {
		return `Product: ${id}: ${customer}: (${details})`
	}
}

class ServiceComplaints extends Complaints{
	reply({id, customer, details}) {
		return `Service: ${id}: ${customer}: (${details})`
	}
}

class ComplaintRegistry {
	register(customer, type, details) {
		const id = Date.now()
		let complaint

		if(type ==='service') {
			complaint = new ServiceComplaints()
		} else {
			complaint = new ProductComplaints()
		}

		return complaint.add({id, customer, details})
	}
}

const registry = new ComplaintRegistry()
console.log(registry.register('Anton', 'service', 'недоволен'))
console.log(registry.register('Vasya', 'product', 'все плохо'))