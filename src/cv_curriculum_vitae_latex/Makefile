PYTHON := python3
BUILD := $(PYTHON) resume/scripts/build_resume.py

.PHONY: validate industry defense research academic startup pt en all cover-letter-lockheed

validate:
	$(PYTHON) resume/scripts/validate_data.py

industry:
	$(BUILD) --profile industry-en

defense:
	$(BUILD) --profile defense-en

research:
	$(BUILD) --profile research-en

academic:
	$(BUILD) --profile academic-en

startup:
	$(BUILD) --profile startup-en

pt:
	$(BUILD) --profile industry-pt

en:
	$(BUILD) --profile industry-en

all: pt en defense research academic startup

cover-letter-lockheed:
	$(PYTHON) cover_letter/scripts/build_cover_letter.py --company lockheed-martin
