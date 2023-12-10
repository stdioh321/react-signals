import { getCounter } from '../states/counter'
import { CounterComponent } from '../App'

export default function Home() {
  return (
    <div>
      <h2>Home: {getCounter()}</h2>
      <div>
        <CounterComponent />
      </div>
    </div>
  )
}
