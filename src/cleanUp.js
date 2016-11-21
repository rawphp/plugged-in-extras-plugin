/**
 * Handles cleanup on exit.
 *
 * @param {Event}  event         the event
 * @param {String} event.name    event name
 * @param {Object} event.context event context object
 *
 * @returns {undefined}
 */
export default function cleanUp(event) {
  const manager = event.context;

  // manager.eventNames() is only supported on Node >= 7.0.0
  if (manager) {
    const handlers = Object.keys(manager._events);

    handlers.forEach((name) => {
      manager.removeAllHandlers(name);
    });
  }
}
