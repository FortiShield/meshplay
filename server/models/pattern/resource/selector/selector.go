package selector

import (
	meshmodel "github.com/khulnasoft/meshkit/models/meshmodel/registry"
)

const (
	CoreResource = "pattern.meshplay.khulnasoft.com/core"
	MeshResource = "pattern.meshplay.khulnasoft.com/mesh/workload"
	K8sResource  = "pattern.meshplay.khulnasoft.com/k8s"
)

type Selector struct {
	registry *meshmodel.RegistryManager
}

func New(reg *meshmodel.RegistryManager) *Selector {
	return &Selector{
		registry: reg,
	}
}
