function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let j = i;
      let shooter = function() { // shooter 函数
        console.log( j ); // 应该显示当前的编号
      };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  for (soldier of army) {
    soldier(); 
  }