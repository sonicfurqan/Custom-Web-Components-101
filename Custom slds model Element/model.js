class sldsModel extends HTMLElement {
    constructor() {
        // Always call parent constructor first
        super();

        // Get template content from DOM
        const template = document.getElementById("my-model");
        const templateContent = template.content;

        // Create new Shadow Root
        const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
            templateContent.cloneNode(true)
        );
    }
    connectedCallback() {
        let that=this;
        let container = this.shadowRoot.getElementById("custom-Model");
        let closeButton = this.shadowRoot.getElementById("modelCloseButton");
        closeButton.onclick = function() {
            container.remove();
        };
    }

}
customElements.define("slds-model", sldsModel);