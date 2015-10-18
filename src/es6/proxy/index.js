export default function (env) {
	let objectFactory = env.objectFactory;

	let proxyClass = objectFactory.createFunction(function (target, handler) {
		if (!this.isNew) {
			throw new TypeError();
		}
		
		return objectFactory.createProxy(target, handler);
	}, null, { name: "Proxy" });

	proxyClass.define("revocable",  objectFactory.createBuiltInFunction(function (target, handler) {
		let proxy = objectFactory.createProxy(target, handler);

		let obj = objectFactory.createObject();
		obj.define("proxy", proxy);
		obj.define("revoke", objectFactory.createBuiltInFunction(function () {
			proxy.revoke();
		}, 0, "revoke"));

		return obj;
	}, 2, "Proxy.revocable"));

	proxyClass.define("length", objectFactory.createPrimitive(2), { writable: false });
	env.global.define("Proxy", proxyClass);
}
