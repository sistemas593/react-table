export const fetchUserList = async ({ sortBy }) => {
    // fake sortBy
    return new Promise((resolve) => {
      console.log(sortBy); 
   
      setTimeout(() => {
        resolve([
          {
            fullName: "Hai Huynh",
            age: 24,
            status: "Active"
          },
          {
            fullName: "Bill Gates",
            age: 66,
            status: "Inactive" 
          }
        ]);
      }, 1000);
    });
  };
   