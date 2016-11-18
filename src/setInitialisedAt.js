import Moment from 'moment';

/**
* Handles cleanup on exit.
 *
 * @param {Event}  event         the event
 * @param {String} event.name    event name
 * @param {Object} event.context event context object
 *
 * @returns {undefined}
*/
export default function setInitialisedAt(event) {
  const manager = event.context;

  if (manager) {
    manager.initialisedAt = new Moment();
  }
}
