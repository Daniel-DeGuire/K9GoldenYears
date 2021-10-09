import * as views from "./views/index";

export default (st) => `
  ${views[st.page](st)};
  `;
