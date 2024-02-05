export function border(index: number, length: number) {
	if (index !== length - 1) {
		return " border-b ";
	}

	return "";
}
