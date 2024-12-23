def find_missing_numbers(nums: list[int]) -> list[int]:
    unique_nums: set[int] = set(nums)
    max_unique_num: int = max(unique_nums)

    collection: set[int] = set()
    for i in range(1, max_unique_num):
        collection.add(i)

    missing_nums: list[int] = [*collection.difference(unique_nums)]

    return missing_nums
