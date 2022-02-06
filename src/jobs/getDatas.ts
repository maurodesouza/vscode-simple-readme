import { Uri, workspace } from 'vscode';

import getProjectName from './getProjectName';
import { ParseString } from '../utils/parseString';

export default async (uri: Uri) => {
  const projectname = await getProjectName(uri);
  const readmeConfig = workspace.getConfiguration('simple.readme.settings');

  const app_name = new ParseString(projectname).toTitleCase();
  const repository = new ParseString(app_name).toKebabLowerCase();
  const app_url = new ParseString(app_name).toContinuosLowerCase();

  const github = readmeConfig.get<string>('github') || '{{YOUR_GITHUB_USERNAME}}';
  const author = readmeConfig.get<string>('name') || '{{YOUR_NAME}}';

  return {
    datas: {
      app_name,
      repository,
      app_url,
      github,
      author,
    },
    lang: readmeConfig.get<string>('lang') || 'en'
  };
};
