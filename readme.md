# Avantos Jr Front End Software Engineer - Coding Challenge Submission

This repository contains my submission for the Jr Front End Software Engineer coding challenge at Avantos.

## Company Description

Avantos is an AI platform that streamlines client onboarding and servicing for financial institutions. It's a Series A startup headquartered in NYC.

## Role Description

This is a full-time remote role for a Jr Front End Software Engineer. Day-to-day tasks include coding, debugging, and collaborating with product and design teams to create application and APIs. Quarterly travel to NYC expected.

## Tech Stack

- **Languages:** Typescript, Golang
- **DB:** Postgres
- **Infra:** AWS, Terraform, Docker

## Coding Challenge

To start the coding challenge, send a POST request to the following endpoint:

`https://apply-to-avantos.dev-sandbox.workload.avantos-ai.net`

**Payload:**

```json
{"email": "<your-email>"}
```

**Important:** Ensure your request includes a non-bot-like User-Agent header to avoid being blocked by the WAF. The following User-Agent has been tested and works:

`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36`
