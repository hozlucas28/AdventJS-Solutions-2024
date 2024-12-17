from typing import TypedDict

InventoryElement = TypedDict(
    "InventoryElement",
    {
        "name": str,
        "quantity": int,
        "category": str,
    },
)


def organizeInventory(inventory: list[InventoryElement]) -> dict[str, dict[str, int]]:
    organized_inventory: dict[str, dict[str, int]] = {}

    for element in inventory:
        if organized_inventory.get(element["category"]) is None:
            organized_inventory[element["category"]] = {
                element["name"]: element["quantity"]
            }
            continue

        if organized_inventory[element["category"]].get(element["name"]) is None:
            organized_inventory[element["category"]].update(
                {element["name"]: element["quantity"]}
            )
            continue

        organized_inventory[element["category"]].update(
            {
                element["name"]: organized_inventory[element["category"]][
                    element["name"]
                ]
                + element["quantity"]
            }
        )

    return organized_inventory
