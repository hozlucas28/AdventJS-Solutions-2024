def createFrame(names: list[str]) -> str:
    longest_name: int = 0

    for name in names:
        longest_name = max(longest_name, len(name))

    frame: str = "*" * (longest_name + 4) + "\n"
    for name in names:
        frame += "* " + name.ljust(longest_name, " ") + " *\n"
    frame += "*" * (longest_name + 4)

    return frame
