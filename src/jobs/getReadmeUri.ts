import { workspace, Uri } from 'vscode';

export default async (uri: Uri): Promise<Uri> => {
  const filename = 'README.md';

  const fileUri = Uri.parse(`${uri.toString()}/${filename}`, true);

  const filesFound = await workspace.findFiles({
    base: uri.path,
    pattern: filename,
  });

  if (filesFound.length === 0) { return fileUri; }

  throw new Error(`A ${filename} file already exists in this workspace.`);
};
