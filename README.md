# Sublime Text Duplicate for VSCode

This extension duplicates strings like Sublime Text. Anything that gets highlighted gets duplicated, rather than the entire lines even when just a part of a string is highlighted.

## Use

To use these commands, press ⌘+p and enter Sublime Duplicate Text. You will also have a keybinding set for ⌘+⇧+d to duplicate text.

![Sublime Duplicate Text](images/example.gif)

## Keybinding installation

Open your keybinding settings with ⌘+K ⌘+S. Then click on the link for keybindings.json. Inside of keybindings.json paste the following code. The second keybinding uses native VSCode functionality, but now your experience will match that of Sublime Text.

```
{
  "key": "cmd+shift+d",
  "command": "sublime-duplicate-text.duplicateText",
  "when": "editorHasSelection && editorTextFocus"
},
{
  "key": "cmd+shift+d",
  "command": "editor.action.copyLinesDownAction",
  "when": "editorFocus && !editorHasSelection"
}
```

## License

The MIT License (MIT)

Copyright (c) 2017 Brian Anders

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.