#!/bin/bash

# Find entries in git index that are submodules (mode 160000)
submodules=$(git ls-files -s | grep '^160000' | awk '{print $4}')

# Check if there are any submodules
if [ -z "$submodules" ]; then
    echo "No submodules found in this repository."
    exit 0
fi

echo "Found submodules to convert:"
echo "$submodules"
echo ""
read -p "Do you want to convert all submodules to regular directories? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Aborted."
    exit 0
fi

# Process each submodule
for submodule in $submodules; do
    echo ""
    echo "==== Converting $submodule ===="
    
    # Remove from Git's index
    echo "Removing $submodule from Git index..."
    git rm --cached "$submodule"
    
    # Remove .git directory inside submodule
    if [ -d "$submodule/.git" ]; then
        echo "Removing $submodule/.git directory..."
        rm -rf "$submodule/.git"
    fi
    
    # Remove from .git/modules if it exists
    if [ -d ".git/modules/$submodule" ]; then
        echo "Removing .git/modules/$submodule..."
        rm -rf ".git/modules/$submodule"
    fi
    
    # Add back as regular files
    if [ -d "$submodule" ]; then
        echo "Adding $submodule as regular directory..."
        git add "$submodule"
        echo "✓ Converted $submodule"
    else
        echo "⚠ Warning: $submodule directory doesn't exist"
    fi
done

echo ""
echo "All submodules converted! Ready to commit."
echo "Run: git commit -m 'Convert all submodules to regular directories'"