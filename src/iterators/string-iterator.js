function* ascIterator (factory, stringValue, start) {
	for (let key = start, length = stringValue.length; key < length; key++) {
		let value = factory.createPrimitive(stringValue[key]);
		yield { value, key };
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
