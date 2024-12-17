import re
from typing import Literal, Any

type Instruction = Literal["INC", "DEC", "JMP", "MOV"]


def compile(instructions: list[str]) -> int | None:
    records: dict[str, int] = {}

    for i, instruction in enumerate(iterable=instructions):
        instruction_action: str = instruction[:3]
        instruction_args: str = instruction[4:]

        if instruction_action == "JMP":
            match: re.Match[str] | None = re.search(
                pattern=r"(\D) (\d+)", string=instruction_args
            )
            if match is None:
                continue

            record: str | Any = match.group(1)
            new_i: str | Any = match.group(2)
            i: int = int(new_i) - 1 if records.get(record, 0) == 0 else i
            continue

        if instruction_action == "DEC":
            records.update(
                {f"{instruction_args}": records.get(instruction_args, 0) - 1}
            )
        elif instruction_action == "INC":
            records.update(
                {f"{instruction_args}": records.get(instruction_args, 0) + 1}
            )
        elif instruction_action == "MOV":
            match = re.search(pattern=r"(-?\d+|\D) (\D)", string=instruction_args)
            if match is None:
                continue

            value: str | Any = match.group(1)
            dest: str | Any = match.group(2)

            if re.search(pattern=r"\D", string=value) is None:
                records.update({f"{dest}": int(value)})
            else:
                records.update({f"{dest}": records.get(value, 0)})

    return records.get("A")
