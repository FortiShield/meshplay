package config

import (
	"github.com/khulnasoft/meshplay/meshkit/config"
	configprovider "github.com/khulnasoft/meshplay/meshkit/config/provider"
	"github.com/khulnasoft/meshplay/meshkit/utils"
)

// New creates a new config instance
func New(provider string) (config.Handler, error) {
	var (
		handler config.Handler
		err     error
	)
	opts := configprovider.Options{
		FilePath: utils.GetHome(),
		FileType: "yaml",
		FileName: "meshsync_config",
	}

	// Config provider
	switch provider {
	case configprovider.ViperKey:
		handler, err = configprovider.NewViper(opts)
		if err != nil {
			return nil, ErrInitConfig(err)
		}
	case configprovider.InMemKey:
		handler, err = configprovider.NewInMem(opts)
		if err != nil {
			return nil, ErrInitConfig(err)
		}
	}

	return handler, nil
}
