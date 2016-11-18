import chai, { expect } from 'chai';
import cleanUp from './../src/cleanUp';

chai.use(require('dirty-chai'));

describe('cleanUp', () => {
  it('remove all event handlers', () => {
    const event = {
      context: {
        _events: ['init', 'run'],
        removeAllListeners: () => (event.context._events = []),
      },
    };

    expect(event.context._events.length).to.equal(2);
    cleanUp(event);
    expect(event.context._events.length).to.equal(0);
  });
});
