function pwd (cmd) {
  if(cmd === 'pwd'){
  // return `Report directory is ${process.report.directory}`;
  process.stdout.write(`Report directory is ${process.cwd()}`);
  process.stdout.write('\nprompt > ');
  };
}

module.exports=pwd

