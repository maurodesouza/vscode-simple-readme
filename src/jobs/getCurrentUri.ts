import { Uri, workspace } from 'vscode';

export default async (uri: Uri | undefined) => {
  const rootFolderUri = workspace.workspaceFolders && workspace.workspaceFolders[0].uri;

  const currentUri = uri || rootFolderUri;

  if (currentUri) { return currentUri; }

  throw new Error("Workspace doesn't contain any folders.");
};
