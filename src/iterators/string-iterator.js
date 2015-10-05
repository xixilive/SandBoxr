function* ascIterator (factory, stringValue, start) {
	for (let index = start, length = stringValue.length; index < length; index++) {
		let value = factory.createPrimitive(stringValue[index]);
		yield { value, index };
	}
}

function* descIterator (factory, stringValue, start) {
	for (let key = start; key >= 0; key--) {
		let value = factory.createPrimitive(stringValue[key]);
		yield { value, key };
	}
}

const StringIterator = {
	create (objectFactory, value, start, desc) {
		let stringValue = value.toNative();
		return (desc ? descIterator : ascIterator)(objectFactory, stringValue, start);
	}
};

export default StringIterator;
