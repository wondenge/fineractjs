

import ApiClient from '../ApiClient';

/**
 * The GetAccountTransfersFromAccountTypeOptions model module.
 * @module model/GetAccountTransfersFromAccountTypeOptions
 * @version 1.0
 */
class GetAccountTransfersFromAccountTypeOptions {
    /**
     * Constructs a new <code>GetAccountTransfersFromAccountTypeOptions</code>.
     * @alias module:model/GetAccountTransfersFromAccountTypeOptions
     */
    constructor() { 
        
        GetAccountTransfersFromAccountTypeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersFromAccountTypeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersFromAccountTypeOptions} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersFromAccountTypeOptions} The populated <code>GetAccountTransfersFromAccountTypeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersFromAccountTypeOptions();

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
GetAccountTransfersFromAccountTypeOptions.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetAccountTransfersFromAccountTypeOptions.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetAccountTransfersFromAccountTypeOptions.prototype['description'] = undefined;






export default GetAccountTransfersFromAccountTypeOptions;

