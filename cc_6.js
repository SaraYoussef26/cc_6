//Step 2
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

}
describe () 
    return `${this.name} works in ${this.department}`;
    


//Step 3
class Manager extends Employee {
    constructor(name, department, teamSize){
        super(name, department);
        this.teamSize = teamSize;
    }
    describe(){
        return `${this.name} manages ${this.teamSize} people in ${this.department}`;
    }  
}

//Step 4
const emp1 = new Employee ("Ashley Andrews", "HR");
const emp2 = new Employee ("Martin John", "Finance");
const mgr1 = new Manager ("John Smith", "Mrketing", "20");
const mgr2 = new Manager ("Cameron William", "IT", "12");

console.log(emp1.describe());
console.log(emp2.describe());
console.log(mgr1.describe());
console.log(mgr2.describe());



