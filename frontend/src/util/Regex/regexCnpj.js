export default function removeCharacters(cnpj) {
	return cnpj.replace(/[^\d]+/g, "");
}
