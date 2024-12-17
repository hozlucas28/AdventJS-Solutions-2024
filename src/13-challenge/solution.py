import re
from typing import Literal

type Move = Literal["D", "L", "R", "U"]


def is_robot_back(moves: str) -> Literal[True] | list[int]:
    current_pos: list[int] = [0, 0]

    opposite_moves: dict[Move, Move] = {
        "D": "U",
        "L": "R",
        "R": "L",
        "U": "D",
    }

    move_actions: dict[Move, list[int]] = {
        "D": [0, -1],
        "L": [-1, 0],
        "R": [1, 0],
        "U": [0, 1],
    }

    moves = re.sub(
        pattern=r"[*][DLRU]",
        repl=lambda value: value.group(0)[1] * 2,
        string=moves,
    )

    moves = re.sub(
        pattern=r"[!][DLRU]",
        repl=lambda value: opposite_moves[value.group(0)[1]],  # type: ignore
        string=moves,
    )

    aux: str = ""
    for char in list(moves):
        if aux.find("?") != -1:
            aux = aux.replace("?", "")
            aux += char if aux.find(char) == -1 else ""
        else:
            aux += char

    moves = aux

    for move in moves:
        offset: list[int] = move_actions[move]  # type: ignore
        current_pos[0] += offset[0]
        current_pos[1] += offset[1]

    return current_pos if current_pos[0] + current_pos[1] else True
