
// let Student = class {
//     constructor(name, email, age, score) {
//      this.name = name;
//      this.email = email;
//      this.age = age;
//      this.score = score;
//     }
//    };

//    let student1 = new Student('Baarak', 'baarak@gmail.com', '26', '90');
//    let student2 = new Student('Mikhael', 'mikhael@gmail.com', '23', '95');
//    let student3 = new Student('Gaara', 'gaara@gmail.com', '26', '93');
//    let student4 = new Student('rizky', 'rizky@gmail.com', '30', '100');

// function hasil(){

// //Age
// let arrAge = [student1.age,student2.age,student3.age,student4.age]
// let maxAge = Math.max(...arrAge)
// let minAge = Math.min(...arrAge)
// let sumAge = arrAge.reduce((a , b) => parseInt(a) + parseInt(b))
// let avgAge = sumAge / arrAge.length


// //Score
// let arrScore = [student1.score,student2.score,student3.score,student4.score]
// let maxScore = Math.max(...arrScore)
// let minScore = Math.min(...arrScore)
// let avgScore = arrScore.reduce((a , b) => parseInt(a) + parseInt(b)) / arrScore.length;


// let HLA = class {
//     constructor(highest, lowest, average) {
//      this.highest = highest;
//      this.lowest = lowest;
//      this.average = average;
//     }
//    };

// let dataAge = new HLA(maxAge,minAge,avgAge)
// let dataScore = new HLA(maxScore,minScore,avgScore)
// return {
//     Score   : {...dataScore},
//     Age     : {...dataAge},
// }
// }
// console.log(hasil());







let data = [
    { nama: "A", email: "a@example.com", umur: 25, score: 80 },
    { nama: "B", email: "b@example.com", umur: 30, score: 90 },
    { nama: "C", email: "c@example.com", umur: 27, score: 75 },
    { nama: "D", email: "d@example.com", umur: 35, score: 85 },
    { nama: "E", email: "e@example.com", umur: 28, score: 95 },
    
  ];
  
  let umurMax = -infinity
  let scoreMax = -infity
  let umurMin = Infinity
  let scoreMin = Infinity

  let rataUmur = []
  let rataScore = []
  
  
  for (let i = 0; i < data.length; i++) {
      let umur = data[i].umur;
      let score = data[i].score;
      rataUmur.push(umur)
      rataScore.push(score)
      
      if (umur > umurMax) {
        umurMax = umur;
    }
    if (score > scoreMax) {
      scoreMax = score;
    }
    if(umur < umurMin){
        umurMin = umur
    }
    if(score < scoreMin){
        scoreMin = score
    }
}

let result = {
    
    Umur : {
        tertinggi : umurMax,
        terendah : umurMin,
        Avarage : rataUmur.reduce((a,b)=> a+b) / data.length //     
        
    },
    Score : {
        tertinggi : scoreMax,
        terendah : scoreMin,
        Avarage : rataScore.reduce((a,b) => a + b) / data.length
    }
  }
  
console.log(result)



