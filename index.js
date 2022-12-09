// Write your solution in this file!
const employee={
    name:'sam',
   };

       function updateEmployeeWithKeyAndValue(employee, key, value){
      return {
          ...employee,
          [key]: value,
        };
      }
  
      updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');
  
  
      function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee[key]=value;
   return employee;
      
      }
      destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')
  
  
  
      function deleteFromEmployeeByKey(object, name)
  {
      const newObj = { ...object };
  delete newObj[name];
  return newObj;
  
  }
    function destructivelyDeleteFromEmployeeByKey(object, key){
      delete object[key];
      return object;
  }
  let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');