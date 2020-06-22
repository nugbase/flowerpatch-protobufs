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

var protobuf_flower_pb = require('../protobuf/flower_pb.js');
var protobuf_servicecommon_pb = require('../protobuf/servicecommon_pb.js');
var protobuf_rarityleaderboard_pb = require('../protobuf/rarityleaderboard_pb.js');
goog.exportSymbol('proto.protobuf.AccountStats', null, global);
goog.exportSymbol('proto.protobuf.FlowerQuery', null, global);
goog.exportSymbol('proto.protobuf.FlowerQuery.Filters', null, global);
goog.exportSymbol('proto.protobuf.FlowerQuery.LandAffinity', null, global);
goog.exportSymbol('proto.protobuf.FlowerQuery.Planted', null, global);
goog.exportSymbol('proto.protobuf.FlowerQuery.RarityTier', null, global);
goog.exportSymbol('proto.protobuf.FlowerQuery.SortBy', null, global);
goog.exportSymbol('proto.protobuf.FlowerQuery.SortOrder', null, global);
goog.exportSymbol('proto.protobuf.FlowerQuery.Sorting', null, global);

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
proto.protobuf.AccountStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf.AccountStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protobuf.AccountStats.displayName = 'proto.protobuf.AccountStats';
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
proto.protobuf.AccountStats.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf.AccountStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf.AccountStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.AccountStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    rarityBreakdown: (f = msg.getRarityBreakdown()) && protobuf_rarityleaderboard_pb.RarityLeaderboard.toObject(includeInstance, f),
    numBreeds: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.protobuf.AccountStats}
 */
proto.protobuf.AccountStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf.AccountStats;
  return proto.protobuf.AccountStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf.AccountStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf.AccountStats}
 */
proto.protobuf.AccountStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new protobuf_rarityleaderboard_pb.RarityLeaderboard;
      reader.readMessage(value,protobuf_rarityleaderboard_pb.RarityLeaderboard.deserializeBinaryFromReader);
      msg.setRarityBreakdown(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumBreeds(value);
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
proto.protobuf.AccountStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf.AccountStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf.AccountStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.AccountStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRarityBreakdown();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      protobuf_rarityleaderboard_pb.RarityLeaderboard.serializeBinaryToWriter
    );
  }
  f = message.getNumBreeds();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional RarityLeaderboard rarity_breakdown = 1;
 * @return {?proto.protobuf.RarityLeaderboard}
 */
proto.protobuf.AccountStats.prototype.getRarityBreakdown = function() {
  return /** @type{?proto.protobuf.RarityLeaderboard} */ (
    jspb.Message.getWrapperField(this, protobuf_rarityleaderboard_pb.RarityLeaderboard, 1));
};


/** @param {?proto.protobuf.RarityLeaderboard|undefined} value */
proto.protobuf.AccountStats.prototype.setRarityBreakdown = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.protobuf.AccountStats.prototype.clearRarityBreakdown = function() {
  this.setRarityBreakdown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protobuf.AccountStats.prototype.hasRarityBreakdown = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 num_breeds = 2;
 * @return {number}
 */
proto.protobuf.AccountStats.prototype.getNumBreeds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protobuf.AccountStats.prototype.setNumBreeds = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
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
proto.protobuf.FlowerQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf.FlowerQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protobuf.FlowerQuery.displayName = 'proto.protobuf.FlowerQuery';
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
proto.protobuf.FlowerQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf.FlowerQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf.FlowerQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.FlowerQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filters: (f = msg.getFilters()) && proto.protobuf.FlowerQuery.Filters.toObject(includeInstance, f),
    sorting: (f = msg.getSorting()) && proto.protobuf.FlowerQuery.Sorting.toObject(includeInstance, f)
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
 * @return {!proto.protobuf.FlowerQuery}
 */
proto.protobuf.FlowerQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf.FlowerQuery;
  return proto.protobuf.FlowerQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf.FlowerQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf.FlowerQuery}
 */
proto.protobuf.FlowerQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = new proto.protobuf.FlowerQuery.Filters;
      reader.readMessage(value,proto.protobuf.FlowerQuery.Filters.deserializeBinaryFromReader);
      msg.setFilters(value);
      break;
    case 3:
      var value = new proto.protobuf.FlowerQuery.Sorting;
      reader.readMessage(value,proto.protobuf.FlowerQuery.Sorting.deserializeBinaryFromReader);
      msg.setSorting(value);
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
proto.protobuf.FlowerQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf.FlowerQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf.FlowerQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.FlowerQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilters();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protobuf.FlowerQuery.Filters.serializeBinaryToWriter
    );
  }
  f = message.getSorting();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protobuf.FlowerQuery.Sorting.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.protobuf.FlowerQuery.RarityTier = {
  ANY_RARITY: 0,
  COMMON: 1,
  UNUSUAL: 2,
  RARE: 3,
  EPIC: 4,
  LEGENDARY: 5
};

