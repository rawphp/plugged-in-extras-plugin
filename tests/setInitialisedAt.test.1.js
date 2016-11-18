import chai from 'chai';
import handleError from './../src/handleError';

chai.use(require('dirty-chai'));

describe('handleError', () => {
  it('run error event handler', () => {
    const event = {
      context: {},
    };

    handleError(event);
  });
});
