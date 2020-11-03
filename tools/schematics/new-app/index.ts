import { chain, externalSchematic, Rule } from "@angular-devkit/schematics";
import { SchematicOptions } from './schema';
import {updateWorkspaceInTree} from '@nrwl/workspace';

function generateLibrary(schema: SchematicOptions): Rule {
  return externalSchematic(`@nrwl/${schema.plugin}`, "app", {
    name: schema.name
  });
}

function addReleaseRunCommand(schema: SchematicOptions): Rule {
  return updateWorkspaceInTree((workspace) => {
    workspace.projects[schema.name].architect['release'] = {
      builder: '@nrwl/workspace:run-commands',
      options: {
        commands: [
          `nx build --project=${schema.name} --prod --output-path docs/${schema.name} --base-href /test-pages/${schema.name}`,
          'ngh --dir=docs'
        ],
        parallel: false
      }
    };
    return workspace;
  });
}

export default function (schema: SchematicOptions): Rule {
  return chain([
    generateLibrary(schema),
    addReleaseRunCommand(schema)
  ]);
}
