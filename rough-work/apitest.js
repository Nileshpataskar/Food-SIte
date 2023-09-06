try {
    const response = await fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&q=chocolate&app_id=62bce0a0&app_key=ff388c0331eb479573c52e7112fa70bc"
    );

    if(!response.ok){
      throw new Error("Network Response was not ok")
    }
    const data = response.json();
console.log("data",data)

    const hits=data.hits
    console.log(hits);
    return hits;
  } catch (err) {
    console.log(err, "Error fetching");
    return err;
  }