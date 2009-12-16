Class.Delegates
===============

Class Mutator.
Exposes methods as its own by delegating specified method calls directly to specified elements within the Class.

![Screenshot](http://cannedapps.com/posterous/kevinvaldek/delegates.png)

How to use
----------

All you have to do is to use *Delegates* in your class definition, and provide it with a object hash.
Each key in the object is a delegation target. The value can be either the name of the delegated method, or an array of names if multiple methods should be delegated to the same element.

	#JS
	new Class({
		Delegates: {
			targetOne: 'methodName',
			targetTwo: ['methodNameOne', 'methodNameTwo', 'methodNameThree']
		}
	});

Example
-------

By delegating the method *dispose* to *this.element*, you could call the method *dispose* directly on the class instance instead of the element within the class (*myInstance.dispose* vs. *myInstance.element.dispose*).

	#JS
	var MyClass = new Class({
		initialize: function(element){
			this.element = document.id(element);
		},
		dispose: function(){
			this.element.dispose(); // manual delegation
		}
	});

*Class.Delegates* saves you the trouble of delegating the *dispose* method call manually.

	#JS
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

Another example:

As the values in the Delegates object can either be a *String* or an *Array*, you can pass an array of method names to be delegated to the element (which is the key of the Delegates object). A more advanced example, here we delegate multiple methods to different elements:

	#JS
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

