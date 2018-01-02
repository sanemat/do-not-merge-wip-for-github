const changeMergeButtonState = () => {
  browser.runtime.sendMessage('settings').then(response => {
    if (!response) {
      return;
    }
    const settings = response.settings;
    console.log(settings); // eslint-disable-line no-console
  });
};

changeMergeButtonState();
