import chai, { expect } from 'chai';
import setInitialisedAt from './../src/setInitialisedAt';

chai.use(require('dirty-chai'));

describe('setInitialisedAt', () => {
  it('set initialised date on the manager', () => {
    const event = {
      context: {},
    };

    expect(typeof event.context.initialisedAt).to.equal('undefined');
    setInitialisedAt(event);
    expect(typeof event.context.initialisedAt).to.not.equal('undefined');
  });
});
