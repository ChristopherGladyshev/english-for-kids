const URL = "https://raw.githubusercontent.com/web-mrAlderson/data-for-mocks/master/mocks-english-for-kids/data.json"

export const cards = fetch(URL, {
  method: 'GET',
  mode: "cors",
}).then((response) => {
  return response.json()
});