---
layout: default
title: Kubernetes
permalink: installation/kubernetes
type: installation
category: kubernetes
redirect_from:
- installation/platforms/kubernetes
display-title: "false"
language: en
list: include
image: /assets/img/platforms/kubernetes.svg
abstract: Install Meshplay on Kubernetes. Deploy Meshplay in Kubernetes in-cluster or outside of Kubernetes out-of-cluster.
---

<h1>Quick Start with {{ page.title }} <img src="{{ page.image }}" style="width:35px;height:35px;" /></h1>

Manage your kubernetes clusters with Meshplay. Deploy Meshplay in kubernetes [in-cluster](#in-cluster-installation) or outside of kubernetes [out-of-cluster](#out-of-cluster-installation). **_Note: It is advisable to [Install Meshplay in your kubernetes clusters](#install-meshplay-into-your-kubernetes-cluster)_**

<div class="prereqs"><h4>Prerequisites</h4>
  <ol>
    <li>Install the Meshplay command line client, <a href="{{ site.baseurl }}/installation/meshplayctl" class="meshplay-light">meshplayctl</a>.</li>
    <li>Install <a href="https://kubernetes.io/docs/tasks/tools/">kubectl</a> on your local machine.</li>
    <li>Access to an active kubernetes cluster.</li>
  </ol>
</div>

## Available Deployment Methods

- [In-cluster Installation](#in-cluster-installation)
  - [Preflight Checks](#preflight-checks)
    - [Preflight: Cluster Connectivity](#preflight-cluster-connectivity)
  - [Installation: Using `meshplayctl`](#installation-using-meshplayctl)
  - [Installation: Using Helm](#installation-using-helm)
  - [Post-Installation Steps](#post-installation-steps)
- [Out-of-cluster Installation](#out-of-cluster-installation)
  - [Installation: Upload Config File in Meshplay Web UI](#installation-upload-config-file-in-meshplay-web-ui)

# In-cluster Installation

Follow the steps below to install Meshplay in your kubernetes cluster.

## Preflight Checks

Read through the following considerations prior to deploying Meshplay on kubernetes.

### Preflight: Cluster Connectivity

Verify your kubeconfig's current context is set the kubernetes cluster you want to deploy Meshplay.
{% capture code_content %}kubectl config current-context{% endcapture %}
{% include code.html code=code_content %}

## Installation: Using `meshplayctl`

Once configured, execute the following command to start Meshplay.

Before executing the below command, go to ~/.meshplay/config.yaml and ensure that current platform is set to kubernetes.
{% capture code_content %}$ meshplayctl system start{% endcapture %}
{% include code.html code=code_content %}

## Installation: Using Helm

For detailed instructions on installing Meshplay using Helm V3, please refer to the [Helm Installation](/installation/kubernetes/helm) guide.

## Post-Installation Steps

Optionally, you can verify the health of your Meshplay deployment, using <a href='/reference/meshplayctl/system/check'>meshplayctl system check</a>.

You're ready to use Meshplay! Open your browser and navigate to the Meshplay UI.

{% include_cached installation/accessing-meshplay-ui.md display-title="true" %}

# Out-of-cluster Installation

Install Meshplay on Docker (out-of-cluster) and connect it to your Kubernetes cluster.

## Installation: Upload Config File in Meshplay Web UI

- Run the below command to generate the _"config_minikube.yaml"_ file for your cluster:

 <pre class="codeblock-pre"><div class="codeblock">
 <div class="clipboardjs">kubectl config view --minify --flatten > config_minikube.yaml</div></div>
 </pre>

- Upload the generated config file by navigating to _Settings > Environment > Out of Cluster Deployment_ in the Web UI and using the _"Upload kubeconfig"_ option.

{% include related-discussions.html tag="meshplay" %}
