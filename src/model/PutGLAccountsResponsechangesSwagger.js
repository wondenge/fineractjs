

import ApiClient from '../ApiClient';

/**
 * The PutGLAccountsResponsechangesSwagger model module.
 * @module model/PutGLAccountsResponsechangesSwagger
 * @version 1.0
 */
class PutGLAccountsResponsechangesSwagger {
    /**
     * Constructs a new <code>PutGLAccountsResponsechangesSwagger</code>.
     * @alias module:model/PutGLAccountsResponsechangesSwagger
     */
    constructor() { 
        
        PutGLAccountsResponsechangesSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutGLAccountsResponsechangesSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutGLAccountsResponsechangesSwagger} obj Optional instance to populate.
     * @return {module:model/PutGLAccountsResponsechangesSwagger} The populated <code>PutGLAccountsResponsechangesSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutGLAccountsResponsechangesSwagger();

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
PutGLAccountsResponsechangesSwagger.prototype['name'] = undefined;






export default PutGLAccountsResponsechangesSwagger;

