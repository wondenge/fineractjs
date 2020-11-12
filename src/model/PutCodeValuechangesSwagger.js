

import ApiClient from '../ApiClient';

/**
 * The PutCodeValuechangesSwagger model module.
 * @module model/PutCodeValuechangesSwagger
 * @version 1.0
 */
class PutCodeValuechangesSwagger {
    /**
     * Constructs a new <code>PutCodeValuechangesSwagger</code>.
     * @alias module:model/PutCodeValuechangesSwagger
     */
    constructor() { 
        
        PutCodeValuechangesSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutCodeValuechangesSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutCodeValuechangesSwagger} obj Optional instance to populate.
     * @return {module:model/PutCodeValuechangesSwagger} The populated <code>PutCodeValuechangesSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutCodeValuechangesSwagger();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutCodeValuechangesSwagger.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PutCodeValuechangesSwagger.prototype['description'] = undefined;

/**
 * @member {Number} position
 */
PutCodeValuechangesSwagger.prototype['position'] = undefined;






export default PutCodeValuechangesSwagger;

