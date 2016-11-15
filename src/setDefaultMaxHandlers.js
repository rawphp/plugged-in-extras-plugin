/**
 * Handles setting max handlers if not set.
 *
 * @param {Event} event the event
 *
 * @returns {undefined}
 */
export default function setDefaultMaxHandlers(event) {
  const manager = event.data;

  if (manager && manager.getMaxListeners) {
    manager.setMaxListeners(100);
  }
}
