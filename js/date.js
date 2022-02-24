const yearMonthDay = document.querySelector("h2#date")

function getDate(){
    const now = new Date()
    const year = String(now.getFullYear())
    const yearCut = year.substring(2, 4)
    const month = now.getMonth()
    const day = now.getDate()
    const dayNum = now.getDay()
    const WEEK = ['일', '월', '화', '수', '목', '금', '토']
    const dayOfWeek = WEEK[dayNum]

    yearMonthDay.innerText = `${yearCut}년 ${month}월 ${day}일 ${dayOfWeek}요일`
}
getDate()