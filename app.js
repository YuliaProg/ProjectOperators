// function operator (position, name, department, price, fullname, speed, armor, image) {
//     return {
//         position, name, department, price, fullname, speed, armor, image   
//     }
// }
// ИЛИ:
// const operator = (position, name, department, price, fullname, speed, armor, image) => ({position, name, department, price, fullname, speed, armor, image})
// (получаемые параметры) => ({возвращаемые параметры})


/* const operators = [
    operator ('Attacker', 'Ash', 'FBI SWAT', '1,000', "Eliza Cohen", 3, 1, 'images/attack/ash.jpg'),
    operator ('Attacker', 'Fuze', 'Spetsnaz', '1,000', 'Shuhrat Kessikbayev', 1, 3, 'images/attack/fuze.jpg' ),
    operator ('Attacker', 'Glaz', 'Spetsnaz', '1,000', 'Timur Glazkov', 2, 2, 'images/attack/glaz.jpg'),
    operator ('Attacker', 'Hibana', 'SAT', '10,000', 'Yumiko Imagawa', 3, 1, 'images/attack/hibana.png'),
    operator ('Attacker', "IQ", 'GSG 9', '1,000', 'Monika Weiss', 3, 1, 'images/attack/iq.jpg'),
    operator ('Attacker', 'Thatcher', 'SAS', '1,000', 'Mike Baker', 2, 2, 'images/attack/thatcher.jpg'),
    operator ('Defender', 'Alibi', 'GIS', '20,000', 'Aria de Luca', 3, 1, 'images/defend/alibi.jpg'),
    operator ('Defender', 'Doc', 'GIGN', '1,000', 'Gustave Kateb', 1, 3, 'images/defend/doc.jpg'),
    operator ('Defender', 'Kaid', 'GIGR', '20,000', 'Jalal El Fassi', 1, 3, 'images/defend/kaid.jpg'),
    operator ('Defender', 'Kapkan', 'Spetsnaz', '1,000', 'Maxim Basuda', 2, 2, 'images/defend/kapkan.jpg'),
    operator ('Defender', 'Maestro', 'GIS', '20,000', 'Adriano Martello', 1, 3, 'images/defend/maestro.jpg'),
    operator ('Defender', 'Tachancka', 'Spetsnaz', '1,000', 'Alexsandr Senaviev', 1, 3, 'images/defend/tachanka.jpg'),
] */
// {position: 'Attacker', name: 'Ash', department: 'FBI SWAT', price: 1000, fullname: "Eliza Cohen", speed: 3, armor: 1, image: 'images/attack/ash.jpg'}
// можно заменить operator в const

let app = new Vue({
    el:'#app',
    // el - элемент, '' - строка, # - селектор к id
    data() {
        return {
            operators: [],
            currentOperator: 0,
            selectedOperatorIndex: 0,
            statsVisibility: false,
            search: '',
            modalVisibility: false,
            boughtOperator: []
        }
    },
    mounted() {
        this.setOperators();
        this.currentOperator = this.operators[0];
        console.log(this.operators);
        console.log(this.currentOperator);
    },
    //operators - массив
    //selectedOperatorIndex - по умолчанию выбирается этот оперативник
    //statsVisibility - переменная, чтобы 'showStats' == false -> не показывалось по умолчанию
    methods: {
        selectOperator(operator, index) {
            this.currentOperator = operator
            this.selectedOperatorIndex = index
        },
        newOperator(position, name, department, price, fullname, speed, armor, image) {
            return {
                position, name, department, price, fullname, speed, armor, image
            }
        },
        setOperators(){
            const operators = [
                this.newOperator ('Attacker', 'Ash', 'FBI SWAT', '1,000', "Eliza Cohen", 3, 1, 'images/attack/ash.jpg'),
                this.newOperator ('Attacker', 'Fuze', 'Spetsnaz', '1,000', 'Shuhrat Kessikbayev', 1, 3, 'images/attack/fuze.jpg' ),
                this.newOperator ('Attacker', 'Glaz', 'Spetsnaz', '1,000', 'Timur Glazkov', 2, 2, 'images/attack/glaz.jpg'),
                this.newOperator ('Attacker', 'Hibana', 'SAT', '10,000', 'Yumiko Imagawa', 3, 1, 'images/attack/hibana.png'),
                this.newOperator ('Attacker', "IQ", 'GSG 9', '1,000', 'Monika Weiss', 3, 1, 'images/attack/iq.jpg'),
                this.newOperator ('Attacker', 'Thatcher', 'SAS', '1,000', 'Mike Baker', 2, 2, 'images/attack/thatcher.jpg'),
                this.newOperator ('Defender', 'Alibi', 'GIS', '20,000', 'Aria de Luca', 3, 1, 'images/defend/alibi.jpg'),
                this.newOperator ('Defender', 'Doc', 'GIGN', '1,000', 'Gustave Kateb', 1, 3, 'images/defend/doc.jpg'),
                this.newOperator ('Defender', 'Kaid', 'GIGR', '20,000', 'Jalal El Fassi', 1, 3, 'images/defend/kaid.jpg'),
                this.newOperator ('Defender', 'Kapkan', 'Spetsnaz', '1,000', 'Maxim Basuda', 2, 2, 'images/defend/kapkan.jpg'),
                this.newOperator ('Defender', 'Maestro', 'GIS', '20,000', 'Adriano Martello', 1, 3, 'images/defend/maestro.jpg'),
                this.newOperator ('Defender', 'Tachancka', 'Spetsnaz', '1,000', 'Alexsandr Senaviev', 1, 3, 'images/defend/tachanka.jpg'),
            ]
            this.operators = operators;
        },
        buyOperator() {
            let isAlreadyBought = this.boughtOperator.some ((operator) => {
                if (operator.name === this.currentOperator.name) {
                    return true
                } else {
                    return false
                }
            });
            if (!isAlreadyBought) {
                this.boughtOperator.push(this.currentOperator);
            }
            this.modalVisibility = !this.modalVisibility;
        }
    },
    computed: {
        statsBtnText () {
            return this.statsVisibility ? 'Hide stats' : 'Show stats'
        },
        filterOperators () {
            return this.operators.filter(operator => {
                return operator.name.toLowerCase().indexOf(this.search.toLowerCase ()) > -1 || operator.position.toLowerCase().indexOf(this.search.toLowerCase ()) > -1
        })
    }
}
})

//this.переменная = значение из массива [по индексу]
//индекс - номер в массиве.
//this.selectedOperatorIndex - изменение индекса, чтобы каждый новый оперативник подсвечивался синим
//toLowerCase () - буквы любого регистра (перевод в нижний регистр)