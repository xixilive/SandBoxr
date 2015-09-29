import {execute as exec} from "../utils/func";
import {map} from "../utils/async";

let templateObjectCache = Object.create(null);

function buildTemplateObject (env, node) {
	// per spec, template objects are cached
	let key = JSON.stringify(node.quasis.map(q => { return { cooked: q.value.cooked, raw: q.value.raw }; }));
	if (key in templateObjectCache) {
		return templateObjectCache[key];
	}

	let objectFactory = env.objectFactory;
	let tag = objectFactory.create("Array");
	let raw = objectFactory.create("Array");
	let quasis = node.quasis;

	for (let i = 0, ln = quasis.length; i < ln; i++) {
		tag.putValue(i, objectFactory.createPrimitive(quasis[i].value.cooked), true, env);
		raw.putValue(i, objectFactory.createPrimitive(quasis[i].value.raw), true, env);
	}

	raw.freeze();
	tag.defineOwnProperty("raw", { value: raw });
	tag.freeze();

	return templateObjectCache[key] = tag;
}

export default function* TaggedTemplateExpression (context) {
	let templateObject = buildTemplateObject(context.env, context.node.quasi);

	let values = yield map(context.node.quasi.expressions, function* (expr) {
		let value = yield context.create(expr).execute();
		return yield value.result.getValue();
	});

	let callee = (yield context.create(context.node.tag).execute()).result;
	let func = callee.getValue();
	let params = func.node && func.node.params || [];

	let value = yield exec(context.env, func, params, [templateObject, ...values], callee.base, callee);
	return context.result(value);
}
