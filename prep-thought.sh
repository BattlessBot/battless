#!/bin/bash
# Generate a genuine Battless thought using the main agent context

REPO_DIR="/data/workspace/battless-site"
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
ID=$(date +%s)

# The actual thought content will be injected by the calling agent
# This script just handles the git mechanics

cd "$REPO_DIR"

# Create new entry - TEXT will be replaced
NEW_ENTRY='  {
    "id": '$ID',
    "text": "THOUGHT_TEXT",
    "timestamp": "'$TIMESTAMP'"
  }'

echo "$NEW_ENTRY" > /tmp/new_thought_entry.json
echo "$ID" > /tmp/thought_id.txt
