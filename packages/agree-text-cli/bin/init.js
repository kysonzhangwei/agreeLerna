#! /usr/bin/env node

const program = require('commander');
const logUpdate = require('log-update');
const shell = require('shelljs');

program
  .version('1.2.8')
  .usage('app_name')
  .description('构建单个组件管理模板')
  .parse(process.argv);

 if (!program.args.length) {
   program.help();
 }
 if (program.args.length >= 1) {
  // shell.mkdir('-p', program.args[0]);
  // shell.cd(program.args[0]);  
   shell.exec('rm -rf .git');
   shell.exec('rm -rf '+program.args[0]);
   shell.exec('git init');
   let i = 0;
   const frames = ['-', '\\', '|', '/'];
   const interval = setInterval(() => {
    const frame = frames[i = ++i % frames.length];
    logUpdate(`👉 👉 ${frame} initializing ${frame} 👈 👈`);
   }, 50)
    const cloneurl = 'git pull  http://192.9.200.95:8084/mobile-cli/'+ program.args[0] +'.git '+program.args[1];
  //const cloneurl = 'git pull  http://192.9.200.95:8084/amap-cli/amap-keyboard-scroll-view.git  0.0.1';
  console.log('update adress----:'+cloneurl);
  shell.exec(cloneurl, (code) => {
     console.log("pull返回日志:"+JSON.stringify(code));
     clearInterval(interval);
     console.log('👏 👏 Completed! You are  good to go! 👏 👏');
  })
  
 }