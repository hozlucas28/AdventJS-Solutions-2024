import re


def calculate_price(ornaments: str) -> int | None:
    prices: dict[str, int] = {
        "#": 50,
        "*": 1,
        "@": 100,
        "^": 10,
        "o": 5,
    }

    if re.search(pattern=r"[^#*@^o]", string=ornaments):
        return None

    total_price: int = prices[ornaments[-1]]

    for i in range(len(ornaments) - 1):
        current_ornament: int = prices[ornaments[i]]
        next_ornament: int = prices[ornaments[i + 1]]

        total_price += (
            -current_ornament
            if current_ornament - next_ornament < 0
            else current_ornament
        )

    return total_price
