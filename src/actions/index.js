  export const IncreNum = () => {
    return {
        type: "INCREMENT"
    }
}

  export const DecreNum = ()  => {
    return {
        type: "DECREMENT"
    }
}


// async function getList() {
       
//   const res = await fetch ('https://hisocars.techinnsoft.com/api/Booking/get-hot-offer');
//   const data = await res.json();
//   SetgetData(data);

// };

// async function getList() {
    //   try {
    //     const response = await axios.get('https://hisocars.techinnsoft.com/api/Booking/get-hot-offer');
    //     console.log('Junaid Success', response);
    //   //  const gate = SetgetData(response.JSON())
    //   const data = await response.json();

    //   SetgetData(data);
    //   } catch (error) {
    //     console.log('Junaid error', error);
    //   }
    // }