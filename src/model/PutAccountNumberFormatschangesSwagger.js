

import ApiClient from '../ApiClient';

/**
 * The PutAccountNumberFormatschangesSwagger model module.
 * @module model/PutAccountNumberFormatschangesSwagger
 * @version 1.0
 */
class PutAccountNumberFormatschangesSwagger {
    /**
     * Constructs a new <code>PutAccountNumberFormatschangesSwagger</code>.
     * @alias module:model/PutAccountNumberFormatschangesSwagger
     */
    constructor() { 
        
        PutAccountNumberFormatschangesSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutAccountNumberFormatschangesSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutAccountNumberFormatschangesSwagger} obj Optional instance to populate.
     * @return {module:model/PutAccountNumberFormatschangesSwagger} The populated <code>PutAccountNumberFormatschangesSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutAccountNumberFormatschangesSwagger();

            if (data.hasOwnProperty('prefixType')) {
                obj['prefixType'] = ApiClient.convertToType(data['prefixType'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} prefixType
 */
PutAccountNumberFormatschangesSwagger.prototype['prefixType'] = undefined;






export default PutAccountNumberFormatschangesSwagger;

