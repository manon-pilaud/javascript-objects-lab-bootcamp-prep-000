var recipes = {key:'value'};

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
 recipes[key] = value
 return recipes
}

function deleteFromObjectByKey(recipes, key) {
  var new_recipe = ({}, obj)
  delete new_recipe.key;
  return recipes
}
function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key];
  return recipes
}