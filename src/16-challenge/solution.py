def remove_snow(s: str) -> str:
    path_cleared: str = s

    last_i: int = 0

    for i in range(len(path_cleared) - 1):
        current_char: str = path_cleared[i]
        next_char: str = path_cleared[i + 1]
        if not current_char == next_char:
            last_i = i
            continue

        path_cleared = path_cleared[:i] + path_cleared[i + 2 :]
        i: int = last_i - 1

    return path_cleared
