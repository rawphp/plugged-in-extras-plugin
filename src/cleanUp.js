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
  if (manager && manager.eventNames) {
    const events = manager.eventNames();

    events.forEach((name) => {
      manager.removeAllListeners(name);
    });
  }
}
