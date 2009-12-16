/*
---
description: Class Mutator. Exposes methods as its own by delegating specified method calls directly to specified elements within the Class.

license: MIT-style

authors:
- Kevin Valdek

requires:
  core/1.2.1:   '*'

provides:
  - Class.Delegates

...
*/

Class.Mutators.Delegates = function(self, delegations) {
	new Hash(delegations).each(function(delegates, target) {
		$splat(delegates).each(function(delegate) {
			self[delegate] = function() {
				this[target][delegate].apply(this[target], arguments);
			};
		});
	});
	return self;
};