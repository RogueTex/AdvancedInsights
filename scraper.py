import httpx
from bs4 import BeautifulSoup

def fetch_results(query: str) -> str:
    # Use Google search via scraping (note: subject to rate limits and ToS)
    url = f"https://www.google.com/search?q={query}"
    headers = {"User-Agent": "Mozilla/5.0"}
    with httpx.Client() as client:
        resp = client.get(url, headers=headers)
        soup = BeautifulSoup(resp.text, "html.parser")
        results = []
        for g in soup.find_all('div', class_='BNeawe s3v9rd AP7Wnd'):
            results.append(g.get_text())
        return '\n'.join(results) 