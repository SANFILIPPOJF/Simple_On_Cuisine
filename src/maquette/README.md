Dans App.tsx :

```js
import './customs/maquette/maquette.css';
import MAQUETTE from "./customs/maquette/structure.json"
import { InfoBox } from './customs/maquette/infobox';

function App() {
  return (
    <div className="App">
        <InfoBox data={MAQUETTE}/>
    </div>
  );
}
```