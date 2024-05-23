const siteList = [
  { id: 0, name: "bilibili", query: ".nav-search-input" },
];

// 筛选出适用于当前页面的siteList子集
const applicableSites = siteList.filter(item => location.host.includes(item.name));

applicableSites.forEach((item) => {
  // 为了避免重复查询DOM，先查询并存储结果
  let form: HTMLInputElement | null = document.querySelector(item.query) as HTMLInputElement;

  document.documentElement.addEventListener("keydown", (event) => {
    if (event.key !== "/") {
      return undefined;
    }

    if (!form) {
      // 如果在初始化时form为null，那么在按键事件中再次尝试获取
      form = document.querySelector(item.query) as HTMLInputElement;
      if (!form) {
        console.error(`无法找到查询选择器: ${item.query}`);
        return undefined;
      }
    }

    form.focus();
    event.preventDefault();

    // 对于form.value的逻辑，如果目的是触发更新，考虑是否有必要
    // 在这里，我们保持原逻辑不变，但添加了注释提醒可能的审查
    const tempv: string = form.value;
    form.value = "";
    form.value = tempv;
  });
});
