import * as vscode from 'vscode';
import { generateReadme } from './commands/generateReadme';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('Readme.generate', generateReadme);

	context.subscriptions.push(disposable);
}
