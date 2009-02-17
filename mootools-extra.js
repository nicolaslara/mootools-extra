Element.implement({
	/*
		Property: injectHTML
			injects the passed content either before or after this element

		Arguments:
			content - (string) a well formed html string (plain text will not work with this technique)
			where - (string) 'before' or 'after'
	*/

	injectHTML: function(content, where){
      (new Element('div')).set('html', content).getChildren().inject(this, where);
	  return this;
	}

});