import shell from "shelljs";
import notifier from "node-notifier";
import schedule from "node-schedule";
import clipboard from "clipboardy";
import config from "./config.js";
let { rule, folders } = config;
folders.forEach((folderUrl) => {
  gitPush(folderUrl);
});
schedule.scheduleJob(rule, () => {
  folders.forEach((folderUrl) => {
    gitPush(folderUrl);
  });
})
function gitPush(folderUrl) {
  shell.cd(folderUrl);
  let isPullSuccess = shell.exec("git pull");
  if (isPullSuccess.code !== 0) {
    failNotify("仓库拉取失败", isPullSuccess.stderr, folderUrl);
    return false;
  }
  let isAddSuccess = shell.exec("git add .");
  if (isAddSuccess.code !== 0) {
    failNotify("代码暂存失败", isAddSuccess.stderr, folderUrl);
    return false;
  }
  shell.exec(`git commit -m 'auto push |  ${new Date().toLocaleString()}'`);
  isPullSuccess = shell.exec("git push");
  if (isPullSuccess.code !== 0) {
    failNotify("仓库推送失败", isPullSuccess.stderr, folderUrl);
    return false;
  }
}
function failNotify(title, failMessage, folderUrl) {
  notifier.notify(
    {
      title: title,
      message: `${failMessage}
    点击复制报错信息`,
      wait: true,
    },
    (err, response, metadata) => {
      if (metadata.action === "clicked") {
        // shell.exec(`start ${folderUrl}`);
        // shell.exec(`echo ${failMessage} | clip`);
        clipboard.writeSync(failMessage);
      }
    }
  );
}
