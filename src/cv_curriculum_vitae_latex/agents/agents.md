# Resume Engineering System (RES)
you are able to make any changes.
## Mission

This repository contains the source code used to generate all versions of Davi Guanabara Aragão's curriculum vitae.

The objective is **not** to maintain a single resume.

Instead, this repository generates multiple resumes targeted to different audiences while sharing a common data model.

Examples:

- Academic CV
- Industry Resume
- Defense Resume
- AI Research Resume
- Startup Resume
- Portuguese Curriculum Vitae
- English Resume

All generated documents must preserve factual consistency while adapting wording, ordering and emphasis to each target audience.

---

# Design Philosophy

The repository follows four principles.

1. Single source of truth.

Personal information, education, projects and publications should exist only once.

2. Audience-specific presentation.

Different resumes emphasize different experiences without changing facts.

3. ATS-first.

Generated resumes must be compatible with Applicant Tracking Systems.

Avoid unnecessary visual complexity.

4. Professional typography.

All resumes must be generated using LaTeX and maintain publication-quality formatting.

---

# Repository Organization

The repository is organized into independent modules.

```
assets/
    icons/
    photos/

templates/
    industry/
    defense/
    research/
    academic/

styles/

data/

    profile.yaml
    education.yaml
    experience.yaml
    projects.yaml
    publications.yaml
    skills.yaml
    awards.yaml
    certifications.yaml

languages/

    en/
    pt/

build/

scripts/
```

---

# Resume Families

## Academic CV

Purpose:

Applications for universities, research grants and postdoctoral positions.

Prioritize:

- publications
- teaching
- supervision
- awards
- conferences

---

## Industry Resume

Purpose:

Technology companies.

Prioritize:

- engineering
- software
- impact
- technical leadership

Maximum:

1 page.

---

## Defense Resume

Purpose:

Lockheed Martin

Northrop Grumman

RTX

General Dynamics

Anduril

Palantir

Prioritize:

- autonomous systems
- reinforcement learning
- software engineering
- distributed systems
- simulation
- digital twins
- multi-agent systems

---

## AI Research Resume

Purpose:

OpenAI

Anthropic

DeepMind

NVIDIA Research

Microsoft Research

Prioritize:

- publications
- novel methods
- benchmarks
- experiments
- scientific impact

---

# Writing Guidelines

Every bullet must satisfy at least one of these goals.

- Explain technical complexity.
- Demonstrate engineering ability.
- Demonstrate measurable impact.
- Show leadership.
- Show communication ability.

Avoid generic descriptions.

Bad:

Worked on reinforcement learning.

Good:

Designed and implemented a distributed reinforcement learning framework for autonomous UAV coordination under partial observability.

---

# Style Rules

Always prefer action verbs.

Examples:

Designed

Developed

Implemented

Created

Built

Integrated

Optimized

Evaluated

Led

Deployed

Avoid:

Responsible for

Worked on

Helped

Participated

---

# Bullet Structure

Preferred pattern:

Action

Technology

Problem

Impact

Example:

Designed a modular event-driven runtime in Python for reactive execution of GIS workflows, enabling strongly typed dependency propagation and scalable simulation of autonomous systems.

---

# Technical Skills

Skills should always be grouped.

Example:

Programming

Python
C++
TypeScript

Machine Learning

PyTorch
RL
Deep Learning
Graph Neural Networks

Software Engineering

Git
Docker
Linux
REST APIs
Testing

Cloud

AWS
Azure
GCP

Visualization

Matplotlib
Plotly
GIS

---

# Publications

Publications should follow this priority.

Journal papers

Conference papers

Preprints

Technical reports

Patents

---

# Quantification

Whenever possible include measurable outcomes.

Examples:

- trained on 2M samples
- reduced runtime by 40%
- simulated 500 UAVs
- processed 50M records

Avoid vague claims.

---

# ATS Compatibility

Never use:

- tables
- text inside images
- multiple columns for the main body
- decorative icons replacing text
- unusual Unicode characters

Hyperlinks should remain selectable.

---

# Language

Maintain two independent language versions.

Portuguese:

Natural academic Portuguese.

English:

Native US professional English.

Never perform literal translation.

Adapt terminology to the target market.

---

# Defense Industry Vocabulary

Prefer:

Autonomous Systems

Decision Intelligence

Mission Planning

Distributed AI

Simulation

Mission-Critical Software

AI Engineering

Software Architecture

Digital Twin

Graph Algorithms

Multi-Agent Systems

Sensor Fusion

Avoid excessive academic terminology.

---

# Codex Instructions

When modifying this repository:

- preserve consistency across all resume variants
- never invent achievements
- never fabricate metrics
- keep wording concise
- maximize ATS compatibility
- prefer engineering language over academic language for industry resumes
- preserve LaTeX readability
- avoid duplicated information
- favor reusable components over copy-paste
- keep templates modular

Whenever uncertain, prefer factual accuracy over marketing language.