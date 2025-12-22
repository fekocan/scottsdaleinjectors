#!/bin/bash
# Test script for enrichment API
# Usage: ./test-enrich.sh <THERAPIST_ID>

ID=${1:-"d0aa5c89-2027-466d-8e4a-5694a5043834"} # Default ID just in case

curl -X POST http://localhost:3000/api/enrich \
  -H "Content-Type: application/json" \
  -d "{\"id\": \"$ID\"}"
