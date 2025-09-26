// Stack(Primitive), Heap(Non-primitive)

let name = "brinto" //stored in stack
name = "john" //new memory address in stack, but previous 
console.log(name);

let user1 = {name:"brinto",id: 22323} //stored in heap, address stored in stack
let user2 = user1 //copying address, both pointing to same address in heap

