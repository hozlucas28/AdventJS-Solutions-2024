def min_moves_to_stables(reindeer: list[int], stables: list[int]) -> int:
    min_moves: int = 0

    while len(reindeer):
        min_reindeer: int = min(reindeer)
        min_stables: int = min(stables)
        min_moves += abs(min_reindeer - min_stables)

        reindeer.pop(reindeer.index(min_reindeer))
        stables.pop(stables.index(min_stables))

    return min_moves
