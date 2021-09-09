#!/bin/bash

cd ../frontend/ || exit
npm run build
echo "Assets are Built !"

cd ../backend/ || exit
git add static/ templates/
git commit -m "build: build for production for deployment"
echo "Git commit added !"

git push
echo "Git push done"
