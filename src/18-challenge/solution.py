import re
from typing import TypedDict

ChildData = TypedDict(
    "ChildData",
    {
        "name": str,
        "address": str,
    },
)


def find_in_agenda(agenda: str, phone: str) -> ChildData | None:
    child_data: ChildData = {"name": "", "address": ""}

    name_regex: re.Pattern[str] = re.compile(pattern=r"(?<=<)(?:.*)(?=>)")
    phone_regex: re.Pattern[str] = re.compile(pattern=r"\+\d{1,2}(?:-\d*){3}")

    counter: int = 0

    children_data: list[str] = agenda.split(sep="\n")

    for _, data in enumerate(iterable=children_data):
        if counter > 1:
            return None

        data_phone: re.Match[str] | None = phone_regex.match(string=data)
        if data_phone is None or not data_phone[0].find(phone):
            continue

        name: re.Match[str] | None = name_regex.match(string=data)

        address: str = re.sub(pattern=name_regex, repl=data, string="")
        address = re.sub(pattern=r"<>", repl=data, string="").strip()
        address = re.sub(pattern=phone_regex, repl=data, string="").strip()

        child_data["name"] = name[0] if name is not None else ""
        child_data["address"] = address
        counter += 1

    return child_data if counter == 1 else None
