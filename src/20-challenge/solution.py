type GiftListFixed = dict[str, dict[str, int]]


def fix_gift_list(received: list[str], expected: list[str]) -> GiftListFixed:
    gift_list_fixed: GiftListFixed = {
        "missing": {},
        "extra": {},
    }

    for gift in expected:
        try:
            gift_i: int = received.index(gift)
            received.pop(gift_i)
        except ValueError:
            gift_list_fixed["missing"].update(
                {gift: gift_list_fixed["missing"].get(gift, 0) + 1}
            )

    for gift in received:
        gift_list_fixed["extra"].update(
            {gift: gift_list_fixed["extra"].get(gift, 0) + 1}
        )

    return gift_list_fixed
