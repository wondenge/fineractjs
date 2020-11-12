

import ApiClient from '../ApiClient';

/**
 * The PutCodesApichangesSwagger model module.
 * @module model/PutCodesApichangesSwagger
 * @version 1.0
 */
class PutCodesApichangesSwagger {
    /**
     * Constructs a new <code>PutCodesApichangesSwagger</code>.
     * @alias module:model/PutCodesApichangesSwagger
     */
    constructor() { 
        
        PutCodesApichangesSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutCodesApichangesSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutCodesApichangesSwagger} obj Optional instance to populate.
     * @return {module:model/PutCodesApichangesSwagger} The populated <code>PutCodesApichangesSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutCodesApichangesSwagger();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutCodesApichangesSwagger.prototype['name'] = undefined;






export default PutCodesApichangesSwagger;

