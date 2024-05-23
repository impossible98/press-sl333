#!/usr/bin/env bash

read -p "Version is ?" version
message="Release version $version"

if [[ $version =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "Version is valid."
else
    echo "Invalid version format."
    exit 1
fi
echo "$message"
read -p "Are you sure? (y/n) " confirm
confirm=${confirm,,} # tolower
if [[ $confirm == "y" ]]; then
    git tag -a "$version" -m "$message"
    if [ $? -eq 0 ]; then
        echo "Tag created successfully!"
    else
        echo "Failed to create tag."
    fi
else
    echo "Tag creation cancelled."
fi
