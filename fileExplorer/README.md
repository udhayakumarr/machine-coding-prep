### Build a File Explorer like Google drive in React

This question was asked in Postman’s SDE2 frontend machine-coding interview to my friend and the CTC offered was 50 LPA base. He had competing offer from Rippling, where the base was 56 LPA.

File-Explorer Example

Problem statement
Create a file explorer like Google drive in React that allows users to browse an arbitrarily nested folder/file hierarchy.

Your task is to:

Define a suitable data model (in JSON) to represent folders and files, where each folder can contain children (folders or files) and files are leaf nodes.
Render the contents of the “current” folder as a grid of tiles. Folders should be distinguishable from files and should be clickable to drill down into that folder. Files need only be displayed (no further action).
Maintain a breadcrumb trail at the top that reflects the path from the root down to the currently open folder. Clicking:
Home resets the view back to top-level items.
Any intermediate breadcrumb folder jumps back up to that level.
Support unlimited nesting—whatever depth the JSON provides, navigating should remain correct.
Focus on clean React code, state management for the current path, and clear UX for entering/leaving folders via both tile clicks and breadcrumb clicks. Do not include any fixed styling or CSS details; you may choose any reasonable styling/layout approach you prefer.