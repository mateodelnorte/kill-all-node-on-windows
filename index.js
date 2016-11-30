const exec = require('child_process').exec;

exec('CMD.exe /C "TASKKILL /F /IM node.exe"')
