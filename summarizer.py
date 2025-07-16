from transformers import pipeline

summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

def summarize_content(text: str) -> str:
    if not text:
        return "No content to summarize."
    # HuggingFace models have a max token limit, so chunk if needed
    max_chunk = 1000
    text_chunks = [text[i:i+max_chunk] for i in range(0, len(text), max_chunk)]
    summaries = [summarizer(chunk, max_length=130, min_length=30, do_sample=False)[0]['summary_text'] for chunk in text_chunks]
    return ' '.join(summaries) 