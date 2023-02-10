const vscode = require('vscode');

function duplicateText() {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    return;
  }

  editor.edit(builder => {
    editor.selections.forEach(selection => {
      const text = editor.document.getText(selection);
      const position = selection.start;

      console.log(text);
      builder.insert(position, text);
    });
  });
}

exports.activate = function activate(context) {
  const registeredCommand = vscode.commands.registerCommand('sublime-duplicate-text.duplicateText', duplicateText);
  context.subscriptions.push(registeredCommand);
}

exports.deactivate = function deactivate() { };
