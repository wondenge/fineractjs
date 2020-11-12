

import ApiClient from '../ApiClient';

/**
 * The GetAccountTransfersToAccountTypeOptions model module.
 * @module model/GetAccountTransfersToAccountTypeOptions
 * @version 1.0
 */
class GetAccountTransfersToAccountTypeOptions {
    /**
     * Constructs a new <code>GetAccountTransfersToAccountTypeOptions</code>.
     * @alias module:model/GetAccountTransfersToAccountTypeOptions
     */
    constructor() { 
        
        GetAccountTransfersToAccountTypeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersToAccountTypeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersToAccountTypeOptions} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersToAccountTypeOptions} The populated <code>GetAccountTransfersToAccountTypeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersToAccountTypeOptions();

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
GetAccountTransfersToAccountTypeOptions.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetAccountTransfersToAccountTypeOptions.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetAccountTransfersToAccountTypeOptions.prototype['description'] = undefined;






export default GetAccountTransfersToAccountTypeOptions;

