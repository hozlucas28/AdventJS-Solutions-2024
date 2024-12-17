def draw_race(indices: list[int], length: int) -> str:
    race: str = ""

    for i, element in enumerate(iterable=indices):
        reindeer_i: int = (element + length) % length
        ice_track: str = "~" * reindeer_i
        ice_track += "r" if reindeer_i else ""
        ice_track = ice_track.ljust(length, "~")

        race += " " * (len(indices) - i - 1) + ice_track + f" /{i + 1}\n"

    return race.rstrip("\n")