/**
 * @enum {number}
 */
proto.protobuf.FlowerQuery.LandAffinity = {
  ANY_LAND: 0,
  SOIL: 1,
  STONE: 2,
  SAND: 3,
  LAVA: 4,
  WATER: 5,
  ICE: 6
};

/**
 * @enum {number}
 */
proto.protobuf.FlowerQuery.Planted = {
  ANY_PLANTED: 0,
  PLANTED: 1,
  NOT_PLANTED: 2
};

/**
 * @enum {number}
 */
proto.protobuf.FlowerQuery.SortBy = {
  AGE: 0,
  RARITY: 1,
  GROWTH_SPEED: 2,
  HARVEST_SIZE: 3
};

/**
 * @enum {number}
 */
proto.protobuf.FlowerQuery.SortOrder = {
  DESCENDING: 0,
  ASCENDING: 1
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
proto.protobuf.FlowerQuery.Filters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf.FlowerQuery.Filters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protobuf.FlowerQuery.Filters.displayName = 'proto.protobuf.FlowerQuery.Filters';
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
proto.protobuf.FlowerQuery.Filters.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf.FlowerQuery.Filters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf.FlowerQuery.Filters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.FlowerQuery.Filters.toObject = function(includeInstance, msg) {
  var f, obj = {
    rarityTier: jspb.Message.getFieldWithDefault(msg, 100, 0),
    landAffinity: jspb.Message.getFieldWithDefault(msg, 101, 0),
    planted: jspb.Message.getFieldWithDefault(msg, 102, 0)
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
 * @return {!proto.protobuf.FlowerQuery.Filters}
 */
proto.protobuf.FlowerQuery.Filters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf.FlowerQuery.Filters;
  return proto.protobuf.FlowerQuery.Filters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf.FlowerQuery.Filters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf.FlowerQuery.Filters}
 */
proto.protobuf.FlowerQuery.Filters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 100:
      var value = /** @type {!proto.protobuf.FlowerQuery.RarityTier} */ (reader.readEnum());
      msg.setRarityTier(value);
      break;
    case 101:
      var value = /** @type {!proto.protobuf.FlowerQuery.LandAffinity} */ (reader.readEnum());
      msg.setLandAffinity(value);
      break;
    case 102:
      var value = /** @type {!proto.protobuf.FlowerQuery.Planted} */ (reader.readEnum());
      msg.setPlanted(value);
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
proto.protobuf.FlowerQuery.Filters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf.FlowerQuery.Filters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf.FlowerQuery.Filters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.FlowerQuery.Filters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRarityTier();
  if (f !== 0.0) {
    writer.writeEnum(
      100,
      f
    );
  }
  f = message.getLandAffinity();
  if (f !== 0.0) {
    writer.writeEnum(
      101,
      f
    );
  }
  f = message.getPlanted();
  if (f !== 0.0) {
    writer.writeEnum(
      102,
      f
    );
  }
};


/**
 * optional RarityTier rarity_tier = 100;
 * @return {!proto.protobuf.FlowerQuery.RarityTier}
 */
proto.protobuf.FlowerQuery.Filters.prototype.getRarityTier = function() {
  return /** @type {!proto.protobuf.FlowerQuery.RarityTier} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/** @param {!proto.protobuf.FlowerQuery.RarityTier} value */
proto.protobuf.FlowerQuery.Filters.prototype.setRarityTier = function(value) {
  jspb.Message.setProto3EnumField(this, 100, value);
};


/**
 * optional LandAffinity land_affinity = 101;
 * @return {!proto.protobuf.FlowerQuery.LandAffinity}
 */
proto.protobuf.FlowerQuery.Filters.prototype.getLandAffinity = function() {
  return /** @type {!proto.protobuf.FlowerQuery.LandAffinity} */ (jspb.Message.getFieldWithDefault(this, 101, 0));
};


/** @param {!proto.protobuf.FlowerQuery.LandAffinity} value */
proto.protobuf.FlowerQuery.Filters.prototype.setLandAffinity = function(value) {
  jspb.Message.setProto3EnumField(this, 101, value);
};


/**
 * optional Planted planted = 102;
 * @return {!proto.protobuf.FlowerQuery.Planted}
 */
proto.protobuf.FlowerQuery.Filters.prototype.getPlanted = function() {
  return /** @type {!proto.protobuf.FlowerQuery.Planted} */ (jspb.Message.getFieldWithDefault(this, 102, 0));
};


/** @param {!proto.protobuf.FlowerQuery.Planted} value */
proto.protobuf.FlowerQuery.Filters.prototype.setPlanted = function(value) {
  jspb.Message.setProto3EnumField(this, 102, value);
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
proto.protobuf.FlowerQuery.Sorting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf.FlowerQuery.Sorting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protobuf.FlowerQuery.Sorting.displayName = 'proto.protobuf.FlowerQuery.Sorting';
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
proto.protobuf.FlowerQuery.Sorting.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf.FlowerQuery.Sorting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf.FlowerQuery.Sorting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.FlowerQuery.Sorting.toObject = function(includeInstance, msg) {
  var f, obj = {
    sortBy: jspb.Message.getFieldWithDefault(msg, 200, 0),
    sortOrder: jspb.Message.getFieldWithDefault(msg, 201, 0)
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
 * @return {!proto.protobuf.FlowerQuery.Sorting}
 */
proto.protobuf.FlowerQuery.Sorting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf.FlowerQuery.Sorting;
  return proto.protobuf.FlowerQuery.Sorting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf.FlowerQuery.Sorting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf.FlowerQuery.Sorting}
 */
proto.protobuf.FlowerQuery.Sorting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 200:
      var value = /** @type {!proto.protobuf.FlowerQuery.SortBy} */ (reader.readEnum());
      msg.setSortBy(value);
      break;
    case 201:
      var value = /** @type {!proto.protobuf.FlowerQuery.SortOrder} */ (reader.readEnum());
      msg.setSortOrder(value);
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
proto.protobuf.FlowerQuery.Sorting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf.FlowerQuery.Sorting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf.FlowerQuery.Sorting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.FlowerQuery.Sorting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSortBy();
  if (f !== 0.0) {
    writer.writeEnum(
      200,
      f
    );
  }
  f = message.getSortOrder();
  if (f !== 0.0) {
    writer.writeEnum(
      201,
      f
    );
  }
};


/**
 * optional SortBy sort_by = 200;
 * @return {!proto.protobuf.FlowerQuery.SortBy}
 */
proto.protobuf.FlowerQuery.Sorting.prototype.getSortBy = function() {
  return /** @type {!proto.protobuf.FlowerQuery.SortBy} */ (jspb.Message.getFieldWithDefault(this, 200, 0));
};


/** @param {!proto.protobuf.FlowerQuery.SortBy} value */
proto.protobuf.FlowerQuery.Sorting.prototype.setSortBy = function(value) {
  jspb.Message.setProto3EnumField(this, 200, value);
};


/**
 * optional SortOrder sort_order = 201;
 * @return {!proto.protobuf.FlowerQuery.SortOrder}
 */
proto.protobuf.FlowerQuery.Sorting.prototype.getSortOrder = function() {
  return /** @type {!proto.protobuf.FlowerQuery.SortOrder} */ (jspb.Message.getFieldWithDefault(this, 201, 0));
};


/** @param {!proto.protobuf.FlowerQuery.SortOrder} value */
proto.protobuf.FlowerQuery.Sorting.prototype.setSortOrder = function(value) {
  jspb.Message.setProto3EnumField(this, 201, value);
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.protobuf.FlowerQuery.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.protobuf.FlowerQuery.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Filters filters = 2;
 * @return {?proto.protobuf.FlowerQuery.Filters}
 */
proto.protobuf.FlowerQuery.prototype.getFilters = function() {
  return /** @type{?proto.protobuf.FlowerQuery.Filters} */ (
    jspb.Message.getWrapperField(this, proto.protobuf.FlowerQuery.Filters, 2));
};


/** @param {?proto.protobuf.FlowerQuery.Filters|undefined} value */
proto.protobuf.FlowerQuery.prototype.setFilters = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.protobuf.FlowerQuery.prototype.clearFilters = function() {
  this.setFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protobuf.FlowerQuery.prototype.hasFilters = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Sorting sorting = 3;
 * @return {?proto.protobuf.FlowerQuery.Sorting}
 */
proto.protobuf.FlowerQuery.prototype.getSorting = function() {
  return /** @type{?proto.protobuf.FlowerQuery.Sorting} */ (
    jspb.Message.getWrapperField(this, proto.protobuf.FlowerQuery.Sorting, 3));
};


/** @param {?proto.protobuf.FlowerQuery.Sorting|undefined} value */
proto.protobuf.FlowerQuery.prototype.setSorting = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.protobuf.FlowerQuery.prototype.clearSorting = function() {
  this.setSorting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protobuf.FlowerQuery.prototype.hasSorting = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.protobuf);
