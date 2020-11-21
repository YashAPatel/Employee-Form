export class ChangingColorService{
    changeColor(salary : number){

        if(salary < 30000)
          return 'Brown';
        else if(salary >= 30000 && salary<80000)
          return 'Silver';
        else if(salary > 80000)
          return 'Gold';
        else
          return 'red';
      }
}