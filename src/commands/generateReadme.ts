import { window, Uri, workspace } from 'vscode';

import getCurrentUri from '../jobs/getCurrentUri';
import getReadmeUri from '../jobs/getReadmeUri';
import getDatas from '../jobs/getDatas';
import getContent from '../jobs/getContent';

const generateReadme = async (uri: Uri) => {
  try {
    const currentUri = await getCurrentUri(uri);
    const readmeUri = await getReadmeUri(currentUri);

    const datas = await getDatas(currentUri);
    const content = await getContent(datas);

    await workspace.fs.writeFile(readmeUri, Buffer.from(content));
  } catch (err) {
    if (err instanceof Error) {
      window.showErrorMessage(err.message);
      return;
    }

    window.showErrorMessage('simple readme: an unexpected error has occurred');
  };
};

export { generateReadme };
