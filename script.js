let users =[
    {firstname:"ansh",lastname:"kanojia",age:20},
    {firstname:"joseph",lastname:"mishra",age:25},
    {firstname:"john",lastname:"jhons",age:14},
    {firstname:"selena",lastname:"sharma",age:60},
]
//users firstname with age less than 30 
let output = users.filter((user)=>user.age<30).map((user)=>user.firstname)
console.log(output);