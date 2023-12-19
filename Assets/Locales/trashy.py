import os

# Get the list of folder names in the current directory
folder_names = [name for name in os.listdir() if os.path.isdir(name)]

# Print the formatted list
print(folder_names)
