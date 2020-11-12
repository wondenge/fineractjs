

import ApiClient from '../ApiClient';

/**
 * The PutCodeValuesDataRequest model module.
 * @module model/PutCodeValuesDataRequest
 * @version 1.0
 */
class PutCodeValuesDataRequest {
    /**
     * Constructs a new <code>PutCodeValuesDataRequest</code>.
     * PutCodeValuesDataRequest
     * @alias module:model/PutCodeValuesDataRequest
     */
    constructor() { 
        
        PutCodeValuesDataRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutCodeValuesDataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutCodeValuesDataRequest} obj Optional instance to populate.
     * @return {module:model/PutCodeValuesDataRequest} The populated <code>PutCodeValuesDataRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutCodeValuesDataRequest();

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
PutCodeValuesDataRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PutCodeValuesDataRequest.prototype['description'] = undefined;

/**
 * @member {Number} position
 */
PutCodeValuesDataRequest.prototype['position'] = undefined;






export default PutCodeValuesDataRequest;

