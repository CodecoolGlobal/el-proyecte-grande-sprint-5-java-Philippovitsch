

export default function CalendarWeatherDetail( {chosenDate} ) {
    console.log(chosenDate)
    return (
        <div>
            {chosenDate != undefined ? chosenDate.$y : ''}
        </div>
  )
}
