# async-ipc

> not implemented, just some thoughts...

## features

- [ ] wrap event based ipc into async calls
- [ ] communication timeout
- [ ] automatically error passing
- [ ] preset for electron main & renderer process
- [ ] preset for node parent process & child process
- [ ] type strong & type safe
- [ ] testable

## examples

```javascript
const asyncIpc = require('async-ipc');

// process 1
const ipc = eventIpc.create({
  timeout: 30000,
  type: 'electronRenderer',
  name: 'home'
});

ipc.on('type', (data) => {
  const result = doSomething(data)l
  return result;
});

async function doSomething() {
  const result = await ipc.send('type', {
    data: any,
    timeout: 30000,
    silent: false, // if silent, then no reply will just resolve the promise immediately
  });
  return result;
}

// electron main
const ipc = eventIpc.create({
  timeout: 30000,
  type: 'electronMain',
  name: 'main'
});
ipc.on('type', (data) => {
  // do something
  return result;
});

async function doSomethingElse() {
  const result = ipc.send('type', {
    target: 'home',
    data,
  });
}

//  main-process
//  child-process
```
