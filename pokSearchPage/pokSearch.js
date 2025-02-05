const pokNameAdress = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon"
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button")
const pokName = document.getElementById("pokemon-name");
const pokId = document.getElementById("pokemon-id");
const pokWeight = document.getElementById("weight")
const pokHeight = document.getElementById("height")
const pokImgBox = document.getElementById("img-box")
const pokType = document.getElementById("types")
const pokHP = document.getElementById("hp")
const pokAttack = document.getElementById("attack")
const pokDefense = document.getElementById("defense")
const pokSpAttack = document.getElementById("special-attack")
const pokSpDefense = document.getElementById("special-defense")
const pokSpeed = document.getElementById("speed")
let inputValue = "";

searchBtn.addEventListener("click", ()=>{
  inputValue = input.value.trim().toLowerCase()
  const isGirl = inputValue.includes("♀")
  const isBoy = inputValue.includes("♂")
  if(isGirl){
    inputValue = inputValue.replace("♀", "-f")
  }else if(isBoy){
    inputValue = inputValue.replace("♂", "-b")
  }
  clearResults()
  fetchAllPok()
input.value = ""
})//end of inputValue

const fetchAllPok = async () => {
   try{
    const res = await fetch(pokNameAdress)
const data = await res.json()
const dataResults = data.results
checkPok(inputValue, dataResults)
  }catch(err){console.log(err)}
}//end of fetchAllPok
const checkPok = async (name, dataResults) => {
  if(Number(name)){
    fetchMyPok(Number(name))
    return
  }
const pokData = dataResults.find(el => el.name === name? el.id : null)
if(pokData){
  fetchMyPok(pokData.id)
}else{
  alert("Pokémon not found")
}
}//end of checkPok


const fetchMyPok = async pokId => {
const myPokAdress = `${pokNameAdress}/${pokId}`
try{
  const res = await fetch(myPokAdress)
  const data = await res.json()
  showMyPok(data.name, data.id, data.height, data.weight, data.sprites, data.stats, data.types)
  //const myPok = data.results
}catch(err){
  console.log(err)
}
}//end of fetchMyPok

const showMyPok = (name, id, height, weight,sprites, stats, types) => {
  pokName.textContent = name.toUpperCase();
  pokId.textContent = id
  pokHeight.textContent = height;
  pokWeight.textContent = weight;
  createImg(sprites, name)
  createType(types)
  for(const el of stats){
    if(el.stat.name === "hp"){
      pokHP.textContent = el.base_stat
    }else if(el.stat.name === "attack"){
      pokAttack.textContent = el.base_stat
    }else if(el.stat.name === "defense"){
      pokDefense.textContent = el.base_stat
    }else if(el.stat.name === "special-attack"){
      pokSpAttack.textContent = el.base_stat
    }else if(el.stat.name === "special-defense"){
      pokSpDefense.textContent = el.base_stat
    }else if(el.stat.name === "speed"){
      pokSpeed.textContent = el.base_stat
    }
  }
}//end of showMyPok

const createImg = (sprites, name) => {
const pokImg = document.createElement("img")
  pokImg.src = sprites.front_default
  pokImg.alt = name
  pokImg.id = "sprite"
  pokImgBox.appendChild(pokImg)
}//end of createImg

const createType = types => {
  // const pokTypeEl = document.createElement("span")
  // pokTypeEl.id = "type-span"
  // for (const el of types){
  //   pokTypeEl.textContent = el.type.name.toUpperCase()
  // }
  pokType.innerHTML = types.map(el => 
    `<span id="type-span">${el.type.name.toUpperCase()}</span>`
  ).join(" ")
}//end of createType
const clearResults = () => {
const pokImg = document.getElementById("sprite")
if(pokImg){
  pokImg.remove()
}
const pokTypeEl = document.getElementById("type-span")
if(pokTypeEl){
  pokTypeEl.remove()
}
}//end of clearResults
