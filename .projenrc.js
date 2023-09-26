/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  authorName: 'lacework',
  packageName: 'rhizo-co-terraform-provider-lacework',
  githubNamespace: 'rhizo-co',
  useCustomGithubRunner: false,
  terraformProvider: "lacework/lacework@~> 1.15.0",
  cdktfVersion: "0.16.0",
  constructsVersion: "10.2.23",
  minNodeVersion: "18.0.0",
  jsiiVersion: "^5.0.1",
  devDeps: ["@cdktf/provider-project@^0.2.95"],
});


project.synth();
