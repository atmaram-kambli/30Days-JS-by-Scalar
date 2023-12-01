// Description:
// Write a function getData that returns a Promise. Use this function to fetch data from two different APIs sequentially, and return the combined result.
// Use any random API that you want


// async function fetchData(url) {
//     const response = await fetch(url);
    
//     if (!response.ok) {
//         throw new Error(`Network response was not ok: ${response.status}`);
//     }
    
//     return response.json();
// }

// async function getData() {
//     // Replace these URLs with the actual URLs of the APIs you want to use

//     try {
//         // Fetch data from the first API
//         const data1 = await fetchData(apiUrl1);

//         // Fetch data from the second API after the first one is done
//         const data2 = await fetchData(apiUrl2);

//         // Combine the results from both APIs
//         return { data1, data2 };
//     } catch (error) {
    //         // Handle errors here
    //         console.error('Error fetching data:', error);
    //     }
    // }
    
    // // Example usage
    // getData().then(combinedData => {
        //     console.log('Combined Data:', combinedData);
        // });
        
        
        function fetchData(url) {
            return fetch(url)
      .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
    });
  }
  
  function getData() {
          const apiUrl1 = "https://api.nationalize.io?name=Sun";
          const apiUrl2 = "https://api.agify.io?name=Moon";
  
    // Fetch data from the first API
    return fetchData(apiUrl1)
      .then(data1 => {
        // Fetch data from the second API after the first one is done
        return fetchData(apiUrl2)
          .then(data2 => {
            // Combine the results from both APIs
            return { data1, data2 };
          });
      })
      .catch(error => {
        // Handle errors here
        console.error('Error fetching data:', error);
      });
  }
  
  // Example usage
  getData().then(combinedData => {
    console.log('Combined Data:', combinedData);
  });
  