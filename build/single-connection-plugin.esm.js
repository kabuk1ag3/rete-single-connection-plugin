/*!
* rete-single-connection-plugin v1.0.0 
* (c) 2021 kabuk1ag3 
* Released under the MIT license.
*/
function install(editor, _ref) {
  var _ref$socketNames = _ref.socketNames,
      socketNames = _ref$socketNames === void 0 ? [] : _ref$socketNames;
  editor.on('connectioncreate', function (c) {
    if (socketNames.includes(c.output.socket.name) === false) {
      return;
    }

    if (c.output.connections.length > 0) {
      // console.log(c.output.connections.length); // 2なのになぜか1になる
      editor.removeConnection(c.output.connections[0]);
    }
  });
}

var index = {
  name: 'single-connection',
  install: install
};

export default index;
//# sourceMappingURL=single-connection-plugin.esm.js.map
