/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.protobuf.GameTile', null, global);
goog.exportSymbol('proto.protobuf.GameTile.Content', null, global);
goog.exportSymbol('proto.protobuf.GameTile.Content.GrowthStage', null, global);
goog.exportSymbol('proto.protobuf.GameTile.Content.Type', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protobuf.GameTile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protobuf.GameTile.repeatedFields_, null);
};
goog.inherits(proto.protobuf.GameTile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protobuf.GameTile.displayName = 'proto.protobuf.GameTile';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protobuf.GameTile.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protobuf.GameTile.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf.GameTile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf.GameTile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.GameTile.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0),
    owner: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastChangedTimestamp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    contentList: jspb.Message.toObjectList(msg.getContentList(),
    proto.protobuf.GameTile.Content.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protobuf.GameTile}
 */
proto.protobuf.GameTile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf.GameTile;
  return proto.protobuf.GameTile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf.GameTile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf.GameTile}
 */
proto.protobuf.GameTile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastChangedTimestamp(value);
      break;
    case 9:
      var value = new proto.protobuf.GameTile.Content;
      reader.readMessage(value,proto.protobuf.GameTile.Content.deserializeBinaryFromReader);
      msg.addContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protobuf.GameTile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf.GameTile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf.GameTile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.GameTile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastChangedTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getContentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.protobuf.GameTile.Content.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protobuf.GameTile.Content = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf.GameTile.Content, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protobuf.GameTile.Content.displayName = 'proto.protobuf.GameTile.Content';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protobuf.GameTile.Content.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf.GameTile.Content.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf.GameTile.Content} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.GameTile.Content.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ethId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    growthStage: jspb.Message.getFieldWithDefault(msg, 3, 0),
    topperId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protobuf.GameTile.Content}
 */
proto.protobuf.GameTile.Content.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf.GameTile.Content;
  return proto.protobuf.GameTile.Content.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf.GameTile.Content} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf.GameTile.Content}
 */
proto.protobuf.GameTile.Content.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.protobuf.GameTile.Content.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEthId(value);
      break;
    case 3:
      var value = /** @type {!proto.protobuf.GameTile.Content.GrowthStage} */ (reader.readEnum());
      msg.setGrowthStage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTopperId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protobuf.GameTile.Content.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf.GameTile.Content.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf.GameTile.Content} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.GameTile.Content.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEthId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getGrowthStage();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTopperId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.protobuf.GameTile.Content.Type = {
  WATERED: 0,
  TILLED: 1,
  PLANTED: 2,
  TOPPER: 3
};

/**
 * @enum {number}
 */
proto.protobuf.GameTile.Content.GrowthStage = {
  SEEDLING: 0,
  SPROUT: 1,
  SAPLING: 2,
  ADULT: 3
};

/**
 * optional Type type = 1;
 * @return {!proto.protobuf.GameTile.Content.Type}
 */
proto.protobuf.GameTile.Content.prototype.getType = function() {
  return /** @type {!proto.protobuf.GameTile.Content.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.protobuf.GameTile.Content.Type} value */
proto.protobuf.GameTile.Content.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 eth_id = 2;
 * @return {number}
 */
proto.protobuf.GameTile.Content.prototype.getEthId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protobuf.GameTile.Content.prototype.setEthId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional GrowthStage growth_stage = 3;
 * @return {!proto.protobuf.GameTile.Content.GrowthStage}
 */
proto.protobuf.GameTile.Content.prototype.getGrowthStage = function() {
  return /** @type {!proto.protobuf.GameTile.Content.GrowthStage} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.protobuf.GameTile.Content.GrowthStage} value */
proto.protobuf.GameTile.Content.prototype.setGrowthStage = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 topper_id = 4;
 * @return {number}
 */
proto.protobuf.GameTile.Content.prototype.getTopperId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.protobuf.GameTile.Content.prototype.setTopperId = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 timestamp = 5;
 * @return {number}
 */
proto.protobuf.GameTile.Content.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.protobuf.GameTile.Content.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.protobuf.GameTile.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.protobuf.GameTile.prototype.setX = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.protobuf.GameTile.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protobuf.GameTile.prototype.setY = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string owner = 3;
 * @return {string}
 */
proto.protobuf.GameTile.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.protobuf.GameTile.prototype.setOwner = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 last_changed_timestamp = 4;
 * @return {number}
 */
proto.protobuf.GameTile.prototype.getLastChangedTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.protobuf.GameTile.prototype.setLastChangedTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated Content content = 9;
 * @return {!Array<!proto.protobuf.GameTile.Content>}
 */
proto.protobuf.GameTile.prototype.getContentList = function() {
  return /** @type{!Array<!proto.protobuf.GameTile.Content>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protobuf.GameTile.Content, 9));
};


/** @param {!Array<!proto.protobuf.GameTile.Content>} value */
proto.protobuf.GameTile.prototype.setContentList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.protobuf.GameTile.Content=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protobuf.GameTile.Content}
 */
proto.protobuf.GameTile.prototype.addContent = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.protobuf.GameTile.Content, opt_index);
};


proto.protobuf.GameTile.prototype.clearContentList = function() {
  this.setContentList([]);
};


goog.object.extend(exports, proto.protobuf);
