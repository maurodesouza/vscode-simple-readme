import { Uri, workspace } from "vscode";

export default async (currentUri: Uri) => {
  const pattern = 'package.json';
  const rootFolder = workspace.workspaceFolders![0];

  const [packageCurrentUri] = await workspace.findFiles({
    base: currentUri.path,
    pattern,
  });

  if (!packageCurrentUri) {return rootFolder.name;};

  const contentInBytes = await workspace.fs.readFile(packageCurrentUri);
  const content = contentInBytes.toString();

  const packageFile = JSON.parse(content);

  return packageFile.name || rootFolder.name;
};
