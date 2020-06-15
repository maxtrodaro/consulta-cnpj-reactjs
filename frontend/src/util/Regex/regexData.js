export default function formatedData(data) {
	data = data.split(/T/g);

	return data[0].substr(0, 10).split("-").reverse().join("/");
}
