# 11 - Events in JavaScript

## Overview

Events let JavaScript respond to user actions like clicks, typing, and mouse movement. This topic covers the most common events, the event object, and event delegation.

## Topics Covered

### 1. Click Event

`addEventListener("click", function)` runs code whenever the element is clicked.

### 2. The Event Object

Every event listener function automatically receives an `event` object, which contains useful info like `event.type` (the kind of event) and `event.target` (the exact element that triggered it).

### 3. Input Event

Fires every time the value of an input field changes — commonly used for live text feedback.

### 4. Keydown Event

Fires when any key is pressed; `event.key` tells you which key was pressed.

### 5. Mouseover / Mouseout Events

Fire when the mouse enters or leaves an element — useful for hover effects.

### 6. Event Delegation

Instead of adding a separate listener to every child element, one listener is added to the parent, and `event.target` is checked to see which child was actually clicked. This is more efficient, especially for lists that change dynamically.

### 7. Removing an Event Listener

`removeEventListener("event", functionName)` stops a listener from running — this only works if the same named function reference was used in `addEventListener`.

## Files

- `index.html` — contains a button, input field, and list to interact with
- `script.js` — demonstrates click, input, keydown, hover, and delegated events

## How to Run

Open `index.html` directly in a browser and interact with the button, input field, and list items.

## Key Takeaways

- The event object (`event.target`) tells you exactly which element triggered the event — essential for event delegation.
- Event delegation (listening on a parent instead of every child) is the standard professional pattern for lists and dynamic content.
- `removeEventListener` requires the exact same function reference that was passed to `addEventListener`.
