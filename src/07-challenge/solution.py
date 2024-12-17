def fix_packages(packages: str) -> str:
    packages_fixed: str = ""

    stack: list[str] = []

    for char in packages:
        if char == "(":
            stack.append(packages_fixed)
            packages_fixed = ""
            continue

        if char == ")":
            packages_reversed: list[str] = packages_fixed.split(sep="")
            packages_reversed.reverse()

            packages_fixed = stack.pop() + "".join(packages_reversed)
            continue

        packages_fixed += char

    return packages_fixed
