- [1. Week 1 - Build your First LLM Product: Exploring Top Models](#1-week-1---build-your-first-llm-product-exploring-top-models)
  - [1.1. Running Your First LLM Locally with Ollama and Open Source Models](#11-running-your-first-llm-locally-with-ollama-and-open-source-models)
  - [1.2. Spanish Tutor Demo with Open-Source Models and Course Overview](#12-spanish-tutor-demo-with-open-source-models-and-course-overview)
  - [1.3. Setting up your LLM Development Environment with Cursor and UV](#13-setting-up-your-llm-development-environment-with-cursor-and-uv)
  - [1.4. Installing UV and setting up your Cursor development](#14-installing-uv-and-setting-up-your-cursor-development)
  - [1.5. Setting up your OpenAI API key and Environment Variables](#15-setting-up-your-openai-api-key-and-environment-variables)
  - [1.6. Installing Cursor Extensions and Setting up your Jupyter Notebook](#16-installing-cursor-extensions-and-setting-up-your-jupyter-notebook)
  - [1.7. Running your first OpenAI API call and systems vs user prompt](#17-running-your-first-openai-api-call-and-systems-vs-user-prompt)

---

- Resource: https://github.com/ed-donner/llm_engineering

# 1. Week 1 - Build your First LLM Product: Exploring Top Models

## 1.1. Running Your First LLM Locally with Ollama and Open Source Models 

1. We can install `ollama` from [https://ollama.com](https://ollama.com).
2. Try model `gemma3:270m`, `phi3`, and `gpt-oss`.

## 1.2. Spanish Tutor Demo with Open-Source Models and Course Overview

1. Try Spanish chat with model `gpt-oss` locally.

## 1.3. Setting up your LLM Development Environment with Cursor and UV

1. Install `python3`
2. Install [`uv`](https://docs.astral.sh/uv/) 
3. Install `git`
4. Install `Cursor` or `VSCode` for IDE.

## 1.4. Installing UV and setting up your Cursor development

1. Just clone the project from github repo - [llm_engineer](https://github.com/ed-donner/llm_engineering) and run `uv sync` to install the dependencies and packages.

## 1.5. Setting up your OpenAI API key and Environment Variables

1. We can register and enable this from OpenAI or just create one compatible one from OpenRouter. 
2. This takes a secret key that we can call specific API to interact with LLM providers. 
3. The secret key should be put in `.env` or setup as environment variables. 

## 1.6. Installing Cursor Extensions and Setting up your Jupyter Notebook

1. Install `python` and `jupyter` extension in the IDE.
2. Learn how to use `ipynb` (Jupyter Notebook).
   1. Select a `kernel` to run Python scripts in the notebook.

## 1.7. Running your first OpenAI API call and systems vs user prompt

1. In Jupyter Notebook, we can use `OpenAI` sdk to interact with AI.
2. I used `ollama` with `lamma:3.2` following the course instruction to setup OpenAI and script in the Jupyter Notebook.
```py
import os
from dotenv import load_dotenv
from scraper import fetch_website_contents
from IPython.display import Markdown, display
from openai import OpenAI

load_dotenv(override=True)
ollama_base_url = os.getenv('OLLAMA_BASE_URL')

message = "Hello, GPT! This is my first ever message to you! Hi!"

messages = [{"role": "user", "content": message}]

messages

ollama = OpenAI(base_url=ollama_base_url, api_key=api_key)

response = ollama.chat.completions.create(model="llama3.2", messages=messages)
response.choices[0].message.content
```
