import chai, { expect } from 'chai';
import cleanUp from './../src/cleanUp';

chai.use(require('dirty-chai'));

describe('cleanUp', () => {
  it('remove all event handlers', () => {
    const event = {
      data: {
        _events: ['init', 'run'],
        removeAllListeners: () => (event.data._events = []),
      },
    };

    expect(event.data._events.length).to.equal(2);
    cleanUp(event);
    expect(event.data._events.length).to.equal(0);
  });
});
