// Create a class for the element every component should have a class associated to it 
//that holds components logic if it has any
class Square extends HTMLElement {
  //when component is called costructor is invoked 
  //Note: no dom elements are initilised in constructor
  constructor() {
    // Always call super first in constructor
    super();
    const shadow = this.attachShadow({mode: 'open'});

    //creating custom class for stylleing with name boxAttribute 
    let style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = '.boxAttribute { height: 20px; width: 20px; background: red; }';


	//adding class to our div
    const div = document.createElement('div');
    div.className='boxAttribute';
    shadow.appendChild(style);
    shadow.appendChild(div);
  }

  //when component is addedd to page connectedCallback is called this is init mehtod for component
  connectedCallback() {
    console.log('Custom square element added to page.');
    
  }

  //when component is destroyed this method is called 
  disconnectedCallback() {
    console.log('Custom square element removed from page.');
  }

}
//CustomElements.define is api method that defines your custom element
//Syntax:customElements.define(<desired name it must be more then 2 syllable>, <class name>);
customElements.define('custom-square', Square);
