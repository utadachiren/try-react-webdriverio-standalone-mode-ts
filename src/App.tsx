import React from 'react';
import { remote } from 'webdriverio';

const handleClick = async () => {
  const browser = await remote({
    logLevel: 'trace',
    capabilities: {
      browserName: 'chrome'
    }
  })
  await browser.url('https://webdriver.io')
  const title = await browser.getTitle()
  alert(title)
}

function App() {
  return (
    <div>
      <button onClick={handleClick}>webdriverio起動</button>
    </div>
  );
}

export default App;
