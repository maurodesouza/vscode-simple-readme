import { Uri, workspace } from "vscode";

export default async (currentUri: Uri) => {
  const pattern = 'package.json';

  let projectName = '';
  let packageUri = undefined;

  const [packageCurrentUri] = await workspace.findFiles({
    base: currentUri.path,
    pattern,
  });

  if (packageCurrentUri) {
    packageUri = packageCurrentUri;
  }

  const rootFolderUri = workspace.workspaceFolders![0].uri;

  const [packageRootFolder] = await workspace.findFiles({
    base: rootFolderUri.path,
    pattern,
  });

  if (packageRootFolder && packageUri === undefined) {
    packageUri = packageRootFolder;
  }

  if (packageUri) {
    const contentInBytes = await workspace.fs.readFile(packageUri);
    const content = contentInBytes.toString();

    const packageFile = JSON.parse(content);

    projectName = packageFile.name as string;
  } else {
    projectName = workspace.workspaceFolders![0].name;
  }

  return projectName;
};
