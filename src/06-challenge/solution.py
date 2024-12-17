import re


def in_box(box: list[str]) -> bool:
    regex: re.Pattern[str] = re.compile(pattern=r"^# *\* *#$")

    for i in range(1, len(box) - 1):
        line: str = box[i]
        if regex.search(string=line) is not None:
            return True

    return False
