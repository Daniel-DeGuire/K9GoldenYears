import * as views from "./views/Index";

export default (st) => `
  ${views[st.page](st)};
  `;
