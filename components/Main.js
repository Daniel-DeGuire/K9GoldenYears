import * as views from "./views";

export default () => `
${views["Home"]()}
${views["About"]()}
${views["Contact"]()}
`;
