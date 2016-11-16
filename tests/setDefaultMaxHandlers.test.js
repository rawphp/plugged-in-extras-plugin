import chai, { expect } from 'chai';
import setDefaultMaxHandlers from './../src/setDefaultMaxHandlers';

chai.use(require('dirty-chai'));

describe('setDefaultMaxHandlers', () => {
  it('set max handlers', () => {
    const event = {
      data: {
        getMaxListeners: () => null,
        setMaxListeners: (val) => (event.data._maxListeners = val),
      },
    };

    expect(typeof event.data._maxListeners).to.equal('undefined');
    setDefaultMaxHandlers(event);
    expect(event.data._maxListeners).to.equal(100);
  });
});
