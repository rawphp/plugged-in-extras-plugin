import log from 'color-logger';

/**
 * Handles plugged-in error
 *
 * @param {Object} error the error
 *
 * @returns {undefined}
 */
export default function handleError(error) {
  log.i('plugged-in-extra-plugin.handleError');

  log.e(error.message);
}
