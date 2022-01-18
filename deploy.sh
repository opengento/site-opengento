#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
docker run --rm -it -v $(pwd):/src klakegg/hugo

# Get build repository
git clone git@github.com:opengento/opengento.github.io.git

# Copy release
cp -R public/* opengento.github.io

# Add changes to git.
cd opengento.github.io
git add .

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master


# Come Back up to the Project Root
cd ..
rm -rf opengento.github.io