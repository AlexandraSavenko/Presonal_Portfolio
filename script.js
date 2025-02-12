const wisdomBtn = document.getElementById("wisdom-btn")
const wisdomQuote = document.getElementById("wisdom-quote")
const wisdomAuthor = document.getElementById("wisdom-author")

wisdomBtn.addEventListener("click", ()=> {getRandomWisdom()})

const getRandomWisdom = async () => {
  try {
    const res = await fetch('https://dummyjson.com/quotes/random')
if(!res.ok) throw new Error ("HTTP error!")

  const data = await res.json()
  showWisdom(data.quote, data.author)
console.log(data.author)
  } catch (error) {
    console.log(error)
  }
}

const showWisdom = (quote, author) => {
  wisdomQuote.textContent = quote;
  wisdomAuthor.textContent = author;
}