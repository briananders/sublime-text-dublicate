import * as vscode from 'vscode';

/**
 * Duplicates the selected text at the selection start position
 * Mimics Sublime Text's duplicate behavior
 */
function duplicateText(): void {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    return;
  }

  editor
    .edit((builder) => {
      editor.selections.forEach((selection) => {
        const text = editor.document.getText(selection);
        const position = selection.start;

        builder.insert(position, text);
      });
    })
    .then(
      (success) => {
        if (!success) {
          vscode.window.showErrorMessage('Failed to duplicate text');
        }
      },
      (error) => {
        vscode.window.showErrorMessage(`Error duplicating text: ${error.message}`);
      }
    );
}

export function activate(context: vscode.ExtensionContext): void {
  const registeredCommand = vscode.commands.registerCommand(
    'sublime-duplicate-text.duplicateText',
    duplicateText
  );

  context.subscriptions.push(registeredCommand);
}

export function deactivate(): void {
  // Cleanup if needed
}
