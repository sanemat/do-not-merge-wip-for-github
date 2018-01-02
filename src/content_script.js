const changeMergeButtonState = () => {
  browser.runtime.sendMessage('settings').then(response => {
    if (!response) {
      return;
    }
    const { protectedBranch, buttonMessage } = response.settings;
    console.log(protectedBranch); // eslint-disable-line no-console
    console.log(buttonMessage); // eslint-disable-line no-console
  });
};

changeMergeButtonState();
