class Item {constructor(name,type,weight,description){
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.description = description;
}

    getDetalhes(){
        console.log(`Nome: ${this.name} | Tipo: ${this.type} | Peso: ${this.weight} | Descrição: ${this.description}`);
    }

}


class Inventory {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(nameItem) {
        this.items = this.items.filter(item => item.name !== nameItem);
    }

    listItems(){
        if(this.items.length === 0){
            console.log ("Inventory's empty")
        } else {
            console.log("items in inventory");
            this.items.forEach(item => console.log(`- Item name: ${item.name}, item type: ${item.type}`));           
        };
    }

    findItemsByType(type) {
        const found = this.items.filter(item => item.type === type)
        if(found.length > 0) {
            console.log(`Items found: `);
            found.forEach(item => console.log(`- Item name: ${item.name}, item type: ${item.type}`));
        } else {
            console.log(`No items found with type: ${type}`);
        }
    }

    totalWeight() {
        const totalWeight = this.items.reduce((total, item) => total + Number(item.weight), 0);
        console.log(`Total weight: ${totalWeight}`);
        return totalWeight;
    }

}

const inventory = new Inventory();

inventory.addItem(new Item("Celestial", "Espada", "2", "Espada afiada"));
inventory.addItem(new Item("Vulcão", "Adaga", "1", "Adaga de fogo"));
inventory.listItems();

//inventory.removeItem("Vulcão");
inventory.listItems();

inventory.totalWeight();

inventory.findItemsByType("Adaga");
