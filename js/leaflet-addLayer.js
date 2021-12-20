L.Control.addLayer = L.Control.extend({
	options: {
		// topright, topleft, bottomleft, bottomright
		position: 'bottomright',
		placeholder: 'Search...'
	},
	initialize: function (options) {
		// constructor
		L.Util.setOptions(this, options);
	},
	onAdd: function (map) {
		// happens after added to map
		// We want a big + which expands a form upon click
		// layer name + JSON
		var container = L.DomUtil.create('div', 'layer-container');
		this.form = L.DomUtil.create('form', 'form' , container);
		var group = L.DomUtil.create('div', 'form-group', this.form);
		this.input = L.DomUtil.create('input', 'form-control input-sm', group);
		this.input.type = 'text';
		this.input.placeholder = this.options.placeholder;
		this.results = L.DomUtil.create('div', 'list-group', group);
		// L.DomEvent.addListener(this.input, 'keyup', _.debounce(this.keyup, 300), this);
		L.DomEvent.addListener(this.form, 'submit', this.submit, this);
		L.DomEvent.disableClickPropagation(container);
		// Form button 'test'
		// Form button 'submit'
		return container;
	},
	onRemove: function (map) {
		// when removed
		L.DomEvent.removeListener(this._input, 'keyup', this.keyup, this);
		L.DomEvent.removeListener(form, 'submit', this.submit, this);
	},
	keyup: function() {},
	submit: function(e) {
		L.DomEvent.preventDefault(e)
	},
});

L.control.addLayer = function (id, options) {
	return new L.Control.addLayer(id, options);
}
