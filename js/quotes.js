const quotes = [
    {
        quote: "They way te get started is te quit talking and begin",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other person",
        author: "John Lennon",
    },
    {
        quote: "삶이 있는 한 희망은 있다",
        author: "키케로",
    },
    {
        quote: "산다는 것 그것은 치열한 전투이다",
        author: "로망로랑",
    },
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다",
        author: "사무엘 존슨",
    },
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다",
        author: "파울로 코엘료",
    },
    {
        quote: "진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐길 줄 알아야 해",
        author: "찰리 채플린",
    },
    {
        quote: "신은 용기 있는 자를 결코 버리지 않는다",
        author: "켄러",
    },
    {
        quote: "피할 수 없으면 즐겨라",
        author: "로버트 앨리엇",
    },
    {
        quote: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        author: "이드리스 샤흐",
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author