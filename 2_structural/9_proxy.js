function networkFetch(url) {
	return `${url} - Ответ с сервера`
}

const cache = new Set()

const proxyFetch = new Proxy(networkFetch, {
	apply(target, thisArg, args) {
		const url = args[0]
		if (cache.has(url)) {
			return `${url} - Ответ из кеша`
		} else {
			cache.add(url)
			return Reflect.apply(target, thisArg, args)
		}
	}
})

console.log(proxyFetch('angular.io'))
console.log(proxyFetch('angular.io'))
console.log(proxyFetch('react.io'))