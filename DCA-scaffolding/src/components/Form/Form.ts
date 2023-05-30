import { dispatch } from "../../store";
import { Product } from "../../types/product";

const userInputs: Product = {
    receta: "",
    instrucciones: "",
    ingredientes: "",
    imagen: "",
};

class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const nreceta = this.ownerDocument.createElement('label');
        nreceta.textContent= "Nombre Receta"
        const receta = this.ownerDocument.createElement('input');
        receta.addEventListener("change", (e: any) =>{
            userInputs.receta=e.target.value;
        });


        const inst = this.ownerDocument.createElement('label');
        inst.textContent= "Instrucciones"
        const instrucciones = this.ownerDocument.createElement('input');
        instrucciones.addEventListener("change", (e: any) =>{
            userInputs.instrucciones=e.target.value;
        });

        const ingr = this.ownerDocument.createElement('label');
        ingr.textContent= "Ingredientes"
        const ingredientes = this.ownerDocument.createElement('input');
        ingredientes.addEventListener("change", (e: any) =>{
            userInputs.ingredientes=e.target.value;
        });

        const img = this.ownerDocument.createElement('label');
        img.textContent= "Imagen"
        const imagen = this.ownerDocument.createElement('input');
        imagen.addEventListener("change", (e: any) =>{
            userInputs.imagen=e.target.value;
        });


        const btn = this.ownerDocument.createElement('button');
        btn.textContent= "Guardar Receta"
        btn.addEventListener("click", () => {
        console.log(userInputs);
        })

        this.shadowRoot?.appendChild(nreceta);
        this.shadowRoot?.appendChild(receta);
        this.shadowRoot?.appendChild(inst);
        this.shadowRoot?.appendChild(instrucciones);
        this.shadowRoot?.appendChild(ingr);
        this.shadowRoot?.appendChild(ingredientes);
        this.shadowRoot?.appendChild(img);
        this.shadowRoot?.appendChild(imagen);
        this.shadowRoot?.appendChild(btn);


    }
}

customElements.define('app-form', Form)

export default Form;