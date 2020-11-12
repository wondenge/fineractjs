

import ApiClient from '../ApiClient';

/**
 * The GetAccountOptions model module.
 * @module model/GetAccountOptions
 * @version 1.0
 */
class GetAccountOptions {
    /**
     * Constructs a new <code>GetAccountOptions</code>.
     * @alias module:model/GetAccountOptions
     */
    constructor() { 
        
        GetAccountOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountOptions} obj Optional instance to populate.
     * @return {module:model/GetAccountOptions} The populated <code>GetAccountOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountOptions.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetAccountOptions.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetAccountOptions.prototype['description'] = undefined;






export default GetAccountOptions;

