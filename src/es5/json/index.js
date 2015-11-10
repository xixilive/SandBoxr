import $parse from "./json.parse";
import $stringify from "./json.stringify";

export default function jsonApi (env) {
	const globalObject = env.global;
	const objectFactory = env.objectFactory;

	let jsonClass = objectFactory.createObject();
	jsonClass.className = "JSON";

	$parse(jsonClass, env, objectFactory);
	$stringify(jsonClass, env, objectFactory);

	globalObject.define("JSON", jsonClass);
}
