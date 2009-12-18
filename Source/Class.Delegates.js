/*
---
description: Class Mutator. Exposes methods as its own by delegating specified method calls directly to specified elements within the Class.

license: MIT-style

authors:
- Kevin Valdek
- Perrin Westrich

requires:
  core/1.2.4:   '*'

provides:
  - Class.Delegates

...
*/

Class.Mutators.Delegates = function(delegations) {
	var self = this;
	new Hash(delegations).each(function(delegates, target) {
		$splat(delegates).each(function(delegate) {
			self.prototype[delegate] = function() {
				var ret = this[target][delegate].apply(this[target], arguments);
				return (ret === this[target] ? this : ret);
			};
		});
	});
};
