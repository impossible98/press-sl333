// 自带 Press / to Search
// google.com
// youtube.com
if (location.host.includes("www.bilibili.com")) {
  handleKeydown('.nav-search-input')
} else if (location.host.includes("search.bilibili.com")) {
  handleKeydown('.search-input-el')
} else if (location.host.includes("greasyfork.org")) {
  handleKeydown('[type="search"]')
}

function handleKeydown(query: string) {
  let form: HTMLInputElement | null = document.querySelector(query) as HTMLInputElement;
  document.documentElement.addEventListener("keydown", (event) => {
    if (event.key !== "/") {
      return undefined;
    }
    if (!form) {
      form = document.querySelector(query) as HTMLInputElement;
      if (!form) {
        console.error(`无法找到查询选择器: ${query}`);
        return undefined;
      }
    }
    form.focus();
    event.preventDefault();
    const tempv: string = form.value;
    form.value = "";
    form.value = tempv;
  });
}
