function gradingStudents(grades) {
    let aux = [];
     
     for (let i = 0; i<grades.length; i++){
         if(grades[i]>=38 && grades[i]%5>=3){
             if(grades[i]%5===3){
                 aux.push(grades[i]+2);
             }else{
                 aux.push(grades[i]+1);
             }
             
         }
         else if(grades[i]>=38 && grades[i]%5<3){
             aux.push(grades[i]);
         }else{
             aux.push(grades[i]);
         }
         
         
     }
     return aux;
 
 }