// Create a class for the element every component should have a class associated to it 
//that holds components logic if it has any
class Square extends HTMLElement {
	// Specify some attributes so that when they are passed attributeChangedCallback will work
  	static get observedAttributes() {
    	return ['changecolor'];
  	}



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

  //when attribute value is changed of custom component that is defined in observedAttributes this method is invokded
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
    if(name==='changecolor'){
    	 //getting elements  of this shaodow dom to intract
    	 const shadow = this.shadowRoot;
    	 //getting array of elements
    	 const childNodes = Array.from(shadow.childNodes);
    	 //geting element based on its tag type
    	 let div=childNodes.find(ele=>ele.nodeName=='DIV');
    	 //changing value
    	 div.style.background=newValue;
  		
  		
    }
    
  }

}
//CustomElements.define is api method that defines your custom element
//Syntax:customElements.define(<desired name it must be more then 2 syllable>, <class name>);
customElements.define('custom-square', Square);

//simple random function
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.onload = function() {
	let changeColor=document.getElementById('changeColor');
	let square = document.querySelector('custom-square');
	//adding on click for button
	changeColor.onclick = function() {
		//changing custom attribute changeColor 
		 square.setAttribute('changeColor', `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
	}

}




