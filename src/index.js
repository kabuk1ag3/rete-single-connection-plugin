function install(editor, {
  socketNames = []
}) {
  editor.on('connectioncreate', (c) => {
    if (socketNames.includes(c.output.socket.name) === false) {
      return;
    }

    if (c.output.connections.length > 0) {
      // console.log(c.output.connections.length); // 2なのになぜか1になる
      editor.removeConnection(c.output.connections[0]);
    }
  });
}

export default {
  name: 'single-connection',
  install
}