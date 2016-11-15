import Moment from 'moment';

/**
* Handles cleanup on exit.
*
* @param {Event} event the event
*
* @returns {undefined}
*/
export default function setInitialisedAt(event) {
  const manager = event.data;

  if (manager) {
    manager.initialisedAt = new Moment();
  }
}
