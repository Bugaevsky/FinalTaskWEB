class MiniCRUD {
    constructor() {
        this.mas = new Map();
        console.log('\nNew Map\n');
    }

    add(object) {
        if (object === undefined) {
            console.log("Error");
        }
        else {
            this.mas.set(String(this.mas.size), object);
            return this.mas.size - 1;
        }
    }

    getById(id){
        if (typeof id === 'string'){
            if (this.mas.has(id)){
                return this.mas.get(id);
            }
            else {
                return null;
            }
        }
        else {
            console.log("ID should be string");
            return null;
        }
    }

    getAll() {
        if (this.mas.size === 0) {
            console.log("Container is empty");
            return null;
        }
        return this.mas
    }

    deleteById(id) {
        if (typeof id === 'string') {
            if (this.mas.has(id)) {
                this.mas.delete(id);
                console.log(' Deleted successfully');
            } else {
                console.log(' Failed delete');
            }
        }
        else {
            console.log("ID should be string");
            return null;
        }
    }

    updateById(id, object) {
        if (typeof id === 'string') {
            if (this.mas.has(String(id))) {
                if (typeof object === 'object') {
                    for (let keys in object) {
                        this.mas.get(String(id))[keys] = object[keys];
                    }
                }
                return this.mas.get(String(id));
            }
        }
        else {
            console.log("ID should be string");
        }
        console.log('Update failed');
    }

    replaceById(id, object) {
        if (typeof id === 'string') {
            if (this.mas.has(String(id))) {
                this.mas.set(String(id), object);
                console.log("Replace successfully")
            } else {
                console.log("Replace failed")
            }
        }
        else {
            console.log("ID should be string");
        }
    }
}

const miniCRUD = new MiniCRUD();

miniCRUD.add({key: '1', surname :'Bugaev'});
miniCRUD.add({key: '2', surname: 'Ivanov'});
miniCRUD.add({key: '3', surname: 'Sidorov'});
miniCRUD.add({key: '4', surname: 'Petrov'});

console.log("Получение всех элементов:");
let users = miniCRUD.getAll();
console.log(users);

console.log("Получение элемента по ID:");
let user1 = miniCRUD.getById("0")
console.log(user1)
let user2 = miniCRUD.getById("1")
console.log(user2)
let user3 = miniCRUD.getById("2")
console.log(user3)
let user4 = miniCRUD.getById("3")
console.log(user4)

let user5 = miniCRUD.getById(3)

console.log("Delete:")
miniCRUD.deleteById("1")
miniCRUD.deleteById(2)
console.log(users);

console.log("Update:")
miniCRUD.updateById("2", {surname: 'Kravchenko'})
console.log(miniCRUD.getById("2"))

console.log("Replace:")
miniCRUD.replaceById("3", {key2: 'new', surname2 :"Kirilov"})
console.log(miniCRUD.getById("3"))