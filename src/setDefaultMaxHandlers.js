/**
 * Handles setting max handlers if not set.
 *
 * @param {Event}  event         the event
 * @param {String} event.name    event name
 * @param {Object} event.context event context object
 *
 * @returns {undefined}
 */
export default function setDefaultMaxHandlers(event) {
  const manager = event.context;

  if (manager && manager.getMaxHandlers) {
    manager.setMaxHandlers(100);
  }
}
