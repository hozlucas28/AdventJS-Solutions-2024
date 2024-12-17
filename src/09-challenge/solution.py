from typing import List, Literal

type Move = Literal["U", "D", "R", "L"]
type Result = Literal["none", "crash", "eat"]


def move_train(board: List[str], mov: Move) -> Result:
    move_actions: dict[Move, int] = {
        "D": len(board[0]) + 1,
        "L": -1,
        "R": 1,
        "U": -len(board[0]) - 1,
    }

    result_actions: dict[str, Result] = {
        "·": "none",
        "*": "eat",
        "|": "crash",
        "o": "crash",
        "undefined": "crash",
    }

    board_stringified: str = "|".join(board)

    train_i: int = board_stringified.index("@")
    if train_i == -1:
        return "none"

    next_train_cell: str = board_stringified[train_i + move_actions[mov]]

    return result_actions[next_train_cell]
