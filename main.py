from fastapi import FastAPI, Query
from pydantic import BaseModel
from scraper import fetch_results
from summarizer import summarize_content

app = FastAPI()

class QueryRequest(BaseModel):
    query: str

@app.post('/search')
def search_and_summarize(request: QueryRequest):
    results = fetch_results(request.query)
    summary = summarize_content(results)
    return {"summary": summary}