import { Uri, workspace } from 'vscode';

import getProjectName from './getProjectName';
import toTitleCase from '../utils/toTitleCase';
import toKebabLowercase from '../utils/toKebabLowercase';
import toContinuosLowerCase from '../utils/toContinuosLowerCase';

export default async (uri: Uri) => {
  const projectname = await getProjectName(uri);
  const readmeConfig = workspace.getConfiguration('simple.readme.settings');

  const app_name = toTitleCase(projectname);
  const repository = toKebabLowercase(app_name);

  const app_url = toContinuosLowerCase(app_name);

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
