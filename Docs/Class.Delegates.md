Class: Class.Delegates {#Class-Delegates}
=================================
Extends the [Class][] native, this is a mutator.

### Usage

*Class.Delegates* allows you to delegate specified methods directly to elements within the class. This can come to handy when having classes that contain a reference to an actual Element in the DOM, like "this.element". By delegating the method *dispose* to *this.element*, you could call the method *dispose* directly on the class instance instead of the element within the class (*myInstance.dispose* vs. *myInstance.element.dispose*).

	var MyClass = new Class({
		initialize: function(element){
			this.element = document.id(element);
		},
		dispose: function(){
			this.element.dispose(); // manual delegation
		}
	});

*Class.Delegates* saves you the trouble of delegating the *dispose* method call manually.

### Example

	var MyClass = new Class({
		Delegates: {
			element: 'dispose' // target: methodName(s)
		},
		initialize: function(element){
			this.element = document.id(element);
		}
		// no dispose method needed anymore
	});

By using *Class.Delegates* in the example above, you do not have to call *dispose* on the element anymore, but the class. Furthermore, *dispose* does not have to be implemented in the class.

### Example - Delegating multiple methods

As the values in the Delegates object can either be a *String* or an *Array*, you can pass an array of method names to be delegated to the element (which is the key of the Delegates object). A more advanced example, here we delegate multiple methods to different elements:

	var MyClass = new Class({
		Delegates: {
			element: 'dispose',
			peer: ['setStyle', 'grab', 'inject']
		},
		initialize: function(element, peer){
			this.element = document.id(element);
			this.peer = document.id(peer);
		}
	});

By using *Class.Delegates* here, we can now call *setStyle*, *grab* and *inject* directly on an instance of MyClass, and each one of them gets delegated to *this.peer*.

[Class]: /core/Class/Class
