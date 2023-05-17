export function cookingStatus(time){
    if (time == 0)
      return 'Lasagna is done.';
    else if (!time)
      return 'You forgot to set the timer.';
    else
      return 'Not done, please wait.';
}

export function preparationTime(layers, timePerLayer){
    return timePerLayer ? (layers.length * timePerLayer) : (layers.length * 2);
}

export function quantities(ingredients){
    let result = {
      noodles: 0,
      sauce: 0,
    };
    for (const ingredient of ingredients)
    {
      if (ingredient == "noodles")
        result.noodles += 50;
      if (ingredient == "sauce")
        result.sauce += 0.2;
    }
    
    return result;
  
}

export function addSecretIngredient(friendList, myList){
    let lastIngredient = friendList.length - 1;
    myList.push(friendList[lastIngredient]);
}

export function scaleRecipe(recipe, portions){
    const copyRecipe = {};
    for (let item in recipe)
      copyRecipe[item] = recipe[item] * (portions / 2);
    return copyRecipe;
}