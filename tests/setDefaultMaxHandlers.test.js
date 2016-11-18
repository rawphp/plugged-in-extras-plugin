import chai, { expect } from 'chai';
import setDefaultMaxHandlers from './../src/setDefaultMaxHandlers';

chai.use(require('dirty-chai'));

describe('setDefaultMaxHandlers', () => {
  it('set max handlers', () => {
    const event = {
      context: {
        getMaxListeners: () => null,
        setMaxListeners: (val) => (event.context._maxListeners = val),
      },
    };

    expect(typeof event.context._maxListeners).to.equal('undefined');
    setDefaultMaxHandlers(event);
    expect(event.context._maxListeners).to.equal(100);
  });
});
