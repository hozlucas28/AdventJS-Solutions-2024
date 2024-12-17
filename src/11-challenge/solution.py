import re


def decode_filename(filename: str) -> str:
    regex: re.Pattern[str] = re.compile(pattern=r"(\d*_)(.*)(\..*)")
    matches: re.Match[str] | None = regex.search(string=filename)
    return matches.group(2) if matches is not None else filename
