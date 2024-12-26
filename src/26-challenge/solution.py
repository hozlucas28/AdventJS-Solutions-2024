def get_completed(time_worked: str, total_time: str) -> str:
    [w_hours, w_minutes, w_seconds] = map(int, time_worked.split(sep=":"))
    [t_hours, t_minutes, t_seconds] = map(int, total_time.split(sep=":"))

    worked: int = w_hours * 3600 + w_minutes * 60 + w_seconds
    total: int = t_hours * 3600 + t_minutes * 60 + t_seconds
    productivity: str = f"{round(number=(worked / total) * 100)}%"

    return productivity
