/* global suite, test */

const assert = require('assert');
const vscode = require('vscode');
const myExtension = require('../extension');

suite('Extension Tests', function() {

    test('Extension should be present', function() {
        assert.ok(vscode.extensions.getExtension('brian-anders.sublime-duplicate-text'));
    });

    test('Should register duplicateText command', async function() {
        const commands = await vscode.commands.getCommands(true);
        assert.ok(commands.includes('sublime-duplicate-text.duplicateText'));
    });

    test('duplicateText function should exist', function() {
        assert.ok(typeof myExtension.activate === 'function');
        assert.ok(typeof myExtension.deactivate === 'function');
    });
});