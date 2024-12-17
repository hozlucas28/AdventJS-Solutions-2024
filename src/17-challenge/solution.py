def detect_bombs(grid: list[list[bool]]) -> list[list[int]]:
    adjacents_bombs: list[list[int]] = []

    for i, row in enumerate(iterable=grid):
        bombs_in_row: list[int] = []

        for j, cell in enumerate(iterable=row):
            start_i: int = i - 1
            stop_i: int = i + 2

            start_j: int = j - 1
            stop_j: int = j + 2

            bombs = 0

            for _i in range(start_i, stop_i):
                if _i < 0 or _i > len(grid) - 1:
                    continue

                for _j in range(start_j, stop_j):
                    if _j < 0 or _j > len(row) - 1:
                        continue
                    bombs += grid[_i][_j]

            bombs_in_row.append(bombs - cell)

        adjacents_bombs.append(bombs_in_row)

    return adjacents_bombs
