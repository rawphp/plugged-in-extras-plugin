/**
 * Handles cleanup on exit.
 *
 * @param {Event} event the event
 *
 * @returns {undefined}
 */
export default function cleanUp(event) {
  const manager = event.data;

  // manager.eventNames() is only supported on Node >= 7.0.0
  if (manager) {
    const handlers = Object.keys(manager._events);

    handlers.forEach((name) => {
      manager.removeAllListeners(name);
    });
  }
}
