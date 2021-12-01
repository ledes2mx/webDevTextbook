export const Action = Object.freeze({
    DownloadName: 'DownloadName',
});

export function downloadName() {
    return dispatch => {
      fetch(url)
        .then(assertResponse())
        .then(response => response.json())
        .then(data => {
          dispatch(addName(data.name));
        });
    };
  }