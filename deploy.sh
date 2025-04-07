#!/bin/bash

git add .
git commit -m "update"
git push origin main

sleep 2

npm run deploy