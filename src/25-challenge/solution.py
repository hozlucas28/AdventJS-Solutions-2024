from typing import Union, Literal

type Instruction = Union[
    Literal["-"],
    Literal["+"],
    Literal[">"],
    Literal["["],
    Literal["]"],
    Literal["{"],
    Literal["}"],
]


def execute(code: str) -> int:
    result: int = 0

    for i, instruction in enumerate(iterable=code):
        match (instruction):
            case "+":
                result += 1
                break

            case "-":
                result -= 1
                break

            case "[":
                result = 0
                i: int = code.index("]", i)
                break

            case "{":
                if not result:
                    i: int = code.index("}", i)
                break

    return result
