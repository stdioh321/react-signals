import { getCounter } from '../states/counter'
import { CounterComponent } from '../App'

export default function About() {
  return (
    <div>
      <h2>About: {getCounter()}</h2>
      <div>
        <CounterComponent />
      </div>
    </div>
  )
}
