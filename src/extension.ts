import * as vscode from 'vscode';

/**
 * Duplicates selected text, or the current line when nothing is selected.
 * Mimics Sublime Text's duplicate behavior.
 */
function duplicateText(): void {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    return;
  }

  const eol = editor.document.eol === vscode.EndOfLine.CRLF ? '\r\n' : '\n';

  editor
    .edit((builder) => {
      editor.selections.forEach((selection) => {
        if (selection.isEmpty) {
          const line = editor.document.lineAt(selection.start.line);
          builder.insert(line.range.end, eol + line.text);
        } else {
          builder.insert(selection.start, editor.document.getText(selection));
        }
      });
    })
    .then(
      (success) => {
        if (!success) {
          vscode.window.showErrorMessage('Failed to duplicate text');
        }
      },
      (error: unknown) => {
        const message = error instanceof Error ? error.message : String(error);
        vscode.window.showErrorMessage(`Error duplicating text: ${message}`);
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
