def draw_table(data: list[dict[str, str | int]]) -> str:
    table: list[str] = []

    keys: list[str] = list(data[0].keys())
    values: list[list[str]] = []
    paddings: list[int] = [len(key) for key in keys]

    for element in data:
        _values: list[str] = []

        i: int = 0
        for key in element:
            value: str = f"{element.get(key)}"
            paddings[i] = max(paddings[i], len(value))
            _values.append(value)
            i += 1

        values.append(_values)

    line_sep: str = "+"
    row_titles: str = "|"

    for i, padding in enumerate(iterable=paddings):
        title: str = keys[i][0].upper() + keys[i][1:]

        line_sep += "-" * (padding + 2) + "+"
        row_titles += f" {title.ljust(padding)} |"

    table.append(line_sep)
    table.append(row_titles)
    table.append(line_sep)

    for element in values:
        row: str = "|"
        for i, value in enumerate(iterable=element):
            padding: int = paddings[i]
            row += f" {value.ljust(padding)} |"

        table.append(row)

    table.append(line_sep)

    return "\n".join(table)
