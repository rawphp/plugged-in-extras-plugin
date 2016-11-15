/**
 * Handles cleanup on exit.
 *
 * @param {Event} event the event
 *
 * @returns {undefined}
 */
export default function cleanUp(event) {
  const manager = event.data;

  if (manager && manager.listenerCount > 0) {
    const events = manager.eventNames();

    events.forEach((name) => {
      manager.removeAllListeners(name);
    });
  }
}
