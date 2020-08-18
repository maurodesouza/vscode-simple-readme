import { Uri, workspace } from 'vscode';

import * as path from 'path';
import * as Mustache from 'mustache';

type Datas = {
  app_name: string;
  repository: string;
  app_url: string;
  github: string;
  author: string;
};

type GetContentArgs = {
  lang: string;
  datas: Datas;
};

export default async ({ datas, lang }: GetContentArgs) => {
  const templatePath = path.resolve(__dirname, '..', '..', 'templates', `${lang}`, 'default.md');
  const templateUri = Uri.file(templatePath);

  const buffer = await workspace.fs.readFile(templateUri);
  const content = Mustache.render(buffer.toString(), datas);

  return content;
};
