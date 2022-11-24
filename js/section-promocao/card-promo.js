class card extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode:'open'});
        this.nome = 'Nome do Produto'
        this.image = 'https://img.besthqwallpapers.com/Uploads/8-3-2020/124121/meat-pizza-fast-food-pizza-4k-baking.jpg'
        this.bgcolor = 'white'
        this.preco = ''
        this.ingredientes = ''
        this.id = ''
    }

    static get observedAttributes(){
        return ['nome', 'image', 'bgcolor', 'preco', 'ingredientes', 'id']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue

        if (nameAttr === 'nome'){
            this.nome = newValue
        }else if(nameAttr === 'image'){
            this.image = newValue
        }else if(nameAttr === 'bgcolor'){
            this.bgcolor = newValue
        }else if(nameAttr === 'preco'){
            this.preco = newValue
        }else if(nameAttr === 'ingredientes'){
            this.ingredientes = newValue
        }else if(nameAttr === 'id'){
            this.id = newValue
        }
    }

    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
    
}