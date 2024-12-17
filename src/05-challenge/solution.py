from typing import TypedDict, Literal

Shoe = TypedDict(
    "Shoe",
    {
        "type": Literal["I", "R"],
        "size": int,
    },
)


def organizeShoes(shoes) -> list[int]:
    pair_of_shoes: list[int] = []

    i_shoes: list[int] = []
    r_shoes: list[int] = []

    for shoe in shoes:
        if shoe["type"] == "I":
            i_shoes.append(shoe["size"])
            continue

        r_shoes.append(shoe["size"])

    for i_shoe in i_shoes:
        r_shoe_i: int = r_shoes.index(i_shoe)
        if r_shoe_i == -1:
            continue

        pair_of_shoes.append(i_shoe)
        r_shoes.pop(r_shoe_i)

    return pair_of_shoes
