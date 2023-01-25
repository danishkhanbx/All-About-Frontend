// this Keyword
let laptop1 = 
{
    cpu: 'i9',
    ram: 16,
    brand: 'HP',

    getConfig: function(){
        let storage = 100;
        console.log(laptop1.cpu);
        console.log(this.cpu);   // this represents the current object
    },

    compare: function(other){
        if(this.cpu > other.cpu)
            console.log(this);
        else
            console.log(other);
    } 
}
laptop1.getConfig();

let laptop2 = 
{
    cpu: 'i7',
    ram: 16,
    brand: 'Apple',

    getConfig: function(){
        console.log(this.cpu);  
    }
}
laptop1.compare(laptop2)
