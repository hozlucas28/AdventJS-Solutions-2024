export type Inventory = Array<{ name: string; quantity: number; category: string }>

export default function organizeInventory(inventory: Inventory): object {
	const organizedInventory: Record<string, Record<string, number>> = {}

	for (const { category, name, quantity } of inventory) {
		organizedInventory[category] ??= {}
		organizedInventory[category][name] = ~~organizedInventory[category][name] + quantity
	}

	return organizedInventory
}
