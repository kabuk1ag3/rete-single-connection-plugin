# Rete single connection plugin

Rete.js plugin<br><br>
This plugin prevent multiple socket connections.<br><br>
このプラグインはソケットの複数接続を防ぎます。

```js
import SingleConnectionPlugin from 'rete-single-connection-plugin';

editor.use(SingleConnectionPlugin, {
    socketNames: ['Number socket']
  });
```