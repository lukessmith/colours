'use strict';

describe('angularColour.colourService module', function() {
  beforeEach(module('angularColour.colourService'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
