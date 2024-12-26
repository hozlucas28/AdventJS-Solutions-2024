from datetime import datetime


def get_completed(time_worked: str, total_time: str) -> str:
    worked: datetime = datetime.fromisoformat(f"1970-01-01T${time_worked}")
    total_worked: datetime = datetime.fromisoformat(f"1970-01-01T${total_time}")
    productivity: str = (
        f"${round(number=(worked.timestamp() / total_worked.timestamp()) * 100)}%"
    )
    return productivity
