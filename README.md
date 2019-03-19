# Custom-Web-Components-101


1.Custom Componetns are defined using "customElements.define" API of es6+ js

2.Custom Components body is defined using template 

3.Areas in custom components where data can be added can be defined using slots

4.Web Components Life Cycle

	a.constructor():when componet is loaded constructor is invoked no dom elements are still loaded

	b.connectedCallback():when component is added to dom list and all the elements are loaded connectedCallback is invoked

	c.observedAttributes(): is used to define and add event handler to custom attributes of tag

	d.attributeChangedCallback(): when attribute value is changed of those defined in observedAttributes then attributeChangedCallback is invoked

	e.disconnectedCallback():when custom element is removed from dom tree then disconnectedCallback is invoked

5.all custom componetns should have class associated to it and that should extend from HTMLElement

6.Custom component is attached to dom tree as shadow element that can be accomplished in class using 
	 this.attachShadow({ mode: "open" }).appendChild(<element>);

7.Access to dom elements of shadow tree can be accomplished in class using 
	 this.shadowRoot.childNodes;




Example flow

1.simple Example:Defines simple box

2.Example with style:Defines box with style 

3.Example with shadow intraction:Defines how to access elemtents in dom

4.Example with slot:Defines how to create a custom accessable area in custom tag

    	 
