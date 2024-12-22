def generate_gift_sets(gifts: list[str]) -> list[list[str]]:
    max_combinations: int = 2 ** len(gifts) - 1
    combinations: list[list[str]] = []

    for gift in gifts:
        combinations.append([gift])

    i_start: int = 0
    i_stop: int = len(gifts) - 1
    diff: int = i_stop - 1

    j_stop: int = i_stop + 1

    while len(combinations) < max_combinations - 1:
        offset: int = 0

        for i in range(i_start, i_stop):
            anchor_gift: list[str] = combinations[i]

            for j in range(i + 1, j_stop):
                next_gift: list[str] = list(
                    filter(lambda value: value not in anchor_gift, combinations[j])
                )
                combinations.append([*anchor_gift, *next_gift])

            offset += 1

        i_start = j_stop
        i_stop += offset

        if i_start == i_stop:
            i_start += 1
            i_stop = i_start + diff - 1
            diff = i_stop - i_start

        j_stop: int = i_stop + 1

    if len(combinations) != max_combinations:
        combinations.append(gifts)

    return combinations
