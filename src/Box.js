Visual.Box = function(scene, opts) {
  opts = opts || {};
  Visual.Primitive.call(this, scene, opts);

  this._length = opts.length || 1;
  this._height = opts.height || 1;
  this._width  = opts.width  || 1;

  this.mesh = this._buildMesh();
};

Visual.Box.prototype = new Visual.Primitive();
Visual.Box.prototype.constructor = Visual.Box;

Visual.Box.prototype._buildMesh = function() {
  var geometry = new THREE.CubeGeometry(this._length, this._height, this._width, 1, 1, 1);
  var material = new THREE.MeshLambertMaterial({ color: this.color });
  var mesh = new THREE.Mesh(geometry, material);
  return mesh;
};

Object.defineProperties(Visual.Box.prototype, {
  length: {
    get: function() {
      return this._length;
    },
    set: function(v) {
      this._length = v;
      this._updateMesh();
    }
  }, 
  height: {
    get: function() {
      return this._height;
    },
    set: function(v) {
      this._height = v;
      this._updateMesh();
    }
  },
  width: {
    get: function() {
      return this._width;
    },
    set: function(v) {
      this._width = v;
      this._updateMesh();
    }
  }
});

Visual.Scene.registerObject('box', Visual.Box);
