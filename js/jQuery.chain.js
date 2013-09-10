(function($) {
	$.chain = function(step /*step,step...*/ ) {
		var steps = $.makeArray(arguments);
		var rootDfd = $.Deferred();
		var _stepIdx = 0;
		var _stepData = [];
		var _chain = function() {
			if (steps.length === 0) {
				rootDfd.resolveWith(this || window, _stepData);
			} else {
				var step = steps.shift();
				var dfd;
				if (typeof(step) === 'function') {
					dfd = $.when(step.apply(this || window, _stepData));
				} else {
					dfd = $.when(step);
				}
				dfd.then(function() {
						_stepData = $.makeArray(arguments);
						rootDfd.notify(_stepIdx);
						_stepIdx++;
						_chain();
					},
					function() {
						rootDfd.rejectWith(this || window, $.makeArray(arguments).unshift(_stepIdx));
					}
				);
			}
		};
		_chain();
		return rootDfd.promise();
	};
}(jQuery));