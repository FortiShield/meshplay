---
layout: default
title: meshplayctl-filter-view
permalink: reference/meshplayctl/filter/view
redirect_from: reference/meshplayctl/filter/view/
type: reference
display-title: "false"
language: en
command: filter
subcommand: view
---

# meshplayctl filter view

View filter(s)

## Synopsis

Displays the contents of a specific filter based on name or id
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl filter view [flags]

</div>
</pre> 

## Examples

View the specified WASM filter
A unique prefix of the name or ID can also be provided. If the prefix is not unique, the first match will be returned.
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl filter view "[filter-name | ID]"

</div>
</pre> 

View all filter files
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl filter view --all

</div>
</pre> 

//View multi-word named filter files. Multi-word filter names should be enclosed in quotes
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl filter view "filter name"

</div>
</pre> 

<pre class='codeblock-pre'>
<div class='codeblock'>
        

</div>
</pre> 

## Options

<pre class='codeblock-pre'>
<div class='codeblock'>
  -a, --all                    (optional) view all filters available
  -h, --help                   help for view
  -o, --output-format string   (optional) format to display in [json|yaml] (default "yaml")

</div>
</pre>

## Options inherited from parent commands

<pre class='codeblock-pre'>
<div class='codeblock'>
      --config string   path to config file (default "/home/runner/.meshplay/config.yaml")
  -t, --token string    Path to token file default from current context
  -v, --verbose         verbose output

</div>
</pre>

## See Also

Go back to [command reference index](/reference/meshplayctl/), if you want to add content manually to the CLI documentation, please refer to the [instruction](/project/contributing/contributing-cli#preserving-manually-added-documentation) for guidance.
