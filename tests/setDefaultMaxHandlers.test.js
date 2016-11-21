import chai, { expect } from 'chai';
import setDefaultMaxHandlers from './../src/setDefaultMaxHandlers';

chai.use(require('dirty-chai'));

describe('setDefaultMaxHandlers', () => {
  it('set max handlers', () => {
    const event = {
      context: {
        getMaxHandlers: () => null,
        setMaxHandlers: (val) => (event.context._defaultMaxHandlers = val),
      },
    };

    expect(typeof event.context._defaultMaxHandlers).to.equal('undefined');
    setDefaultMaxHandlers(event);
    expect(event.context._defaultMaxHandlers).to.equal(100);
  });
});
