package helpers

import (
	"context"
	"os"
	"path/filepath"
	"testing"

	dockerCmd "github.com/docker/cli/cli/command"
	cliconfig "github.com/docker/cli/cli/config"
	cliflags "github.com/docker/cli/cli/flags"
	format "github.com/docker/compose/v2/cmd/formatter"
	dockerconfig "github.com/docker/docker/cli/config"
	dockerClient "github.com/docker/docker/client"
	"github.com/stretchr/testify/assert"
)

var testDockerComposeConfig string = "./docker-compose.test.yml"

func mockDockerClient() (*dockerClient.APIClient, error) {
	// Get the Docker configuration
	dockerCfg, err := cliconfig.Load(dockerconfig.Dir())
	if err != nil {
		return nil, err
	}

	//connection to docker-client
	cli, err := dockerCmd.NewAPIClientFromFlags(cliflags.NewCommonOptions(), dockerCfg)
	if err != nil {
		return nil, err
	}

	return &cli, nil
}

func TestNewComposeClient(t *testing.T) {
	// Test that NewComposeClient returns a non-nil client and no error

	dc, err := mockDockerClient()
	assert.NotNil(t, dc)
	assert.NoError(t, err)

	c := NewComposeClientFromDocker(dc)
	assert.NotNil(t, c)
}

// func TestGetVersion(t *testing.T) {
// 	// Test that GetVersion returns a non-empty string and no error
// 	dc, err := mockDockerClient()
// 	assert.NoError(t, err)

// 	c := NewComposeClientFromDocker(dc)
// 	assert.NotNil(t, c)

// 	version, err := GetVersion(context.Background(), c)
// 	assert.NotEmpty(t, version)
// 	assert.NoError(t, err)
// }

func TestUp(t *testing.T) {
	// Test that Up returns no error
	ctx := context.Background()
	dc, err := mockDockerClient()
	assert.NoError(t, err)

	c := NewComposeClientFromDocker(dc)
	assert.NotNil(t, c)

	composeFilePath, err := filepath.Abs(testDockerComposeConfig)
	assert.NoError(t, err)

	err = Up(ctx, *c, composeFilePath, false)
	assert.NoError(t, err)
}

func TestRm(t *testing.T) {
	// Test that Rm returns no error
	ctx := context.Background()
	dc, err := mockDockerClient()
	assert.NoError(t, err)

	c := NewComposeClientFromDocker(dc)
	assert.NotNil(t, c)

	err = Rm(ctx, *c, testDockerComposeConfig, false)
	assert.NoError(t, err)
}

func TestStop(t *testing.T) {
	// Test that Stop returns no error
	ctx := context.Background()
	dc, err := mockDockerClient()
	assert.NoError(t, err)

	c := NewComposeClientFromDocker(dc)
	assert.NotNil(t, c)

	err = Stop(ctx, *c, "docker-compose.test.yml", false)
	assert.NoError(t, err)
}

func TestPs(t *testing.T) {
	// Test that Ps returns no error
	ctx := context.Background()
	dc, err := mockDockerClient()
	assert.NoError(t, err)

	c := NewComposeClientFromDocker(dc)
	assert.NotNil(t, c)

	err = Ps(ctx, c, false, false, "")
	assert.NoError(t, err)
}

func TestListContainers(t *testing.T) {
	// Test that ListContainers returns a non-nil slice of ContainerView and no error
	ctx := context.Background()
	dc, err := mockDockerClient()
	assert.NoError(t, err)

	c := NewComposeClientFromDocker(dc)
	assert.NotNil(t, c)

	containers, err := ListContainers(ctx, c, false)
	assert.NotNil(t, containers)
	assert.NoError(t, err)
}

func TestPull(t *testing.T) {
	// Test that Pull returns no error
	ctx := context.Background()
	dc, err := mockDockerClient()
	assert.NoError(t, err)

	c := NewComposeClientFromDocker(dc)
	assert.NotNil(t, c)

	err = Pull(ctx, c, testDockerComposeConfig)
	assert.NoError(t, err)
}

func TestGetLogs(t *testing.T) {
	// Test that GetLogs returns no error
	ctx := context.Background()
	dc, err := mockDockerClient()
	assert.NoError(t, err)

	c := NewComposeClientFromDocker(dc)
	assert.NotNil(t, c)

	logConsumer := format.NewLogConsumer(ctx, os.Stdout, false, false)
	err = GetLogs(ctx, c, testDockerComposeConfig, "10", false, logConsumer)
	assert.NoError(t, err)
}
