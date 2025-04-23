/*async function fetchGitHubUser() {
    try {
      let response = await fetch("https://api.github.com/users/octocat");
      let user = await response.json(); // Convert response to JSON
      console.log(user);
    } catch (error) {
      console.log("❌ Fetch error:", error);
    }
  }
  
  fetchGitHubUser();*/
 /* function fetchUserData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: "Alice" });
      }, 2000);
    });
  }
  
  // Async function to fetch and log user data
  async function getUser() {
    console.log("Fetching user data...");
  
    let user = await fetchUserData(); // Waits for the promise to resolve
    console.log("✅ User Fetched:", user);
  }
  
  // Call the function
  getUser();*/
 /* function fetchUserData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: "Alice" });
      }, 2000);
    });
  }
  function fetchPosts(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(["Post 1", "Post 2"])
        },1000)
    });
  }
  async function fetchUserAndPosts(){
    console.log("Fetching data...");
    let [user, posts] = await Promise.all([fetchUserData(), fetchPosts()]);
    console.log(user);
    console.log(posts)
    console.log("all data fetched")
  }
  fetchUserAndPosts();*/
  function fetchProductDetails() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = true; // 50% chance of success or failure
        if (success) {
          resolve({ product: "Laptop", price: "$999" });
        } else {
          reject("❌ Failed to fetch product details!");
        }
      }, 2000);
    });
  }async function getProduct() {
    try {
      console.log("Fetching product details...");
      let product = await fetchProductDetails(); // Waits for the API response
      console.log("✅ Success:", product);
    } catch (error) {
      console.log(error); // Handles the error
    }
  }
  
  // Call the function
  getProduct();

