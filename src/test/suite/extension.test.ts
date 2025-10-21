import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('Extension should be present', () => {
    assert.ok(vscode.extensions.getExtension('brian-anders.sublime-duplicate-text'));
  });

  test('Should register duplicateText command', async () => {
    const commands = await vscode.commands.getCommands(true);
    assert.ok(commands.includes('sublime-duplicate-text.duplicateText'));
  });

  test('Command should be available', async () => {
    const commands = await vscode.commands.getCommands(true);
    const hasCommand = commands.includes('sublime-duplicate-text.duplicateText');
    assert.strictEqual(hasCommand, true, 'Command should be registered');
  });
});
