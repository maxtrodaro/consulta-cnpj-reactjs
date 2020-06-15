export default function validateIp(ip) {
	let regexServerIp = new RegExp(
		/^((1?\d{1,2}|2([0-4]\d|5[0-5]))\.){3}(1?\d{1,2}|2([0-4]\d|5[0-5]))$|^$/
	);
	return regexServerIp.test(ip);
}
