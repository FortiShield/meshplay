package kubernetes

import (
	"context"
	"github.com/khulnasoft/meshplay/server/machines"
	"github.com/khulnasoft/meshkit/models/events"
)

type IgnoreAction struct{}

func (ia *IgnoreAction) ExecuteOnEntry(ctx context.Context, machineCtx interface{}, data interface{}) (machines.EventType, *events.Event, error) {

	return machines.NoOp, nil, nil
}
func (ia *IgnoreAction) Execute(ctx context.Context, machineCtx interface{}, data interface{}) (machines.EventType, *events.Event, error) {
	// Just pass along, the status is update as we exit from the event.
	return machines.NoOp, nil, nil
}

func (ia *IgnoreAction) ExecuteOnExit(ctx context.Context, machineCtx interface{}, data interface{}) (machines.EventType, *events.Event, error) {
	return machines.NoOp, nil, nil
}
