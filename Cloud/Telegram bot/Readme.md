# 🚀 AI News Analytics Pipeline

## 📌 Overview

An AI-powered pipeline that collects news, processes it in Databricks, and uses AI to summarize and classify articles before sending insights to Telegram.

It detects:

* 🌍 Region / Country relevance
* 🧠 Category (Politics, Business, Tech, etc.)
* 🚨 Urgency (Breaking / Normal)
* 📰 Short AI-generated summary

---

## 🏗️ Workflow

News Sources → Databricks Processing → AI Analysis → Structured Output → Telegram Bot
![Alt text](./photo_2026-04-29_17-35-02.jpg)

---

## ⚙️ Tech Stack

* Databricks (Spark)
* HuggingFace AI Models
* BART Summarization
* Zero-shot Classification
* Telegram Bot API

---

## 📡 Output

Each news item is converted into a short alert containing:

* Category
* Region
* Urgency
* AI Summary

---

