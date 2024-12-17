/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object}
 */
export default function organizeInventory(inventory) {
	/** @type {{}} */
	const organizedInventory = {}

	for (const { category, name, quantity } of inventory) {
		organizedInventory[category] ??= {}
		organizedInventory[category][name] = ~~organizedInventory[category][name] + quantity
	}

	return organizedInventory
}
