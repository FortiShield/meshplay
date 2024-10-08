---
layout: default
title: meshplayctl-exp-environment-create
permalink: reference/meshplayctl/exp/environment/create
redirect_from: reference/meshplayctl/exp/environment/create/
type: reference
display-title: "false"
language: en
command: exp
subcommand: environment
---

# meshplayctl exp environment create

Create a new environments

## Synopsis

Create a new environments by providing the name and description of the environment
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl exp environment create [flags]

</div>
</pre> 

## Examples

Create a new environment
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl exp environment create --orgID [orgID] --name [name] --description [description] 

</div>
</pre> 

Documentation for environment can be found at:
<pre class='codeblock-pre'>
<div class='codeblock'>
https://docs.khulnasoft.com/cloud/spaces/environments/

</div>
</pre> 

## Options

<pre class='codeblock-pre'>
<div class='codeblock'>
  -d, --description string   Description of the environment
  -h, --help                 help for create
  -n, --name string          Name of the environment
  -o, --orgId string         Organization ID

</div>
</pre>

## Options inherited from parent commands

<pre class='codeblock-pre'>
<div class='codeblock'>
      --config string   path to config file (default "/home/runner/.meshplay/config.yaml")
  -v, --verbose         verbose output

</div>
</pre>

## See Also

Go back to [command reference index](/reference/meshplayctl/), if you want to add content manually to the CLI documentation, please refer to the [instruction](/project/contributing/contributing-cli#preserving-manually-added-documentation) for guidance.
